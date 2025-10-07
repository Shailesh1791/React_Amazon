import React, { useEffect, useState } from "react";
import useController from "./useController";
import { MenuItem } from "@mui/material";
import { CustomTextField } from "../CustomInputs/index";

function SelectDropDown(props: any) {
    const {
        fieledName,
        value,
        ddOptions,
        label,
        handleChange,
        isMandatory,
        toDisable,
        toHide
    } = props;
    const { store, apiMethods } = useController();
    const allMaster = store.storeProcess;
    const [dropDownList, setDropDownList] = useState([]);
    const [selectedValue, setSelectedValue] = useState([]);

    const getDDValues = async () => {
        const response = await apiMethods.getOrderDropDown();
        setDropDownList(response);
    };

    useEffect(() => {
        setSelectedValue(value);
        console.log(allMaster);
    }, [value]);

    useEffect(() => {
        if (ddOptions.isApiDriven) {
            getDDValues();
        }
        setSelectedValue(value);
    }, []);

    const updateDropDown = (event: any) => {
        const inputname = event.target;
        setSelectedValue(inputname.value);
        handleChange(event, "Select");
    };

    const generateMenu = (menuVal: any, menuLabel: any) => {
        return <MenuItem value={menuVal}>{menuLabel}</MenuItem>;
    };

    return (
        <>
            <CustomTextField
                error={isMandatory && !selectedValue ? true : false}
                select
                key={fieledName}
                id={fieledName}
                label={label}
                name={fieledName}
                value={selectedValue ? selectedValue : ""}
                onChange={(e: any) => updateDropDown(e)}
                size="small"
                data-testid={fieledName}
                disabled={toDisable}
                style={{ display: toHide ? "none" : "", marginTop: "10px" }}
                fullWidth
            >
                {ddOptions.isApiDriven &&
                    dropDownList.map((dropDownVal: any) => {
                        return generateMenu(dropDownVal[ddOptions.storeOptions.primaryKey],
                            dropDownVal[ddOptions.storeOptions.labelField]
                        );
                    })}
                {ddOptions.isDirect &&
                    ddOptions.directOptions.labels.map((val: any, index: any) => {
                        return generateMenu(ddOptions.directOptions.values[index],
                            val
                        );
                    })}
            </CustomTextField>
        </>
    );
}

export default React.memo(SelectDropDown);