import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Path } from '../../constants/Path';
import { logoutRequest } from '../../redux/autorisation/authActions';
import { isAuthenticated } from '../../redux/autorisation/authSelectors';
import styles from './Header.module.scss';
import { useTranslation } from 'react-i18next';
import { LanguageBlock } from './LanguageBlock/LanguageBlock';

function Header() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutRequest());
    localStorage.clear();
  };
  const loggedIn = useSelector(isAuthenticated);
  return (
    <>
      <header>
        <div className={styles.container}>
          <NavLink to={Path.USERS}>
            <img className={styles.logo} src={Path.IMAGE_LOGO} title='' alt='LOGO' />
          </NavLink>
          <LanguageBlock />
          <nav className={styles.menu}>
          {loggedIn && (
            <ul>
              <li>
                <NavLink to={Path.USERS}>{t('header_users')}</NavLink>
              </li>
              <li>
                <NavLink to={Path.USER_INFO}>{t('user_info')}</NavLink>
              </li>
              <li>
                <NavLink to={Path.LOGIN}>
                    <button className={styles.logout} onClick={logout}>
                    {t('logout')}
                  </button>
                </NavLink>
              </li>
            </ul>
             )}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;