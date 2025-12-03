import type { EditorOptions } from '@tiptap/core';

import { useMemo } from 'react';
import { Bold } from '@tiptap/extension-bold';
import { Code } from '@tiptap/extension-code';
import { Link } from '@tiptap/extension-link';
import { Text } from '@tiptap/extension-text';
import { Color } from '@tiptap/extension-color';
import { Italic } from '@tiptap/extension-italic';
import { Strike } from '@tiptap/extension-strike';
import { History } from '@tiptap/extension-history';
import { Mention } from '@tiptap/extension-mention';
import { Document } from '@tiptap/extension-document';
import { ListItem } from '@tiptap/extension-list-item';
import { TableRow } from '@tiptap/extension-table-row';
import { TaskItem } from '@tiptap/extension-task-item';
import { TaskList } from '@tiptap/extension-task-list';
import { Gapcursor } from '@tiptap/extension-gapcursor';
import { Highlight } from '@tiptap/extension-highlight';
import { Paragraph } from '@tiptap/extension-paragraph';
import { Subscript } from '@tiptap/extension-subscript';
import { Underline } from '@tiptap/extension-underline';
import { CodeBlock } from '@tiptap/extension-code-block';
import { HardBreak } from '@tiptap/extension-hard-break';
import { TableCell } from '@tiptap/extension-table-cell';
import { TextAlign } from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import { Blockquote } from '@tiptap/extension-blockquote';
import { Dropcursor } from '@tiptap/extension-dropcursor';
import { BulletList } from '@tiptap/extension-bullet-list';
import { FontFamily } from '@tiptap/extension-font-family';
import { Placeholder } from '@tiptap/extension-placeholder';
import { Superscript } from '@tiptap/extension-superscript';
import { OrderedList } from '@tiptap/extension-ordered-list';
import { TableHeader } from '@tiptap/extension-table-header';
import { HorizontalRule } from '@tiptap/extension-horizontal-rule';
import {
  FontSize,
  TableImproved,
  ResizableImage,
  HeadingWithAnchor,
  LinkBubbleMenuHandler,
} from 'mui-tiptap';

import { mentionSuggestionOptions } from './useMentionSuggestions';

export type UseExtensionsOptions = {
  placeholder?: string;
};

const CustomLinkExtension = Link.extend({
  inclusive: false,
});

const CustomSubscript = Subscript.extend({
  excludes: 'superscript',
});

const CustomSuperscript = Superscript.extend({
  excludes: 'subscript',
});

export default function useExtensions({
  placeholder,
}: UseExtensionsOptions = {}): EditorOptions['extensions'] {
  return useMemo(
    () => [
      TableImproved.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,

      BulletList,
      CodeBlock,
      Document,
      HardBreak,
      ListItem,
      OrderedList,
      Paragraph,
      CustomSubscript,
      CustomSuperscript,
      Text,

      Bold,
      Blockquote,

      Code,
      Italic,
      Underline,
      Strike,
      CustomLinkExtension.configure({
        autolink: true,
        linkOnPaste: true,
        openOnClick: false,
      }),
      LinkBubbleMenuHandler,

      // Extensions
      Gapcursor,
      HeadingWithAnchor,
      TextAlign.configure({
        types: ['heading', 'paragraph', 'image'],
      }),
      TextStyle,
      Color,
      FontFamily,
      FontSize,
      Highlight.configure({ multicolor: true }),
      HorizontalRule,

      ResizableImage.configure({
        inline: true,
      }),
      // When images are dragged, we want to show the "drop cursor" for where they'll
      // land
      Dropcursor,

      TaskList,
      TaskItem.configure({
        nested: true,
      }),

      Mention.configure({
        suggestion: mentionSuggestionOptions,
      }),

      Placeholder.configure({
        placeholder,
      }),

      // We use the regular `History` (undo/redo) extension when not using
      // collaborative editing
      History,
    ],
    [placeholder]
  );
}
