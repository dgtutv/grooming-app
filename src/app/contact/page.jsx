"use client"

import { Box, TextField, Button, Typography, Container } from '@mui/material'
import React, { useState } from 'react'

export default function ContactPage() {
    // JSON-LD for contact page
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "url": "https://chauffeurgrooming.com/contact",
        "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Chauffeur Grooming",
            "email": "chauffeurgrooming@gmail.com",
            "telephone": "+1-604-353-6087",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Abbotsford",
                "addressRegion": "BC",
                "addressCountry": "CA"
            }
        }
    };
    const [formData, setFormData] = useState({
        ownerName: '',
        ownerEmail: '',
        ownerPhone: '',
        dogName: '',
        dogBreed: '',
        dogAge: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitMessage('Message sent successfully! We\'ll get back to you soon.');
                // Reset form
                setFormData({
                    ownerName: '',
                    ownerEmail: '',
                    ownerPhone: '',
                    dogName: '',
                    dogBreed: '',
                    dogAge: '',
                    message: ''
                });
            } else {
                setSubmitMessage(data.error || 'Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Submit error:', error);
            setSubmitMessage('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Box className='main' sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                py: 4
            }}>
                <Container maxWidth="sm">
                    <Box sx={{
                        bgcolor: "white",
                        borderRadius: 2,
                        p: 4,
                        boxShadow: 3
                    }}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: 600,
                            textAlign: "center",
                            mb: 3
                        }}>
                            Contact Us
                        </Typography>                        <Typography variant="body1" sx={{ mb: 3, textAlign: "center", color: "#666" }}>
                            Fill out the form below and we&apos;ll get back to you shortly.
                        </Typography>

                        {submitMessage && (
                            <Box sx={{
                                p: 2,
                                mb: 2,
                                borderRadius: 1,
                                bgcolor: submitMessage.includes('success') ? '#d4edda' : '#f8d7da',
                                color: submitMessage.includes('success') ? '#155724' : '#721c24',
                                textAlign: 'center'
                            }}>
                                {submitMessage}
                            </Box>
                        )}

                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                required
                                label="Owner Name"
                                name="ownerName"
                                value={formData.ownerName}
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                required
                                label="Owner Email"
                                name="ownerEmail"
                                type="email"
                                value={formData.ownerEmail}
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                required
                                label="Owner Phone"
                                name="ownerPhone"
                                type="tel"
                                value={formData.ownerPhone}
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                label="Dog Name"
                                name="dogName"
                                value={formData.dogName}
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                required
                                label="Dog Breed"
                                name="dogBreed"
                                value={formData.dogBreed}
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                required
                                label="Dog Age"
                                name="dogAge"
                                type='number'
                                value={formData.dogAge}
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                            />

                            <TextField
                                fullWidth
                                required
                                label="Message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                margin="normal"
                                variant="outlined"
                                multiline
                                rows={4}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                disabled={isSubmitting}
                                sx={{
                                    mt: 3,
                                    py: 1.5,
                                    fontSize: "1rem",
                                    fontWeight: 600,
                                    bgcolor: "#000",
                                    '&:hover': {
                                        bgcolor: "#333"
                                    },
                                    '&:disabled': {
                                        bgcolor: "#999"
                                    }
                                }}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
