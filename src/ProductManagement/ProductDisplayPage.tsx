import React, { useEffect, useState } from "react";
import ErrorBoundary from "../common/ErrorBoundary";
import { useMemo } from 'react';
import {
    MaterialReactTable,
} from 'material-react-table';
import { Box, Typography } from "@mui/material";
import { useContext } from "../hooks/provider";
import ProductFields from "../json/ProductFields.json"
import FormComponent from "../common/FormComponent";


const ProductDisplay: React.FC = (): React.ReactElement => {
    const [store] = useContext();
    const productData = store.storeProcess?.productList;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(productData);
    }, []);

    const saveProduct = () => {

    }

    const orderUpdate = () => {

    }

    const orderDelete = () => {

    }

    const getActions = (productRow: any) => {
        return (
            <>
                <FormComponent
                    selectedRow={productRow}
                    selectCountry={"India"}
                    actType="view"
                    listOfFields={ProductFields}
                    formTitle="View Order"
                ></FormComponent>
                <FormComponent
                    selectedRow={productRow}
                    selectCountry={"India"}
                    actType="update"
                    listOfFields={ProductFields}
                    formTitle="Update Order"
                    userOnSubmit={orderUpdate}
                ></FormComponent>
                <FormComponent
                    selectedRow={productRow}
                    selectCountry={"India"}
                    actType="delete"
                    listOfFields={ProductFields}
                    formTitle="Delete Order"
                    userOnSubmit={orderDelete}
                ></FormComponent>
            </>
        );
    }

    const productColumns = useMemo(() => [
        {
            accessorKey: 'productId',
            header: 'Product Id',
            size: 150
        },
        {
            accessorKey: 'name',
            header: 'Product Name',
            size: 150
        },
        {
            accessorKey: 'category',
            header: 'Category',
            size: 150
        },
        {
            accessorKey: 'price',
            header: 'Price',
            size: 150
        },
        {
            accessorKey: 'description',
            header: 'Description',
            size: 150
        },
        {
            accessorKey: 'actions',
            header: 'Actions',
            size: 150,
            Cell: (data: any) => getActions(data.row.original)
        }
    ], []);

    return (
        <ErrorBoundary>
            <Box p={2}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6">Product List</Typography>
                    <FormComponent
                        selectedRow={[]}
                        selectCountry={"India"}
                        actType="create"
                        listOfFields={ProductFields}
                        formTitle="Create Product"
                        typeOfButton="button"
                        userOnSubmit={saveProduct}
                    ></FormComponent>
                </Box>
                <MaterialReactTable
                    columns={productColumns}
                    data={products}
                    pageCount={products.length}
                    columnFilterDisplayMode="subheader"
                />
            </Box>
        </ErrorBoundary>
    );

}
export default React.memo(ProductDisplay);