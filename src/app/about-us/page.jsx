import Image from 'next/image'
import { Box, Grid, Card, CardContent, Typography } from '@mui/material'

const TeamCard = ({ name, imageSrc, role, bio }) => (
    <Card elevation={3} sx={{ borderRadius: 3 }}>
        <CardContent>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3, alignItems: 'center' }}>
                <Box sx={{
                    // Responsive image: full-width hero on small screens, circular on larger screens
                    width: { xs: '100%', sm: 220 },
                    height: { xs: 300, sm: 220 },
                    borderRadius: { xs: 2, sm: '50%' },
                    overflow: 'hidden',
                    border: { xs: '4px solid var(--text-color)', sm: '3px solid var(--text-color)' },
                    boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
                    flexShrink: 0,
                }}>
                    <Image src={imageSrc} alt={name} width={220} height={220} style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }} />
                </Box>

                <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 0.5 }}>{name}</Typography>
                    {role && <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>{role}</Typography>}
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{bio}</Typography>
                </Box>
            </Box>
        </CardContent>
    </Card>
)

export default function Page() {
    return (
        <Box sx={{ bgcolor: "#9492a3ff" }}>
            <Box sx={{ maxWidth: 1100, mx: 'auto', px: 2, py: 6 }}>
                <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mb: 2, color: "white", fontSize: "2.5rem", fontWeight: 500 }}>About Us</Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{ textAlign: 'center', mb: 4, color: "white" }}>
                    At Chauffeur Grooming, our mission is to make grooming as convenient, comfortable, and safe as possible. We focus on creating a calm, one-on-one experience in a clean and stress-free environment. Your pet&apos;s comfort and safety are always our top priority.
                </Typography>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <TeamCard
                            name="Kiera Dawson"
                            imageSrc="/kiera.jpeg"
                            role="Certified Canine Esthetician & Groomer"
                            bio={`Hi, I’m Kiera! I’ve been working with animals for over four years, starting my grooming journey at PetSmart and before that working as a part time dog walker. I spent my first year at PetSmart as a bather before becoming a professional groomer, and recently I’ve expanded my skills to include cat grooming — something I’m very passionate about.

I’m also a certified Canine Esthetician, specializing in keeping dogs’ skin and coats healthy and comfortable. I love working with dogs of all shapes and personalities, and I find it especially rewarding to help nervous and fearful dogs and cats to learn to trust me and enjoy the grooming process. I’m passionate about introducing puppies to grooming in a gentle, loving way and forming positive relationships with them.

I live in Abbotsford with my two dogs — a 9-year-old Black Labrador and a 2-year-old Cockapoo — who keep me smiling every day. My goal is to make every pet look and feel their best while ensuring grooming is always a calm and enjoyable experience.`}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TeamCard
                            name="Emily Salmon"
                            imageSrc="/emily.jpeg"
                            role="Professional Groomer & Veterinary Assistant Experience"
                            bio={`Hi, I’m Emily, a professional dog groomer with a lifelong passion for animal care and well-being. My grooming journey began at PetSmart, where I spent six months mastering the essentials as a bather before becoming a full-time groomer for over a year.

From there, I transitioned into the veterinary world, where I specialized in stress-free grooming for pets with anxiety, health sensitivities, or special needs. Working within a veterinary clinic allowed me to deepen my understanding of animal behavior and health—skills I continue to bring into every grooming session.

Before and during my grooming career, I also gained extensive experience as a veterinary assistant, giving me a unique perspective on both the medical and emotional sides of pet care. My approach combines gentle handling, professional technique, and a genuine love for every animal I meet—ensuring that each pet feels safe, comfortable, and cared for.

Outside of work, I share my life with Bruno, my four-year-old Akita-Lab mix, who’s been my constant inspiration for understanding and connecting with dogs of all personalities and temperaments.`}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>

    )
}
