import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '../store/userStore';

const AuthContext = createContext();

const mockUser = {
  id: '1',
  name: 'Admin User',
  email: 'admin@gmail.com',
  phone: '+91 8511830227',
  country: 'India',
  companyWebsite: 'https://www.example.com/',
  identity: 'In-House Team',
  balance: 25,
  status: 'Active',
  joinedOn: new Date().toISOString(),
  whatsappUpdates: true,
  paymentInfo: {
    country: 'India',
    method: 'paypal',
    paypalEmail: 'admin@gmail.com'
  }
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser, user } = useUserStore();

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      setUser(mockUser);
    }
  }, [setUser]);

  const login = useCallback(async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (email === 'admin@gmail.com' && password === '123456') {
        setIsAuthenticated(true);
        setUser(mockUser);
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, [navigate, setUser]);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  }, [navigate, setUser]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, error, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
