import React from "react";
import { useTranslation } from "react-i18next";
import UserTable from "../../components/UserTable/UserTable";

function UsersPage(): JSX.Element {
    const {t} = useTranslation();
  
    return (
    <>
        <h1>{t('users_page')}</h1>
        <UserTable />
    </>
    )
    
}
export default  UsersPage;