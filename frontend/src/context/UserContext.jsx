import { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState('Loading...');
    const [ipAddress, setIpAddress] = useState('');

    // Mock database for initial data
    const [mathData, setMathData] = useState([
        { id: '#88219', record: 95 },
        { id: '#33102', record: 82 },
        { id: '#11029', record: 78 },
    ]);

    const [pythonData, setPythonData] = useState([
        { id: '#55910', record: 98 },
        { id: '#99102', record: 88 },
        { id: '#12399', record: 45 },
    ]);

    useEffect(() => {
        const fetchIp = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setIpAddress(data.ip);

                // Generate ID from IP (simple hashing simulation)
                // Taking last 2 octets + random number to make it look cool like #10101
                const octets = data.ip.split('.');
                const simpleHash = octets[2] + octets[3];
                // Ensure 5 digits
                const cleanId = '#' + (simpleHash + '12345').slice(0, 5);

                setUserId(cleanId);

                // Add current user to tables if not exists
                setMathData(prev => [...prev, { id: cleanId, record: 0 }]);
                setPythonData(prev => [...prev, { id: cleanId, record: 0 }]);

            } catch (error) {
                console.error('Failed to fetch IP', error);
                const fallbackId = '#' + Math.floor(Math.random() * 90000 + 10000);
                setUserId(fallbackId);
                setMathData(prev => [...prev, { id: fallbackId, record: 0 }]);
                setPythonData(prev => [...prev, { id: fallbackId, record: 0 }]);
            }
        };

        fetchIp();
    }, []);

    return (
        <UserContext.Provider value={{ userId, ipAddress, mathData, pythonData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
