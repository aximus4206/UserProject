
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../redux/autorisation/authActions";
import styles from './Login.module.scss';

function LoginPage(): JSX.Element {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const login = () => dispatch(loginRequest());
    return (
    <div className={styles.form_container}>
    <h1>{t('login_header')}</h1>
            <button className={styles.submit__btn} type="submit" onClick={login}>
            {t('login')}
            </button>
    </div>
    )
}
export default  LoginPage;