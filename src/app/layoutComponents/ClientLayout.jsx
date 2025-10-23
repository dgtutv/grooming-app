"use client"

import Header from './Header';
import { usePathname } from 'next/navigation';
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const prefersDarkMode = true;

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: "light",
                    primary: {
                        main: '#646cff',
                    },
                    background: {
                        default: '#dde4e6ff',
                        paper: '#ffffff',
                    },
                    text: {
                        primary: '#213547',
                    },
                },
            }),
        []
    );

    // Hide header on auth pages
    const authPages = ['/sign-in', '/register', '/verify-email', '/reset-password', '/verify-reset'];
    const showHeader = !authPages.includes(pathname);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {showHeader && <Header />}
            {children}
        </ThemeProvider>
    );
}