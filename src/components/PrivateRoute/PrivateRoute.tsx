import React from 'react';
import { Path } from '../../constants/Path';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../../redux/autorisation/authSelectors';

interface IProps {
    component: React.ComponentType;
    path?: string;
}

export const PrivateRoute = ({ component: Component, path }: IProps) => {
    const isAuth = useSelector(isAuthenticated);

    path = path || Path.LOGIN;

    return isAuth ? <Component /> : <Navigate to={path} />;
};