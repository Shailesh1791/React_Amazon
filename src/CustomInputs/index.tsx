import { styled, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export const CustomTextField = styled(TextField)`
    .MuiTextField {
        margin-top: 25px;
        padding: 25px;
    }
    & .MuiTextField-root {
        margin-top: 0px;
        padding: 25px;
    }
    & .MuiInputLabel-root {
        font-size: 0.7rem;
        line-height: 1.2rem;
        border-radius:2px;
    }
    & .MuiOutlinedInput-input {
        font-size: 0.7rem;
        line-height: 1.3rem;
        padding: 15px 14px;
    }
`;

export const CustomDatePicker = styled(DatePicker)`
    .MuiTextField-root {
        margin-top: 0px;
        padding: 25px;
    }
    & .MuiInputLabel-root {
        font-size: 0.7rem;
        line-height: 1.2rem;
        border-radius:2px;
    }
    & .MuiOutlinedInput-input {
        font-size: 0.7rem;
        line-height: 1.3rem;
        padding: 15px 14px;
    }
`;
