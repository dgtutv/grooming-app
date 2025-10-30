import { useState } from 'react';
import "./layout.css";
import { IconButton, Drawer, Button, Box, Typography, useMediaQuery, useTheme, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

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
                                flexDirection: 'column'
                            },
                        }}
                    >
                        <Divider />
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

                </Box >
            )
            }
        </>
    );
};

export default Header;

