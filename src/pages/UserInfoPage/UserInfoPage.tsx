import { getUsers } from '../../redux/users/usersSelectors';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './UserInfoPage.module.scss';
import UserInfo from '../../components/UserInfo/UserInfo';
import { Path } from '../../constants/Path';
import { useTranslation } from 'react-i18next';

const UserInfoPage = () => {
    const users = useSelector(getUsers);
    const location = useLocation();
    const {t} = useTranslation();
    return (
    <>
        {location.pathname === Path.USER_INFO || users.length === 0 ? (
            <p className={styles.text}>{t('choose_user')}</p>
        ) : (
            <UserInfo/>
        )}
    </>
    );
};
export default  UserInfoPage;