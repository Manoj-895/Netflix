import React, { useEffect, useState } from 'react';
import {
    Box,
    Button,
    Container,
    CssBaseline,
    FormControl,
    Grid,
    Typography,
} from '@mui/material';
import TextField from '@mui/material/TextField';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

const NetflixLoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        // Validate email format
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
        setError(!isValidEmail);
    };

    const handleSubmit = (event:React.ChangeEvent<HTMLInputElement>) => {
       event.preventDefault();
       if(email === '' || null){ setError(true); return}
       localStorage.setItem('email', email);
       navigate(`/${MAIN_PATH.browse}`)
    };
    useEffect(()=>{
        const mail = localStorage.getItem('email')
        if(mail !== null && mail.length > 0){
            setEmail(mail)
        }
    },[]);
    return (
        <Container
            component="main"
            maxWidth="xs"
            sx={{
                backgroundImage: 'linear-gradient(55deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.8) 100%), url("src/utils/netflixbg.jpg")',
                backgroundSize: 'cover',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '100px',
                minHeight: '100vh', // Ensure the background covers the entire viewport
                width: "100%",
                minWidth: "100% !important"
            }}
        >
            <CssBaseline />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '200px',
                }}
            >
                <Typography component="h1" variant="h3" fontWeight={800} margin={1}>
                    Laughter. Tears. Thrills. Find it all on Netflix.
                </Typography>
                <Typography component="h1" variant="h5" margin={1}>
                    Endless entertainment starts at just ₹ 149. Cancel anytime.
                </Typography>
                <Typography component="h1" variant="h5" margin={1}>
                    Ready to watch? Enter your email to create or restart your membership.
                </Typography>
                <form
                    onSubmit={(event)=>handleSubmit(event)}
                    style={{
                        width: '70%', // Fix IE 11 issue.
                        marginTop: '1.5rem',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={8}>
                            <FormControl fullWidth variant="outlined" margin="normal">
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    value={email}
                                    onChange={handleEmailChange}
                                    error={error}
                                    helperText={error ? 'Invalid email format' : ''}
                                    autoComplete="off" 
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    width: "150px",
                                    height: "55px",
                                    bgcolor: "red",
                                    paddingRight: "12px",
                                    '&:hover': {
                                        bgcolor: "rgb(229, 9, 20)"
                                    }
                                }}
                            >
                                Get Started <NavigateNextIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default NetflixLoginPage;
