import React, { useEffect, useState } from "react";
import ErrorBoundary from "../common/ErrorBoundary";
import { useMemo } from 'react';
import {
  MaterialReactTable
} from 'material-react-table';
import { Button, Grid } from "@mui/material";
import SaveOrderPage from "./SaveOrderPage";
import { useContext } from "../hooks/provider";
import OrderFields from "../json/OrderNewFields.json";
import FormComponent from "../common/FormComponent";

const OrderDashboard: React.FC = (): React.ReactElement => {
  const [store] = useContext();
  const orderDatas = store.storeProcess?.orderList;
  const [orderData, setOrderData] = useState<any>(orderDatas);
  const [orderFlag, setOrderFlag] = useState(true);
  const [showUIType, setShowUIType] = useState(false);

  useEffect(() => {
    setOrderData(orderDatas);
  }, []);

  const saveOrder = (ordData: any) => {
    setOrderData([...orderData, ordData]);
    console.log(orderData);
  };

  const orderSave = async (payload: any) => {
    console.log(payload);
    return { status: 200, message: "Order created successfully" };
  }

  const orderUpdate = async (payload: any) => {
    console.log(payload);
  }

  const orderDelete = async (payload: any) => {
    console.log(payload);
  }

  const getActionAccess = (rowData: any) => {
    return (
      <>
        <FormComponent
          selectedRow={rowData}
          selectCountry={"India"}
          actType="view"
          listOfFields={OrderFields}
          formTitle="View Order"
        ></FormComponent>
        <FormComponent
          selectedRow={rowData}
          selectCountry={"India"}
          actType="update"
          listOfFields={OrderFields}
          formTitle="Update Order"
          userOnSubmit={orderUpdate}
        ></FormComponent>
        <FormComponent
          selectedRow={rowData}
          selectCountry={"India"}
          actType="delete"
          listOfFields={OrderFields}
          formTitle="Delete Order"
          userOnSubmit={orderDelete}
        ></FormComponent>
      </>
    )

  }

  const columns = useMemo(
    () => [
      {
        accessorKey: 'orderId',
        header: 'Order ID',
        size: 150,
      },
      {
        accessorKey: 'orderName',
        header: 'Order Name',
        size: 150,
      },
      {
        accessorKey: 'description',
        header: 'Description',
        size: 200,
      },
      {
        accessorKey: 'price',
        header: 'Order Price',
        size: 150,
      },
      {
        accessorKey: 'actions',
        header: 'Action',
        size: 150,
        Cell: (data: any) => getActionAccess(data.row.original),
      }
    ],
    [],
  );

  return (
    <ErrorBoundary>
      <Button onClick={() => setOrderFlag(true)}>Show Order</Button>
      <Button onClick={() => setOrderFlag(false)}>Add Order</Button>
      <Button onClick={() => setShowUIType(!showUIType)}>Show UI Type</Button>
      <div>
        <FormComponent
          selectedRow={[]}
          selectCountry={"India"}
          actType="create"
          listOfFields={OrderFields}
          formTitle="Create Order"
          typeOfButton="button"
          userOnSubmit={orderSave}
        ></FormComponent>
      </div>
      {orderFlag &&
        <MaterialReactTable
          columns={columns}
          data={orderData}
          pageCount={orderData.length}
          columnFilterDisplayMode="subheader"
        />
      }
      {!orderFlag &&
        <SaveOrderPage onOrderSave={saveOrder} />
      }
      {showUIType &&
        <Grid container spacing={2}>
          <Grid size={{xs:2}}>
            Left Grid
          </Grid>
          <Grid size={{xs:2}}>
            Middle Grid
          </Grid>
           <Grid size={{xs:2}}>
            Right Grid
          </Grid>
        </Grid>
      }
    </ErrorBoundary>
  );
};

export default React.memo(OrderDashboard);

