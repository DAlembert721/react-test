import React from 'react';
import BaseContainer from "../components/Common/containers/BaseContainer";
import OrdersTable from "../components/orders/OrdersTable";
import {Button} from "reactstrap";

const Orders = () => {
    return(
        <BaseContainer
            title={"Orders"}
        >
            <div className="d-flex flex-row justify-content-end mb-3">
                <Button
                    color="primary"
                >
                    Create Order
                </Button>
            </div>
            <OrdersTable />
        </BaseContainer>
    );
}

export default Orders;