import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Path } from '../../constants/Path';
import { isAuthenticated } from '../../redux/autorisation/authSelectors';

interface IProps {
    component: React.ComponentType;
}

export const PublicRoute = ({ component: Component }: IProps) => {
    const isAuth = useSelector(isAuthenticated);

    return isAuth ? <Navigate replace to={Path.USERS} /> : <Component />;
};