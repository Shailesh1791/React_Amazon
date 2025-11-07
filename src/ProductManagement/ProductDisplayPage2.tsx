import React, { useContext } from "react";
import ErrorBoundary from "../common/ErrorBoundary";
import { useMemo } from 'react';
import {
    MaterialReactTable
} from 'material-react-table';
import { ProductContext } from "./ProductContext";



const ProductDisplay2: React.FC = (): React.ReactElement => {
    const prodContex = useContext(ProductContext);
    if (!prodContex) {
        throw new Error('Product must be used within a UserProvider');
    }
    const { products } = prodContex;

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
        }
    ], []);

    return (
        <ErrorBoundary>
            <MaterialReactTable
                columns={productColumns}
                data={products}
                pageCount={products.length}
                columnFilterDisplayMode="subheader"
            />
        </ErrorBoundary>
    );

}
export default React.memo(ProductDisplay2);