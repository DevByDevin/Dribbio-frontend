import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(nextLang);
  };
  console.log(i18n.language);
  return (
    <button
      onClick={toggleLanguage}
      className={`px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 transition`}
    >
      {i18n.language === 'en' ? '中文' : 'English'}
    </button>
  );
};
