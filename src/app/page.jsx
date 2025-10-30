"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Card, Button, useMediaQuery, useTheme, Typography } from "@mui/material";
import Map from './components/Map';

export default function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Box>
            <Box sx={{
                width: "100%",
                height: "60vh",
                backgroundImage: "url('./purple-paws.jpg')",
                backgroundSize: "cover",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>

                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    backgroundColor: "rgba(0, 0, 0, 0.3)",
                    height: "60vh",
                    width: "100%",
                    borderRadius: "15px",
                    textAlign: "center",
                    padding: "10px 60px",
                    fontSize: "1.3rem"

                }}>
                    <Typography variant="h4">Chauffeur Grooming</Typography>
                    <Typography variant="subtitle">Mobile pet grooming delivered to your doorstep — comfortable, safe, and personalized care for every pet.</Typography>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        marginTop: "40px"
                    }}>
                        <Button sx={{ color: "white", backgroundColor: "black" }} variant="contained">Our Services</Button>
                        <Button sx={{ color: "white", backgroundColor: "black" }} variant="contained">Contact Us</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: '100%', padding: '2rem 1rem', backgroundColor: 'transparent' }}>
                <Map />
            </Box>
        </Box>
    );
}
