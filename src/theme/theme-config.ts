import type { CommonColors } from '@mui/material/styles/createPalette';

import type { PaletteColorNoChannels } from './core/palette';
import type { ThemeDirection, ThemeColorScheme, ThemeCssVariables } from './types';

// ----------------------------------------------------------------------

type ThemeConfig = {
  classesPrefix: string;
  modeStorageKey: string;
  direction: ThemeDirection;
  defaultMode: ThemeColorScheme;
  cssVariables: ThemeCssVariables;
  fontFamily: Record<'primary' | 'secondary', string>;
  palette: Record<
    'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error',
    PaletteColorNoChannels
  > & {
    common: Pick<CommonColors, 'black' | 'white'>;
    teal: Record<
      '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
      string
    >;
    blue: Record<
      '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
      string
    >;
    emerald: Record<
      '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
      string
    >;
    red: Record<'200' | '300' | '400' | '500', string>;
    grey: Record<
      '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900',
      string
    >;
  };
};

export const themeConfig: ThemeConfig = {
  /** **************************************
   * Base
   *************************************** */
  direction: 'ltr',
  defaultMode: 'dark',
  modeStorageKey: 'theme-mode',
  classesPrefix: 'studii',
  /** **************************************
   * Typography
   *************************************** */
  fontFamily: {
    primary: 'TT Commons Pro',
    secondary: 'TT Commons Pro',
  },
  /** **************************************
   * Palette
   *************************************** */
  palette: {
    primary: {
      lighter: '#C9FBF7',
      light: '#5FE0EA',
      main: '#0292BA',
      dark: '#015585',
      darker: '#002B59',
      contrastText: '#FFFFFF',
    },

    secondary: {
      lighter: '#C9FBF7',
      light: '#5FE0EA',
      main: '#0292BA',
      dark: '#015585',
      darker: '#002B59',
      contrastText: '#FFFFFF',
    },

    // ---- Success, Warning, Error (your exact used colors)
    success: {
      lighter: '#D3FCD2',
      light: '#77ED8B',
      main: '#22C55E', // Buttons, gradients
      dark: '#118D57',
      darker: '#065E49',
      contrastText: '#FFFFFF',
    },

    warning: {
      lighter: '#FFF5CC',
      light: '#FFD666',
      main: '#FFAB00',
      dark: '#B76E00',
      darker: '#7A4100',
      contrastText: '#1C252E',
    },

    error: {
      lighter: '#FFE9D5',
      light: '#FFAC82',
      main: '#FF5630',
      dark: '#B71D18',
      darker: '#7A0916',
      contrastText: '#FFFFFF',
    },

    info: {
      lighter: '#E5FBD3',
      light: '#9AEA7B',
      main: '#39BC27',
      dark: '#004896',
      darker: '#075A17',
      contrastText: '#FFFFFF',
    },
    teal: {
      50: '#f0fdfa',
      100: '#ccfbf1',
      200: '#99f6e4',
      300: '#5eead4',
      400: '#2dd4bf',
      500: '#14b8a6',
      600: '#0d9488',
      700: '#0f766e',
      800: '#115e59',
      900: '#134e4a',
    },
    blue: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    emerald: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#059669',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
    },
    red: {
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
    },

    // ---- Greys (Exactly matching your text, borders, muted labels)
    grey: {
      50: '#FCFDFD',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#C4CDD5',
      500: '#919EAB',
      600: '#637381', // text.secondary inside dialogs, paragraphs
      700: '#454F5B',
      800: '#1C252E',
      900: '#141A21', // Quiz background, text shadows
    },

    // ---- True UI Colors FROM your current design

    common: {
      white: '#FFFFFF',
      black: '#000000',
    },

    // ---- Extra UI colors (used in borders, glows, gradients)
  },
  /** **************************************
   * Css variables
   *************************************** */
  cssVariables: {
    cssVarPrefix: '',
    colorSchemeSelector: 'data-color-scheme',
  },
};

export const defaultSettings: SettingsState = {
  colorScheme: themeConfig.defaultMode,
  direction: themeConfig.direction,
  contrast: 'default',
  navLayout: 'vertical',
  primaryColor: 'default',
  navColor: 'integrate',
  compactLayout: true,
  fontSize: 16,
  fontFamily: themeConfig.fontFamily.primary,
};

export type SettingsState = {
  version?: string;
  fontSize?: number;
  fontFamily?: string;
  compactLayout?: boolean;
  direction?: ThemeDirection;
  colorScheme?: ThemeColorScheme;
  contrast?: 'default' | 'hight';
  navColor?: 'integrate' | 'apparent';
  navLayout?: 'vertical' | 'horizontal' | 'mini';
  primaryColor?: 'default' | 'preset1' | 'preset2' | 'preset3' | 'preset4' | 'preset5';
};
