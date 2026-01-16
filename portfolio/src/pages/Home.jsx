import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid text-center">
      <h1>{t('home.title')}</h1>
      <p>{t('home.intro')}</p>
    </div>
  );
}
