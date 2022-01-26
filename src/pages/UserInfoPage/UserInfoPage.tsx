import { useLocation } from 'react-router-dom';
import { IUser } from '../../interfaces/usersInterfaces';
import styles from './UserInfoPage.module.scss';
import UserInfo from '../../components/UserInfo/UserInfo';
import { Path } from '../../constants/Path';
import { useTranslation } from 'react-i18next';

const UserInfoPage = () => {
    const location = useLocation();
    const {t} = useTranslation();
    return (
    <>
        {location.pathname === Path.USER_INFO ? (
            <p className={styles.text}>{t('choose_user')}</p>
        ) : (
            <UserInfo user={location.state as IUser} />
        )}
    </>
    );
};
export default  UserInfoPage;