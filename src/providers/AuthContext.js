'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
    isLoggedIn: false,
    isLoading: true,
    login: () => {},
    logout: () => {},
});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
        setIsLoading(false);
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return <AuthContext.Provider value={{ isLoggedIn, isLoading, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
