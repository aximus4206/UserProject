import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IUser } from '../../interfaces/usersInterfaces';
import { getUsers } from '../../redux/users/usersSelectors';
import styles from './UserInfo.module.scss';


const UserInfo = () => {
    const {t} = useTranslation();
    const users = useSelector(getUsers);
    const { id } = useParams();
  
    const user = users.find(user => user.login.uuid === id) as IUser;

    return (
        <div className={`${styles.userBox}`}>
            <img
                className={styles.userInfo__photo}
                src={user.picture.large}
                width="250"
                height="250"
                alt="User"
            />
            <div className={styles.userBox__info}>
                <p>
                    <b>{t('users_name')}</b>{' '}
                    {`${user.name.first} ${user.name.last}`}
                </p>
                <p>
                    <b>{t('users_birthdate')}</b>
                    {user.dob.date.slice(0, 10)}
                </p>
                <p>
                    <b>{t('users_sex')}</b>
                    {user.gender}
                </p>
                <p>
                    <b>{t('users_adress')}</b>
                    {user.location.city}
                </p>
                <p>
                    <b>{t('users_phone')}</b>
                    {user.phone}
                </p>
            </div>
        </div>
    )
};

export default UserInfo;