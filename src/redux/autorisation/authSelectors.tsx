interface IAuth {
    auth:{
        isAuthenticated: boolean;
    } 
}

export const isAuthenticated = (state: IAuth) => state.auth.isAuthenticated;