import i18next from 'i18next';
import styles from './LanguageBlock.module.scss';
import ru from '../../../assets/icons/ru.png';
import en from '../../../assets/icons/en.png';

export const LanguageBlock = () => {
  const changeLanguage = (language: string) => {
    i18next.changeLanguage(language);
  };
  return (
    <div className={styles.lang_wrapper}>
      <div className={styles.lang_flag} onClick={() => changeLanguage('ru')}>
        <img src={ru} alt="" />
      </div>
      <div className={styles.lang_flag} onClick={() => changeLanguage('en')}>
        <img src={en} alt="" />
      </div>
    </div>
  );
};