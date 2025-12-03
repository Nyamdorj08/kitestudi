import { SettingsState } from './types';

export const SETTINGS_STORAGE_KEY: string = 'app-settings';

export const defaultSettings: SettingsState = {
  navLayout: 'vertical',
};
