import React from 'react';
import { Box, Paper, Typography, Chip, Divider, List, ListItem, ListItemText } from '@mui/material';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from 'recharts';
import { PsychProfile } from 'src/services/types/Studyy.type';

type Props = {
  data: PsychProfile;
  maxScore?: number;
};

export default function ResultSection({ data, maxScore = 20 }: Props) {
  const sections = [
    {
      key: 'self_sabotage',
      label: 'Дадал',
      title: data.self_sabotage.title,
      score: data.self_sabotage.score,
      text: data.self_sabotage.result,
      clusters: data.self_sabotage.clusters,
    },
    {
      key: 'lifestyle',
      label: 'Амьдралын хэв маяг',
      title: data.lifestyle.title,
      score: data.lifestyle.score,
      text: data.lifestyle.result,
      clusters: data.lifestyle.clusters,
    },
    {
      key: 'mindset',
      label: 'Сэтгэхүй',
      title: data.mindset.title,
      score: data.mindset.score,
      text: data.mindset.result,
      clusters: data.mindset.clusters,
    },
    {
      key: 'relationship',
      label: 'Харилцаа',
      title: data.relationship.title,
      score: data.relationship.score,
      text: data.relationship.result,
      clusters: data.relationship.clusters,
    },
  ] as const;

  const radarData = sections.map((s) => ({
    subject: `Эрүүл ${s.label.toLowerCase()}`,
    value: 25 - s.score,
    full: maxScore,
  }));
  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <Paper
        elevation={0}
        sx={{
          bgcolor: '#f9fafb',
          p: 2,
          whiteSpace: 'pre-line',
          fontSize: '0.95rem',
          borderLeft: '4px solid rgba(0, 255, 179, 0.3)',
        }}
      >
        <Typography variant="subtitle2" fontWeight={700} gutterBottom>
          Нийт дүгнэлт
        </Typography>
        {data.overall_summary}
      </Paper>

      <Paper
        elevation={0}
        sx={{ p: 2, bgcolor: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 2 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="subtitle1" fontWeight={700}>
            Онооны тойм
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {sections.map((s) => (
              <Chip key={s.key} size="small" label={`${25 - s.score}/${maxScore}`} />
            ))}
          </Box>
        </Box>
        <Divider sx={{ mb: 2 }} />
        <Box sx={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <RadarChart data={radarData} margin={{ top: 10, right: 20, bottom: 10, left: 20 }}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" tick={{ fontSize: 12 }} />
              <PolarRadiusAxis domain={[0, maxScore]} tickCount={5} />
              <Tooltip formatter={(v: number) => `${v}/${maxScore}`} />
              <Radar
                name="Score"
                dataKey="value"
                stroke="#00FFB3"
                fill="#00FFB3"
                fillOpacity={0.3}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      {sections.map((s) => (
        <Paper
          key={s.key}
          elevation={0}
          sx={{
            bgcolor: '#f9fafb',
            p: 2,
            fontSize: '0.95rem',
            borderLeft: '4px solid rgba(0, 255, 179, 0.3)',
          }}
        >
          <Typography variant="subtitle2" fontWeight={700} gutterBottom>
            {s.label} ( {s.title} ){' '}
            <Chip size="small" sx={{ ml: 1 }} label={`${25 - s.score}/${maxScore}`} />
          </Typography>

          {/* <Typography sx={{ whiteSpace: 'pre-line', mb: 1 }}>{s.text}</Typography> */}

          {s.clusters?.map((c, idx) => (
            <Box
              key={idx}
              sx={{
                bgcolor: '#ffffff',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: 2,
                p: 1.5,
                mb: 1.5,
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                {c.label}
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                {c.sentences?.join(' ')}
              </Typography>
              <Box sx={{ display: 'grid', gap: 1, mt: 0.5 }}>
                <Typography variant="body2">
                  <b>Давуу:</b> {c.strength}
                </Typography>
                <Typography variant="body2">
                  <b>Сул тал:</b> {c.flaw}
                </Typography>
                <Typography variant="body2">
                  <b>Онооны үндэслэл:</b> {c.score_reason}
                </Typography>
                <Typography variant="body2">
                  <b>Ирээдүйн логик:</b> {c.future_logic}
                </Typography>
              </Box>
            </Box>
          ))}
        </Paper>
      ))}

      {!!data.recommendations?.length && (
        <Paper
          elevation={0}
          sx={{ p: 2, bgcolor: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: 2 }}
        >
          <Typography variant="subtitle1" fontWeight={700} gutterBottom>
            Зөвлөмж
          </Typography>
          <List dense>
            {data.recommendations.map((r, i) => (
              <ListItem key={i} disableGutters>
                <ListItemText primary={r} />
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}
