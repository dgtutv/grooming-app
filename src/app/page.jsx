"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Card, useMediaQuery, useTheme, Typography } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      {
        isMobile ? (
          <Box className={styles.page} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
          }
          }>
            <Card sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              padding: 4,
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.23)",
              maxWidth: 300,
              margin: "40px auto"
            }}>
              <Typography variant="h6" sx={{
                textAlign: "center",
                lineHeight: 1.8
              }}>
                Chauffeur Grooming’s mission is to provide compassionate, high-quality, and convenient pet grooming services delivered directly to your doorstep. We focus on comfort, safety, and personalized care for every animal, reducing the stress and anxiety associated with travel and traditional grooming salons.
              </Typography>
            </Card>
          </Box >
        ) : (
          <Box className={styles.page} sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
          }
          }>
            <Card sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              padding: 6,
              paddingY: 10,
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 4,
              borderRadius: 4,
              background: "rgba(255,255,255,0.23)",
              maxWidth: 600,
              margin: "40px auto"
            }}>
              <Typography variant="h5" sx={{
                textAlign: "center",
                lineHeight: 1.8
              }}>
                Chauffeur Grooming’s mission is to provide compassionate, high-quality, and convenient pet grooming services delivered directly to your doorstep. <br /> We focus on comfort, safety, and personalized care for every animal, reducing the stress and anxiety associated with travel and traditional grooming salons.              </Typography>
            </Card>
          </Box >
        )
      }
    </>
  );
}
