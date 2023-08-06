import { create } from 'zustand'

const initialState = {
    token: null,
    isAuthenticated: false,
    user: null
}

const useAuthenticationState = create((set) => ({
    authentication: initialState,
    setToken: (token) =>
        set((state) => ({
            authentication: {
                ...state.authentication,
                token,
            }
        })),
    unsetToken: () =>
        set((state) => ({
            authentication: {
                ...state.authentication,
                token: null,
                isAuthenticated: false
            }
        })),
    setUser: (user) =>
        set((state) => ({
            authentication: {
                ...state.authentication,
                token: user.token,
                user: user
            }
        })),
    unsetUser: (user) =>
        set((state) => ({
            authentication: {
                ...state.authentication,
                token: null,
                isAuthenticated: false,
                user: null
            }
        })),
    setIsAuthenticated: (isAuthenticated) =>
        set((state) => ({
            authentication: {
                ...state.authentication,
                isAuthenticated
            }

        })),                    
}))

export default useAuthenticationState
