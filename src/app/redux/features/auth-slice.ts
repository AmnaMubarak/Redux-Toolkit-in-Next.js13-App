import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialState = {
    value: AuthState;

}
type AuthState = {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
}



const initialState = {
    value: {
        isAuth: false,
        username: '',
        uid: '',
        isModerator: false,
    } as AuthState,
} as initialState;

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            return initialState;
        },
        login: (state, action: PayloadAction<AuthState>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload.username,
                    uid: action.payload.uid,
                    isModerator: false,
                
            }
        }
    }
});

export const { login, logout } = auth.actions;
export default auth.reducer;
