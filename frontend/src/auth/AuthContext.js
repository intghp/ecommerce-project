import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                    // Você pode adicionar uma chamada para validar o token aqui
                    setUser({ token });
                }
            } catch (error) {
                console.error('Auth check error:', error);
                logout();
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/api/auth/login/', { email, password });
            const { access } = response.data;
            localStorage.setItem('token', access);
            axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
            setUser({ token: access });
            return { success: true };
        } catch (error) {
            return { success: false, message: error.response?.data?.detail || 'Login failed' };
        }
    };

    const register = async (email, username, password) => {
        try {
            await axios.post('/api/auth/register/', { email, username, password });
            return { success: true };
        } catch (error) {
            return { 
                success: false, 
                message: error.response?.data?.email?.[0] || 
                        error.response?.data?.username?.[0] || 
                        'Registration failed' 
            };
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);