import React, { useState, useEffect, useCallback } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
    Paper
} from "@mui/material";
import { debounce, throttle } from 'lodash';
import ErrorBoundary from "../common/ErrorBoundary";
import OrderFields from "../json/OrderFields.json";
import FormComponent from "../common/FormComponent";

type childProp = {
    onOrderSave: (order: any) => void
}

const SaveOrderPage: React.FC<childProp> = ({ onOrderSave }) => {
    //throw new Error("Crash!");
    const [formData, setFormData] = useState({
        "firstName": "",
        "lastName": "",
        "address": "",
        "city": "",
        "state": ""
    });

    const debounceSearch = useCallback(
        debounce((value: String) => {
            console.log("Searching value ...", value);
        }, 1000)
        , []);

    const throttleSearch = useCallback(
        throttle((value: String) => {
            console.log("Searching  ----", value);
        }, 500)
        , []);


    useEffect(() => {
        if (formData.firstName) {
            debounceSearch(formData.firstName);
            throttleSearch(formData.firstName);
        }
    }, []);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <ErrorBoundary>
            <FormComponent
                selectedRow={[]}
                selectCountry={"India"}
                actType="create"
                listOfFields={OrderFields}
                formTitle="New Order"
            ></FormComponent>
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                    <Typography variant="h5" gutterBottom>
                        User Form
                    </Typography>
                    <Box component="form" onSubmit={() => onOrderSave(formData)} noValidate>
                        <TextField
                            fullWidth
                            margin="normal"
                            label="First name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Last name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="City"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            label="State"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                        />
                        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                            Save Order
                        </Button>
                    </Box>
                </Paper>
            </Container>
            
        </ErrorBoundary>
    )
}

export default React.memo(SaveOrderPage);