import {
    Alert,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    IconButton,
    Tooltip
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import SelectDropDown from "../common/DropDownComponent";
import { CustomTextField } from "../CustomInputs/index"

const FormComponent = (props: any) => {
    const {
        listOfFields,
        selectedRow,
        selectedCountry,
        actType,
        typeOfButton
    } = props;
    const [dialogOpen, setDialogOpen] = useState(false);
    const [formFields, setFormFields] = useState(listOfFields.fieldColumns);
    const [submitValues, setSubmitValues] = useState([] as any);
    const [actionType, setActionType] = useState(actType);
    const [btype] = useState(typeOfButton ? typeOfButton : "icon");
    const [dialogType, setDialogType] = useState("OnClose");
    const [pageIndex, setPageIndex] = useState("");
    const [pageSize, setPageSize] = useState("");
    const selectCountry = selectedCountry;
    const [alertOpen, setAlertOpen] = useState({
        alertStatus: false,
        alertMessage: "",
        alerttype: "error"
    });
    const [successMessage, setSuccessMessage] = useState({
        message: "",
        type: ""
    });

    const handleDialogClose = () => {
        setDialogType("OnClose");
        setDialogOpen(false);
    }

    useEffect(() => {
        setSubmitValues(selectedRow);
        console.log(selectCountry ? selectCountry : "");
    }, []);

    const handleChange = (event: any, inputType: any) => {
        const inputName = event.target;
        const filedName = inputName.name;
        switch (inputType) {
            case "TextField":
                setSubmitValues({ ...submitValues, [filedName]: inputName.value });
                break;
            case "Select":
                setSubmitValues({ ...submitValues, [filedName]: inputName.value });
                break;
        }
    }

    const handleSubmit = async (e: any, methodType: any) => {
        console.log(e);
        if (methodType === "save") {
            const finalReq = submitValues;
            const getResp = await props.userOnSubmit(finalReq);
            if (getResp) {
                if (getResp.status === 200 || getResp.status === 201) {
                    setSuccessMessage({
                        message: "Created Successfully",
                        type: "success",
                    });
                }
            }
            if (getResp && getResp.status)
                handleDialogClose();
        }
    }

    const openDialog = () => {
        switch (actionType) {
            case "create":
                setDialogType("OpenCrud");
                setDialogOpen(true);
                break;
            case "view":
                setDialogType("OpenView");
                setDialogOpen(true);
                break;
            case "delete":
                setDialogType("OpenDelete");
                setDialogOpen(true);
                break;
            case "update":
                setDialogType("OpenUpdate");
                setDialogOpen(true);
                break;
        }
    };
    return (
        <>
            {successMessage.message && (
                <Alert
                    severity="success">
                    {successMessage.message}
                </Alert>
            )}
            {actionType === "create" && btype === "icon" ? (
                <Tooltip title={actionType} arrow placement="top-start">
                    <IconButton
                        style={{ padding: "0px" }}
                        onClick={openDialog}
                        data-testid="create-button"
                    >
                        <AddCircleIcon sx={{ fontSize: 25 }} style={{ color: "#0473ea" }} />
                    </IconButton>
                </Tooltip>
            ) : (
                ""
            )}
            {actionType === "create" && btype === "button" ? (
                <Button
                    variant="contained"
                    endIcon={<AddCircleIcon />}
                    onClick={openDialog}
                >Add</Button>
            ) : ("")}
            {actionType === "view" && btype === "icon" ? (
                <Tooltip title={actionType} arrow placement="top-start">
                    <IconButton
                        style={{ padding: "2px" }}
                        onClick={openDialog}
                        data-testid="view-button"
                    >
                        <VisibilityIcon sx={{ fontSize: 25 }} style={{ color: "#0473ea" }} />
                    </IconButton>
                </Tooltip>
            ) : (
                ""
            )}
            {actionType === "update" && btype === "icon" ? (
                <Tooltip title={actionType} arrow placement="top-start">
                    <IconButton
                        style={{ padding: "2px" }}
                        onClick={openDialog}
                        data-testid="update-button"
                    >
                        <UpdateIcon sx={{ fontSize: 25 }} style={{ color: "#0473ea" }} />
                    </IconButton>
                </Tooltip>
            ) : (
                ""
            )}
            {actionType === "delete" && btype === "icon" ? (
                <Tooltip title={actionType} arrow placement="top-start">
                    <IconButton
                        style={{ padding: "2px" }}
                        onClick={openDialog}
                        data-testid="delete-button"
                    >
                        <DeleteIcon sx={{ fontSize: 25 }} style={{ color: "#0473ea" }} />
                    </IconButton>
                </Tooltip>
            ) : (
                ""
            )}
            {dialogType === "OpenCrud" ? (
                <Dialog
                    fullWidth={true}
                    maxWidth={"sm"}
                    open={dialogOpen}
                    onClose={handleDialogClose}
                    aria-labelledby="form-dialog-title"
                    disableEscapeKeyDown
                >
                    <DialogTitle id="form-dialog-title">
                        {props.formTitle ? props.formTitle : "Create Form"}
                    </DialogTitle>
                    <DialogContent>
                        {formFields.map((element: any, i: any) => {
                            let hideStatus = actionType == "update"
                                ? element.updateHide
                                : element.createHide;
                            if (element.inputType === "TextField") {
                                return (
                                    <Grid>
                                        <CustomTextField
                                            error={element.isRequired ? true : false}
                                            helperText={""}
                                            data-testid={element.name}
                                            key={element.name}
                                            id={element.name}
                                            name={element.name}
                                            label={element.label}
                                            value={
                                                submitValues[element.name]
                                                    ? submitValues[element.name]
                                                    : ""}
                                            onChange={(e) => handleChange(e, element.inputType)}
                                            type={element.valType}
                                            disabled={false}
                                            fullWidth
                                            style={{ display: hideStatus ? "none" : "", marginTop: "10px" }}
                                        >
                                        </CustomTextField>
                                    </Grid>
                                )
                            } else if (element.inputType === "Select") {
                                return (
                                    <Grid>
                                        <SelectDropDown
                                            label={element.label}
                                            fieledName={element.name}
                                            value={
                                                submitValues[element.name]
                                                    ? submitValues[element.name]
                                                    : ""}
                                            ddOptions={element.inputOptions}
                                            isMandatory={element.isRequired}
                                            toDisable={props.formType === "update" ?
                                                element.onEditDisable : false
                                            }
                                            toHide={hideStatus}
                                            handleChange={handleChange}
                                        >
                                        </SelectDropDown>
                                    </Grid>
                                )
                            }
                        })}
                    </DialogContent>
                    <DialogActions sx={{ display: "center" }}>
                        {alertOpen.alertStatus ? alertOpen.alertMessage : null}
                        <Button
                            onClick={handleDialogClose}
                            variant="outlined"
                            startIcon={<CancelIcon />}
                            color="error"
                            data-testid="dialog-action-close"
                        >Close</Button>
                        <Button
                            onClick={(e) => handleSubmit(e, "save")}
                            variant="outlined"
                            startIcon={<SaveIcon />}
                            color="secondary"
                            data-testid="dialog-action-save"
                        >Save</Button>
                    </DialogActions>
                </Dialog>
            ) : ("")}
            {dialogType === "OpenView" ? (
                <Dialog
                    fullWidth={true}
                    maxWidth={"sm"}
                    open={dialogOpen}
                    onClose={handleDialogClose}
                    aria-labelledby="form-dialog-title"
                    disableEscapeKeyDown
                >
                    <DialogTitle id="form-dialog-title">
                        {props.formTitle ? props.formTitle : "View Form"}
                    </DialogTitle>
                    <DialogContent>
                        {formFields.map((element: any, i: any) => {
                            let hideStatus = actionType == "update"
                                ? element.updateHide
                                : element.createHide;
                            if (element.inputType === "TextField") {
                                return (
                                    <Grid>
                                        <CustomTextField
                                            error={element.isRequired ? true : false}
                                            helperText={""}
                                            data-testid={element.name}
                                            key={element.name}
                                            id={element.name}
                                            name={element.name}
                                            label={element.label}
                                            value={
                                                submitValues[element.name]
                                                    ? submitValues[element.name]
                                                    : ""}
                                            onChange={(e) => handleChange(e, element.inputType)}
                                            type={element.valType}
                                            disabled={true}
                                            fullWidth
                                            style={{ display: hideStatus ? "none" : "", marginTop: "10px" }}
                                        >
                                        </CustomTextField>
                                    </Grid>
                                )
                            } else if (element.inputType === "Select") {
                                return (
                                    <Grid>
                                        <SelectDropDown
                                            label={element.label}
                                            fieledName={element.name}
                                            value={
                                                submitValues[element.name]
                                                    ? submitValues[element.name]
                                                    : ""}
                                            ddOptions={element.inputOptions}
                                            isMandatory={element.isRequired}
                                            toDisable={props.formType === "update" ?
                                                element.onEditDisable : false
                                            }
                                            toHide={hideStatus}
                                            handleChange={handleChange}
                                        >
                                        </SelectDropDown>
                                    </Grid>
                                )
                            }
                        })}
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleDialogClose}
                            variant="outlined"
                            startIcon={<CancelIcon />}
                            color="error"
                            data-testid="dialog-action-close"
                        >Close</Button>
                    </DialogActions>
                </Dialog>
            ) : ("")}
            {dialogType === "OpenUpdate" ? (
                <Dialog
                    fullWidth={true}
                    maxWidth={"sm"}
                    open={dialogOpen}
                    onClose={handleDialogClose}
                    aria-labelledby="form-dialog-title"
                    disableEscapeKeyDown
                >
                    <DialogTitle id="form-dialog-title">
                        {props.formTitle ? props.formTitle : "Update Form"}
                    </DialogTitle>
                    <DialogContent>
                        {formFields.map((element: any, i: any) => {
                            let hideStatus = actionType == "update"
                                ? element.updateHide
                                : element.createHide;
                            if (element.inputType === "TextField") {
                                return (
                                    <Grid>
                                        <CustomTextField
                                            error={element.isRequired ? true : false}
                                            helperText={""}
                                            data-testid={element.name}
                                            key={element.name}
                                            id={element.name}
                                            name={element.name}
                                            label={element.label}
                                            value={
                                                submitValues[element.name]
                                                    ? submitValues[element.name]
                                                    : ""}
                                            onChange={(e) => handleChange(e, element.inputType)}
                                            type={element.valType}
                                            disabled={false}
                                            fullWidth
                                            style={{ display: hideStatus ? "none" : "", marginTop: "10px" }}
                                        >
                                        </CustomTextField>
                                    </Grid>
                                )
                            } else if (element.inputType === "Select") {
                                return (
                                    <Grid>
                                        <SelectDropDown
                                            label={element.label}
                                            fieledName={element.name}
                                            value={
                                                submitValues[element.name]
                                                    ? submitValues[element.name]
                                                    : ""}
                                            ddOptions={element.inputOptions}
                                            isMandatory={element.isRequired}
                                            toDisable={props.formType === "update" ?
                                                element.onEditDisable : false
                                            }
                                            toHide={hideStatus}
                                            handleChange={handleChange}
                                        >
                                        </SelectDropDown>
                                    </Grid>
                                )
                            }
                        })}
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleDialogClose}
                            variant="outlined"
                            startIcon={<CancelIcon />}
                            color="error"
                            data-testid="dialog-action-close"
                        >Close</Button>
                        <Button
                            onClick={(e) => handleSubmit(e, "delete")}
                            variant="outlined"
                            startIcon={<UpdateIcon />}
                            color="secondary"
                            data-testid="dialog-action-update"
                        >Update</Button>
                    </DialogActions>
                </Dialog>
            ) : ("")}
            {dialogType === "OpenDelete" ? (
                <Dialog
                    fullWidth={true}
                    maxWidth={"sm"}
                    open={dialogOpen}
                    onClose={handleDialogClose}
                    aria-labelledby="form-dialog-title"
                    disableEscapeKeyDown
                >
                    <DialogTitle id="form-dialog-title">
                        {props.formTitle ? props.formTitle : "Delete Form"}
                    </DialogTitle>
                    <DialogContent>
                        {formFields.map((element: any, i: any) => {
                            let hideStatus = actionType == "update"
                                ? element.updateHide
                                : element.createHide;
                            if (element.inputType === "TextField") {
                                return (
                                    <Grid>
                                        <CustomTextField
                                            error={element.isRequired ? true : false}
                                            helperText={""}
                                            data-testid={element.name}
                                            key={element.name}
                                            id={element.name}
                                            name={element.name}
                                            label={element.label}
                                            value={
                                                submitValues[element.name]
                                                    ? submitValues[element.name]
                                                    : ""}
                                            onChange={(e) => handleChange(e, element.inputType)}
                                            type={element.valType}
                                            disabled={false}
                                            fullWidth
                                            style={{ display: hideStatus ? "none" : "", marginTop: "10px" }}
                                        >
                                        </CustomTextField>
                                    </Grid>
                                )
                            } else if (element.inputType === "Select") {
                                return (
                                    <Grid>
                                        <SelectDropDown
                                            label={element.label}
                                            fieledName={element.name}
                                            value={
                                                submitValues[element.name]
                                                    ? submitValues[element.name]
                                                    : ""}
                                            ddOptions={element.inputOptions}
                                            isMandatory={element.isRequired}
                                            toDisable={props.formType === "update" ?
                                                element.onEditDisable : false
                                            }
                                            toHide={hideStatus}
                                            handleChange={handleChange}
                                        >
                                        </SelectDropDown>
                                    </Grid>
                                )
                            }
                        })}
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleDialogClose}
                            variant="outlined"
                            startIcon={<CancelIcon />}
                            color="error"
                            data-testid="dialog-action-close"
                        >Close</Button>
                        <Button
                            onClick={(e) => handleSubmit(e, "delete")}
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            color="secondary"
                            data-testid="dialog-action-delete"
                        >Delete</Button>
                    </DialogActions>
                </Dialog>
            ) : ("")}
        </>
    );

}

export default React.memo(FormComponent);

