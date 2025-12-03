export type SettingsState = {
  navLayout?: 'vertical' | 'mini';
};

export type SettingsProviderProps = {
  children: React.ReactNode;
  cookieSettings?: SettingsState;
  defaultSettings: SettingsState;
  storageKey?: string;
};

export type SettingsContextValue = {
  state: SettingsState;
  setField: (name: keyof SettingsState, updateValue: SettingsState[keyof SettingsState]) => void;
};
