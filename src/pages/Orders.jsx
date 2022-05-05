import React from 'react';
import BaseContainer from "../components/Common/containers/BaseContainer";
import OrdersTable from "../components/orders/OrdersTable";
import {Button} from "reactstrap";
import AddOrderDialog from "../components/orders/AddOrderDialog";

const Orders = () => {
    const [openAdd, setOpenAdd] = React.useState(false);
    return(
        <BaseContainer
            title={"Orders"}
        >
            <div className="d-flex flex-row justify-content-end mb-3">
                <Button
                    onClick={() => setOpenAdd(true)}
                    color="primary"
                >
                    Create Order
                </Button>
            </div>
            <OrdersTable />
            <AddOrderDialog
                open={openAdd}
                setOpen={setOpenAdd}
            />
        </BaseContainer>
    );
}

export default Orders;