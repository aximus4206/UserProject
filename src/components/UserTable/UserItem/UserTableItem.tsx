import { IUser } from '../../../interfaces/usersInterfaces';
import styles from './UserItem.module.scss';
import { NavLink } from 'react-router-dom';
import { Path } from '../../../constants/Path';

interface IProps {
  user: IUser;
}

const User = ({user}: IProps) => {
  
    return (
      <div className={`${styles.person} ${styles[user.gender]}`}>
            <NavLink
                className={styles.person__link}
                to={`${Path.USER_INFO}/${user.login.uuid}`}
                state={user}
            >
              <div className={styles.photo_container}>
              <img
                    className={styles.person__photo}
                    src={user.picture.large}
                    alt="User"
                    width="120"
                    height="120"
                />
              </div>
                <p
                    className={styles.person__name}
                >{`${user.name.first} ${user.name.last}`}</p>
                <p className={styles.person__birthday}>
                      {user.dob.date.slice(0, 10)}
                </p>
                <p className={styles.person__gender}>{user.gender}</p>
            </NavLink>
        </div>
    );
};
  
export default User;