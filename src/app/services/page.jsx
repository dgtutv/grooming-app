'use client'

import React from 'react'
import { Box, Container, Typography, Divider, Card, CardContent, Chip, Alert } from '@mui/material'
import Link from 'next/link'
import ContentCutIcon from '@mui/icons-material/ContentCut';
import PetsIcon from '@mui/icons-material/Pets'

export default function ServicesPage() {
    const basePrices = [
        { size: 'Extra Small', weight: '5-15 lbs', price: '$120-$135' },
        { size: 'Small', weight: '15-25 lbs', price: '$135-$145' },
        { size: 'Medium', weight: '25-50 lbs', price: '$145-$160' },
        { size: 'Large', weight: '50-75 lbs', price: '$160-$190' },
        { size: 'Extra Large', weight: '75-100 lbs', price: '$190-$210' },
        { size: 'XXL', weight: '100+ lbs', price: '$210+' },
    ];

    const packages = [
        {
            name: 'Dental Care Package',
            price: '$30',
            includes: ['Teeth Brushing', 'Breath Spray', 'Toothbrush', 'Dental Chew', 'Teeth Scaling (contact for more info)']
        },
        {
            name: 'All About Me Package',
            price: '$40',
            includes: ['Everything in Dental Care Package', 'Paw and Nose Balm', 'Pet Friendly Nail Polish', 'Anal Gland Cleaning']
        },
        {
            name: 'Chauffeur Creative Colour',
            price: '$55',
            includes: ['Everything in All About Me Package', 'Dog Safe Dye (ears, tail, or paws)']
        }
    ];

    const addOns = [
        { name: 'Luxury Shampoo & Conditioner Upgrade', price: '$16' },
        { name: 'Bow or Bandana', price: '$5' },
        { name: 'Homemade Paw and Nose Butter', price: '$10' },
        { name: 'Pet Friendly Nail Polish Application', price: '$10' },
        { name: 'Anal Glands', price: '$25' },
        { name: 'Pet Friendly Dye\n(paws, tail, or ears)', price: '$25' },
    ];

    const fees = [
        { name: 'Safety and Handling Fee', price: '$30', note: 'Chauffeur Grooming reserves the right to refuse service for unsafe or aggressive dogs. Safety is our top priority for both staff and pets.' },
        { name: 'Coat Condition Fee', price: '$15-$30', note: 'For extra thick, dirty, or matted coats\n*Price may vary' },
    ];

    return (
        <Box className='main' sx={{ minHeight: '100vh', py: 6 }}>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography variant="h3" component="h1" className='baseText'>
                        Our Services
                    </Typography>
                    <Alert severity="info" sx={{ maxWidth: '800px', mx: 'auto', mb: 3 }}>
                        Please contact us for a direct quote. Prices may vary depending on coat type, desired groom, and your dog&apos;s age.
                    </Alert>
                </Box>

                {/* Base Prices Section */}
                <Card sx={{ mb: 4, boxShadow: 3 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <PetsIcon sx={{ fontSize: 35, mr: 2, color: '#8da76f' }} />
                            <Typography variant="h4" component="h2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
                                Base Prices
                            </Typography>
                        </Box>

                        <Typography variant="body1" sx={{ mb: 3, color: '#666', fontStyle: 'italic' }}>
                            All base services include: <b>Haircut, nail trim and grind, ear cleaning, shampoo and conditioner</b> tailored to your pet&apos;s specific needs.
                        </Typography>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
                            {basePrices.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        p: 2.5,
                                        bgcolor: '#f9f9f9',
                                        borderRadius: 2,
                                        border: '2px solid #e0e0e0',
                                        transition: 'all 0.3s',
                                    }}
                                >
                                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                        {item.size}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>
                                        {item.weight}
                                    </Typography>
                                    <Typography variant="h5" sx={{ color: '#8da76f', fontWeight: 700 }}>
                                        {item.price}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>

                {/* Packages Section */}
                <Card sx={{ mb: 4, boxShadow: 3 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <PetsIcon sx={{ fontSize: 35, mr: 1, color: '#8da76f' }} />
                            <PetsIcon sx={{ fontSize: 35, mr: 2, color: '#8da76f' }} />
                            <Typography variant="h4" component="h2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
                                Premium Packages
                            </Typography>
                        </Box>

                        <Typography variant="body1" sx={{ mb: 3, color: '#666', fontStyle: 'italic' }}>
                            All packages include: <b>Bandana or bow, upgraded luxury shampoo and conditioner, cologne spritz, and take-home goody bag.</b>
                        </Typography>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                            {packages.map((pkg, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        p: 3,
                                        bgcolor: index === 2 ? '#e8def8' : '#f9f9f9',
                                        borderRadius: 2,
                                        border: '2px solid',
                                        borderColor: index === 2 ? '#b39ddb' : '#e0e0e0',
                                        position: 'relative'
                                    }}
                                >
                                    {index === 2 && (
                                        <Chip
                                            label="BEST DEAL"
                                            sx={{
                                                position: 'absolute',
                                                top: -12,
                                                right: 10,
                                                bgcolor: '#b39ddb',
                                                color: 'white',
                                                fontWeight: 600,
                                                fontSize: '0.8rem',
                                                height: '28px'
                                            }}
                                            size="medium"
                                        />
                                    )}
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                                        {pkg.name}
                                    </Typography>
                                    <Typography variant="h4" sx={{ color: '#8da76f', fontWeight: 700, mb: 2 }}>
                                        {pkg.price}
                                    </Typography>
                                    <Divider sx={{ mb: 2 }} />
                                    <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                                        Includes:
                                    </Typography>
                                    {pkg.includes.map((item, i) => (
                                        <Typography key={i} variant="body2" sx={{ mb: 0.5, pl: 2 }}>
                                            • {item}
                                        </Typography>
                                    ))}
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>

                {/* Add-Ons Section */}
                <Card sx={{ mb: 4, boxShadow: 3 }}>
                    <CardContent sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <ContentCutIcon sx={{ fontSize: 35, mr: 2, color: '#8da76f' }} />
                            <Typography variant="h4" component="h2" sx={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>
                                Add-Ons
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
                            {addOns.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        p: 2,
                                        bgcolor: '#f9f9f9',
                                        borderRadius: 2,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        border: '1px solid #e0e0e0'
                                    }}
                                >
                                    <Typography variant="body1" sx={{ fontWeight: 500, whiteSpace: 'pre-line' }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#8da76f', fontWeight: 700 }}>
                                        {item.price}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>
                {/* Additional Fees Section */}
                <Card sx={{ mb: 4, boxShadow: 3, bgcolor: '#e8ede5', border: '2px solid #8da76f' }}>
                    <CardContent sx={{ p: 4 }}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: 600, mb: 3 }}>
                            Additional Fees
                        </Typography>

                        {fees.map((fee, index) => (
                            <Box key={index} sx={{ mb: index < fees.length - 1 ? 3 : 0 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        {fee.name}
                                    </Typography>
                                    <Typography variant="h6" sx={{ color: '#8da76f', fontWeight: 700 }}>
                                        {fee.price}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{ color: '#666', fontStyle: 'italic', whiteSpace: 'pre-line' }}>
                                    {fee.note}
                                </Typography>
                                {index < fees.length - 1 && <Divider sx={{ mt: 2 }} />}
                            </Box>
                        ))}
                    </CardContent>
                </Card>

                {/* Footer CTA */}
                <Box sx={{ textAlign: 'center', mt: 5 }}>
                    <Typography variant="body1" sx={{ color: '#f0f0f0' }}>
                        <Link href="/contact" style={{ color: '#fff', textDecoration: 'underline', fontWeight: 500 }}>
                            Contact us
                        </Link> today for a personalized quote and appointment!
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}
