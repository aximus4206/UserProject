// export interface IUser {
//     id: number;
//     first_name: string;
//     last_name: string;
//     date_created: number;
//     date_birth: number;
// }

// export interface IUsersState {
//     users: IUser[];
// }
  
export interface IAction<T> {
    type: string;
    payload: T & T[];
}

export interface IUser {
    gender: string;
    name: {
        title: string;
        first: string;
        last: string;
    };
    location: {
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
            latitude: string;
            longitude: string;
        };
        timezone: {
            offset: string;
            description: string;
        };
    };
    dob: {
        date: string;
        age: number;
    };
    registered: {
        date: string;
        age: number;
    };
    phone: string;
    login: {
        uuid: string;
        username: string;
        password: string;
        salt: string;
        md5: string;
        sha1: string;
        sha256: string;
    };
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
}

export interface IUsersState {
    // authReducer: {
    //     isAuthenticated: boolean;
    // };

    users: IUser[];

    // localeReducer: {
    //     locale: string;
    // };
}

export interface IUserState {
    users: {
      users: IUser[];
    };
}