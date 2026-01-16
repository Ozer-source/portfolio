
import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import './css/Project.css';


function Projects() {
  const { t } = useTranslation();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 text-center">
          <h1>{t('projects.title')}</h1>
          <p>{t('projects.description')}</p>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 d-flex flex-row flex-wrap justify-content-center gap-3">
          {/* Mc-Wordle Card */}
          <div className="card project-card" >
            <div className="card-body">
              <h5 className="card-title title"><img src="https://img.icons8.com/?size=50&id=XfjNd4vkhBBy&format=png&color=000000" alt="mcwordle" /> {t('projects.mcwordle.title')}</h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">{t('projects.mcwordle.stack')}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{t('projects.mcwordle.hosted')}</h6>
              <p className="card-text">{t('projects.mcwordle.desc')}</p>
              <a href="https://ozer-source.github.io/MC-Wordle/" className="card-link">{t('projects.mcwordle.link')}</a>
            </div>
          </div>
          {/* Pokemon Card */}
          <div className="card project-card" >
            <div className="card-body">
              <h5 className="card-title title"><img src="https://img.icons8.com/?size=50&id=45656&format=png&color=000000" alt="pokemon" /> {t('projects.pokemon.title')}</h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">{t('projects.pokemon.stack')}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{t('projects.pokemon.hosted')}</h6>
              <p className="card-text">{t('projects.pokemon.desc')}</p>
              <a href="https://ozer-source.github.io/Pokemin/" className="card-link">{t('projects.pokemon.link')}</a>
            </div>
          </div>
          {/* Inlog Card */}
          <div className="card project-card" >
            <div className="card-body">
              <h5 className="card-title title"><img src="https://img.icons8.com/?size=50&id=hUvxmdu7Rloj&format=png&color=000000" alt="inlog" /> {t('projects.inlog.title')}</h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">{t('projects.inlog.stack')}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{t('projects.inlog.hosted')}</h6>
              <p className="card-text">{t('projects.inlog.desc')}</p>
              <a href="https://github.com/Ozer-source/project-opdr3/tree/main" className="card-link">{t('projects.inlog.link')}</a>
            </div>
          </div>
          {/* Laravel Card */}
          <div className="card project-card" >
            <div className="card-body">
              <h5 className="card-title title"><img src="https://img.icons8.com/?size=50&id=hUvxmdu7Rloj&format=png&color=000000" alt="laravel" /> {t('projects.laravel.title')}</h5>
              <h5 className="card-subtitle mb-2 text-body-secondary">{t('projects.laravel.stack')}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">{t('projects.laravel.hosted')}</h6>
              <p className="card-text">
                <Trans i18nKey="projects.laravel.desc">
                  I followed a tutorial from <a href="https://laracasts.com/">Laracast</a> by Jeffrey Way!
                </Trans>
              </p>
              <a href="https://github.com/Ozer-source/project-opdr3/tree/main" className="card-link">{t('projects.laravel.link')}</a>
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Projects;