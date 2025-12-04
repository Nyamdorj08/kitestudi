import 'src/global.css';

import type { Metadata, Viewport } from 'next';

import { Toaster } from 'sonner';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import { CONFIG } from 'src/global-config';
import { primary } from 'src/theme/core/palette';
import { themeConfig, ThemeProvider } from 'src/theme';
import { defaultSettings } from 'src/theme';

import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { GoogleAnalytics } from 'src/layouts/components/google-analytics';
import Script from 'next/script';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: primary.main,
};

export const metadata: Metadata = {
  title: 'Studii.mn - суралцах хэв маягийн тест',
  description: 'Муу сурдаггүй, буруу л сурдаг. Суралцах хамгийн зөв аргаа мэдэж аваарай.',
  icons: [
    {
      rel: 'icon',
      url: `${CONFIG.assetsDir}/favicon.ico`,
    },
  ],
  openGraph: {
    title: 'Studii.mn - суралцах хэв маягийн тест',
    description: 'Муу сурдаггүй, буруу л сурдаг. Суралцах хамгийн зөв аргаа мэдэж аваарай.',
    url: 'https://studii.mn',
    type: 'website',
    images: [
      {
        url: 'https://studii.mn/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Муу сурдаггүй, буруу л сурдаг. Суралцах хамгийн зөв аргаа мэдэж аваарай.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studii.mn - суралцах хэв маягийн тест',
    description: 'Муу сурдаггүй, буруу л сурдаг. Суралцах хамгийн зөв аргаа мэдэж аваарай.',
    images: ['https://studii.mn/og-image.png'],
  },
  other: {
    'fb:app_id': '747060114451984',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

async function getAppConfig() {
  return {
    cookieSettings: undefined,
    dir: defaultSettings.direction,
  };
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const appConfig = await getAppConfig();

  return (
    <html lang="mn" dir={appConfig.dir} suppressHydrationWarning>
      <Script id="fb-pixel" strategy="afterInteractive">
        {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2081048489321432');
              fbq('track', 'PageView');
            `}
      </Script>

      <body>
        <InitColorSchemeScript
          defaultMode={themeConfig.defaultMode}
          modeStorageKey={themeConfig.modeStorageKey}
          attribute={themeConfig.cssVariables.colorSchemeSelector}
        />
        <GoogleAnalytics />
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider
            defaultMode={themeConfig.defaultMode}
            modeStorageKey={themeConfig.modeStorageKey}
          >
            <MotionLazy>
              <ProgressBar />
              <Toaster />
              {children}
            </MotionLazy>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
