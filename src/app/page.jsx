"use client"
import { Box, Card, Button, useMediaQuery, useTheme, Typography } from "@mui/material";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Dynamically import the Map component on the client only to avoid server-side
// evaluation of browser-only libraries (leaflet / react-leaflet).
const Map = dynamic(() => import('./components/Map'), { ssr: false });

export default function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();

    // JSON-LD structured data for SEO
    // TODO: Update phone number, business hours, and service area details
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://chauffeur-grooming.up.railway.app",
        "name": "Chauffeur Grooming",
        "image": "https://chauffeur-grooming.up.railway.app/logo-outline.svg",
        "description": "Professional mobile pet grooming service in Fraser Valley, BC. Certified groomers providing stress-free, personalized care for dogs and cats at your doorstep.",
        "url": "https://chauffeur-grooming.up.railway.app",
        "telephone": "+1-604-353-6087",
        "email": "chauffeurgrooming@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abbotsford",
            "addressRegion": "BC",
            "addressCountry": "CA"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "49.0504",
            "longitude": "-122.3045"
        },
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "49.0504",
                "longitude": "-122.3045"
            },
            "geoRadius": "50000",
            "description": "Fraser Valley, BC including Abbotsford, Chilliwack, Mission, and surrounding areas"
        },
        "priceRange": "$$-$$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "17:00"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/chauffeur.grooming",
            "https://www.tiktok.com/@chauffeurgrooming"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Pet Grooming Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Mobile Dog Grooming",
                        "description": "Professional dog grooming at your home"
                    }
                }
            ]
        }
    };

    return (
        <>
            {/* JSON-LD structured data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Box className="main">
                <Box sx={{
                    width: "100%",
                    height: "60vh",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    {/* Background image using Next.js Image for better performance */}
                    <Image
                        src={isMobile ? "/krissy.jpg" : "/wompy.jpg"}
                        alt="Professional mobile pet grooming service - groomed dog"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                        sizes="100vw"
                    />

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        height: "60vh",
                        width: "100%",
                        textAlign: "center",
                        padding: "10px 60px",
                        fontSize: "1.3rem",
                        position: "relative",
                        zIndex: 1

                    }}>
                        <Typography variant="h4" component="h1" sx={{ color: 'white' }}>Chauffeur Grooming</Typography>
                        <Typography variant="subtitle" sx={{ color: 'white' }}>Mobile pet grooming delivered to your doorstep — comfortable, safe, and personalized care for every pet.</Typography>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                            marginTop: "40px"
                        }}>
                            <Button sx={{ color: "white", backgroundColor: "black" }} variant="contained" onClick={() => { router.push('/services') }}>Our Services</Button>
                            <Button sx={{ color: "white", backgroundColor: "black" }} variant="contained" onClick={() => { router.push('/contact') }}>Contact Us</Button>
                        </Box>
                    </Box>
                </Box>
                <Box sx={isMobile ? {
                    width: '100%',
                    padding: '2rem 1rem',
                    backgroundColor: 'transparent',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: "20px"
                } : {
                    width: '100%',
                    padding: '2rem 1rem',
                    backgroundColor: 'transparent',
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}>
                    <Box sx={{ flexGrow: "2" }}>
                        <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>Servicing The Fraser Valley</Typography>
                        <Typography variant="subtitle">Since 2026</Typography>
                    </Box>
                    <Map style={{ flexGrow: "5" }} />
                </Box>
            </Box>
        </>
    );
}
