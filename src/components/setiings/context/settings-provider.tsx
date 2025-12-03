'use client';

import { useMemo } from 'react';
import { defaultSettings, SETTINGS_STORAGE_KEY } from '../settings-config';
import { SettingsProviderProps, SettingsState } from '../types';
import { useCookies, useLocalStorage } from 'minimal-shared/hooks';
import { SettingsContext } from './settings-context';

export function SettingsProvider({
  children,
  cookieSettings,
  defaultSettings,
  storageKey = SETTINGS_STORAGE_KEY,
}: SettingsProviderProps) {
  const isCookieEnabled = !!cookieSettings;
  const useStorage = isCookieEnabled ? useCookies : useLocalStorage;

  const initialSettings = isCookieEnabled ? cookieSettings : defaultSettings;

  const { state, setField } = useStorage<SettingsState>(storageKey, initialSettings);

  const memorizedValue = useMemo(() => ({ state, setField }), [state, setField]);

  return <SettingsContext.Provider value={memorizedValue}>{children}</SettingsContext.Provider>;
}
