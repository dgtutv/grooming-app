"use client"

import Header from './Header';
import { usePathname } from 'next/navigation';
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import { useMemo } from 'react';
import Footer from './Footer';

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
                typography: {
                    // Use the CSS variable provided by next/font (Lora) for the whole app
                    fontFamily: 'var(--font-lora), serif',
                },
                components: {
                    MuiButton: {
                        defaultProps: {
                            // make buttons contained by default if desired
                            variant: 'contained',
                        },
                        styleOverrides: {
                            contained: {
                                backgroundColor: '#000000',
                                color: '#ffffff',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#111111',
                                },
                            },
                        },
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
            {showHeader && <Header />}
            {children}
            <Footer />
        </ThemeProvider>
    );
}