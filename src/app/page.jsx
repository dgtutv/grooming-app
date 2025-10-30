"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Card, Button, useMediaQuery, useTheme, Typography } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box sx={{
      width: "100%",
      height: "60vh",
      backgroundImage: "url('./cover.jpg')",
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
        padding: "40px 20px",
        borderRadius: "15px",
        textAlign: "center"

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
          <Button variant="contained">Our Services</Button>
          <Button variant="outlined">Contact Us</Button>
        </Box>
      </Box>
    </Box>

  );
}
