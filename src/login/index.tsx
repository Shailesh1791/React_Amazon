import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import amazonPic from "../assets/amazonG.png";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../services/LoginService";

const LoginPage = () => {
    const [email, setEmail] = useState("admin");
    const [password, setPassword] = useState("admin123");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Email -', email);
        console.log('Password -', password);
    }, [email, password]);

    const handleSubmit = async(e: any) => {
        e.preventDefault();
        setError("Hello");
        const payload = {
            username: email,
            password: password
        };
        const response = await userLogin(payload);   
        localStorage.setItem("token", response);
        navigate("/amazon-app/home");
    }

    return (
        <Container component="main" maxWidth="lg">
            <Box
                sx={{ marginTop: 8, }}
            >
                <Grid container>
                    <CssBaseline />
                    <Grid
                        size={{
                            xs: false,
                            sm: 4,
                            md: 7
                        }}
                        sx={{
                            backgroundImage: `url(${amazonPic})`,
                            backgroundRepeat: "no-repeat",
                            backgroundColor: (t) =>
                                t.palette.mode === "light"
                                    ? t.palette.grey[50]
                                    : t.palette.grey[900],
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <Grid
                        size={{
                            xs: 12,
                            sm: 10,
                            md: 5
                        }}
                        component={Paper}
                        elevation={6}
                        square
                    >
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 1 }}
                            >
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    data-testid="email-input"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    data-testid="password-input"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid size={{ xs: 6 }}>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid size={{ xs: 6 }}>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default LoginPage;