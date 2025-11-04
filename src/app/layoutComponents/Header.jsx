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
                                bgcolor: '#000000',
                                borderRight: 1,
                                borderColor: 'divider',
                                display: 'flex',
                                flexDirection: 'column',
                                p: 2,
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {navLinks.map((link) => (
                                <Button
                                    key={link.href}
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        router.push(link.href);
                                    }}
                                    sx={{ justifyContent: 'flex-start', color: '#fff', textTransform: 'none' }}
                                >
                                    {link.label}
                                </Button>
                            ))}
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
                        {navLinks.map((link) => (
                            <Button
                                key={link.href}
                                component={Link}
                                href={link.href}
                                color="inherit"
                                variant="text"
                                className={pathname === link.href ? 'activeLinkStyle' : 'linkStyle'}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Box>
                </Box >
            )
            }
        </>
    );
};

export default Header;

