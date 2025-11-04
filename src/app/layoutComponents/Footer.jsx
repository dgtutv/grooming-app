import { useTheme } from '@emotion/react'
import { Box, useMediaQuery, Typography, Link } from '@mui/material';
import React from 'react'
import Image from 'next/image';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SvgIcon from '@mui/material/SvgIcon';
import { useRouter } from 'next/navigation';


function TikTokIcon(props) {
    return (
        <SvgIcon {...props} viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </SvgIcon>
    );
}

const iconStyle = {
    width: "1.8rem",
    height: "auto",
    fill: "#27282bff",
    transition: "all 0.2s ease-in-out",
    '&:hover': {
        fill: "#536294ff",
        cursor: "pointer",
        width: "2rem"
    }
}

export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const navLinks = [
        { label: 'About', href: '/about-us' },
        { label: 'Contact', href: '/contact-us' }
    ]
    const router = useRouter();


    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "white",
            color: "black",
            padding: '20px'
        }}>
            <Box id="lh" sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                flexGrow: "2"
            }}>
                <Box id='logo' sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}>
                    <Image
                        src="/logo-outline.svg"
                        alt="Chauffeur Grooming logo"
                        width={80}
                        height={80}
                        style={{ display: 'block' }}
                    />
                    <Typography variant='h6'>Chauffeur Grooming</Typography>
                </Box>
                <Typography variant='subtitle'>Mobile pet grooming delivered to your doorstep.</Typography>
                <Box id='icons' sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    gap: "20px"
                }}>
                    <FacebookIcon sx={iconStyle} />
                    <InstagramIcon sx={iconStyle} onClick={() => {
                        router.push("https://www.instagram.com/chauffeur.grooming?igsh=MXQycW1pbG81bXBkYg%3D%3D&utm_source=qr")
                    }} />
                    <TikTokIcon sx={iconStyle} onClick={() => {
                        router.push("https://www.tiktok.com/@chauffeurgrooming?_r=1&_t=ZS-916c6gnQ22C");
                    }} />
                </Box>
            </Box>
        </Box>
    )
}
