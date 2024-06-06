
export const types = {
    login: '[Auth] Login',
    logout: '[Auth] Logout'
}
export type AuthState = {
    isLoggedIn: boolean;
    user: User | undefined;
};
export type AuthAction = {
    type: string;
    payload?: User
};
export type User = {
    userName: string;
    email: string;
}
export type UserLogin = {
    email: string;
    password: string
}
export type AuthContextType = {
    isLoggedIn: boolean;
    user: User | undefined;
    login: (user: UserLogin) => Promise<void>;
    logout: () => Promise<void>
}
