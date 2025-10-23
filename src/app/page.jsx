import Image from "next/image";
import styles from "./page.module.css";
import { Box, Card, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box className={styles.page} sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center"
    }}>
      <Card sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        padding: 4,
        paddingY: 12,
        justifyContent: "center",
        alignItems: "center",
        boxShadow: 4,
        borderRadius: 4,
        background: "rgba(255,255,255,0,35)",
        maxWidth: 600,
        margin: "40px auto"
      }}>
        <Typography variant="p1" sx={{
          textAlign: "center"
        }}>
          Chauffeur Grooming’s mission is to provide compassionate, high-quality, and convenient pet grooming services delivered directly to your doorstep. We focus on comfort, safety, and personalized care for every animal—reducing the stress and anxiety associated with travel and traditional grooming salons. By bringing professional grooming to your home, we ensure a calm, familiar environment where your pet receives the attention and care they deserve. Our goal is to make grooming a positive, hassle-free experience for both pets and their owners.
        </Typography>
      </Card>
    </Box>
  );
}
