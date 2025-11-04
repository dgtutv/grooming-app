"use client"

import { useState } from 'react';
import "./layout.css";
import { IconButton, Drawer, Box, Typography, Button, useMediaQuery, useTheme, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    // Navigation links generated from this array
    const navLinks = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about-us' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' },
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <>
            {isMobile ? (
                <Box
                    component="header"
                    className="headerCommon"
                >
                    <Drawer
                        anchor="left"
                        open={mobileMenuOpen}
                        onClose={toggleMobileMenu}
                        sx={{
                            "& .MuiDrawer-paper": {
                                width: "280px",
                                maxWidth: "75vw",
                                bgcolor: 'var(--header-bg)',
                                borderRight: '1px solid var(--text-primary)',
                                display: 'flex',
                                flexDirection: 'column',
                            },
                        }}
                    >
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            p: 2,
                            borderBottom: '1px solid var(--text-primary)'
                        }}>
                            <Image
                                src="/logo-outline.svg"
                                alt="Chauffeur Grooming logo"
                                width={60}
                                height={60}
                                style={{ display: 'block' }}
                            />
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    fontFamily: "'Playfair Display', serif",
                                    color: 'var(--text-primary)',
                                    fontWeight: 600
                                }}
                            >
                                Chauffeur Grooming
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, p: 2 }}>
                            {navLinks.map((link) => {
                                const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href);
                                return (
                                    <Button
                                        key={link.href}
                                        onClick={() => {
                                            setMobileMenuOpen(false);
                                            router.push(link.href);
                                        }}
                                        className={isActive ? 'activeLinkStyle' : 'linkStyle'}
                                        sx={{
                                            justifyContent: 'flex-start',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            backgroundColor: 'transparent',
                                            color: 'var(--text-primary)',
                                            '&:hover': {
                                                backgroundColor: 'var(--link-hover)',
                                                color: 'var(--text-hover)',
                                            },
                                            ...(isActive && {
                                                backgroundColor: 'var(--active-bg)',
                                                color: 'white',
                                                borderBottom: '2px solid var(--active-border)',
                                            }),
                                        }}
                                    >
                                        {link.label}
                                    </Button>
                                );
                            })}
                        </Box>
                    </Drawer>
                    <Box className="headerInner">
                        <Image
                            src="/logo-outline.svg"
                            alt="Chauffeur Grooming logo"
                            width={80}
                            height={80}
                            style={{ display: 'block' }}
                        />
                        <Typography variant="h5" component="h1" color="text.primary" sx={{ fontFamily: "'Playfair Display', serif" }} onClick={(e) => {
                            e.preventDefault();
                            router.push('/');
                        }}>
                            Chauffeur Grooming
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <IconButton
                            sx={{ zIndex: 1300, color: 'black' }}
                            onClick={toggleMobileMenu}
                            aria-label="open menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                </Box>

            ) : (
                <Box
                    component="header"
                    className="headerCommon"
                >
                    <Box className="headerInner">
                        <Image
                            src="/logo-outline.svg"
                            alt="Chauffeur Grooming logo"
                            width={80}
                            height={80}
                            style={{ display: 'block' }}
                        />
                        <Typography variant="h4" component="h1" color="text.primary" sx={{ fontFamily: "'Playfair Display', serif" }}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push('/');
                            }}>
                            Chauffeur Grooming
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 2, ml: 4 }}>
                        {navLinks.map((link) => {
                            const isActive = link.href === '/' ? pathname === '/' : pathname?.startsWith(link.href);
                            return (
                                <Button
                                    key={link.href}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        router.push(link.href);
                                    }}
                                    className={isActive ? 'activeLinkStyle' : 'linkStyle'}
                                    sx={{
                                        justifyContent: 'flex-start',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 500,
                                        backgroundColor: 'transparent',
                                        color: 'var(--text-primary)',
                                        '&:hover': {
                                            backgroundColor: 'var(--link-hover)',
                                            color: 'var(--text-hover)',
                                        },
                                        ...(isActive && {
                                            backgroundColor: 'var(--active-bg)',
                                            color: 'white',
                                            borderBottom: '2px solid var(--active-border)',
                                        }),
                                    }}
                                >
                                    {link.label}
                                </Button>
                            );
                        })}
                    </Box>
                </Box >
            )
            }
        </>
    );
};

export default Header;

