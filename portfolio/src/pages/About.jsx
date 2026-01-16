


import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <h1>{t('about.title')}</h1>
          <p dangerouslySetInnerHTML={{ __html: t('about.description') }} />
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default About;