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
import { dashboardMappingService } from "../services";


const InventoryDisplay: React.FC = (): React.ReactElement => {
    const [store] = useContext();
    const productData = store.storeProcess?.productList;
    const [products, setProducts] = useState([]);
    const serviceApis=dashboardMappingService();

    useEffect(() => {
        setProducts(productData);
    }, []);

    const saveProduct = (payload: any) => {
        console.log(payload);
        return serviceApis.addProductdata(payload);
    }

    const orderUpdate = (payload: any) => {
        console.log(payload);
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
                    formTitle="View Product"
                ></FormComponent>
                <FormComponent
                    selectedRow={productRow}
                    selectCountry={"India"}
                    actType="update"
                    listOfFields={ProductFields}
                    formTitle="Update Product"
                    userOnSubmit={orderUpdate}
                ></FormComponent>
                <FormComponent
                    selectedRow={productRow}
                    selectCountry={"India"}
                    actType="delete"
                    listOfFields={ProductFields}
                    formTitle="Delete Product"
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
            accessorKey: 'rating',
            header: 'Rating',
            size: 150
        },
        {
            accessorKey: 'stock',
            header: 'Stock',
            size: 150
        },
        {
            accessorKey: 'discount',
            header: 'Discount',
            size: 150
        },
        {
            accessorKey: 'title',
            header: 'Title',
            size: 150
        },
        {
            accessorKey: 'brand',
            header: 'Brand',
            size: 150
        },
        {
            accessorKey: 'imageUrl',
            header: 'ImageUrl',
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
                    <FormComponent
                        selectedRow={[]}
                        selectCountry={"India"}
                        actType="create"
                        listOfFields={ProductFields}
                        formTitle="Add Product"
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
export default React.memo(InventoryDisplay);