import i18next from 'i18next';
import EN from '../locals/en_US';


i18next.init({
  // we init with resources
  lng: 'en', // language to use
  resources: {
    en: { translation: { ...EN } },
  },
  interpolation: {
    skipOnVariables: true,
  },
  fallbackLng: 'dev',
  // have a common namespace used around the full app
  ns: ['translation'],
  defaultNS: 'translation',
  keySeparator: false,
  detection: {
    order: ['localStorage'],
  },
});

export default i18next;
