import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import BaseContainer from "../components/Common/containers/BaseContainer";
import OrderInfo from "../components/order-detail/OrderInfo";
import ItemsTable from "../components/order-detail/ItemsTable";
import {Button} from "reactstrap";
import TotalDetail from "../components/order-detail/TotalDetail";
import AddItemDialog from "../components/order-detail/AddItemDialog";
import {editOrderStatus, getOrderById, resetCurrentOrder} from "../redux/reducers/orders";
import {states} from "../services/OrderServices";

const OrderDetail = () => {
    const {orderId} = useParams();
    const {current} = useSelector(state => state.orders);
    const [order, setOrder] = React.useState(current);
    const [openAdd, setOpenAdd] = React.useState(false);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    React.useEffect(() => {
        !orderId && navigate("/");
        dispatch(getOrderById(orderId));
    }, []);

    const onClickBack = () => {
        dispatch(resetCurrentOrder());
        navigate("/");
    }
    React.useEffect(() => {
        setOrder(current);
    }, [current])
    return (
        <React.Fragment>
            {
                (orderId && order)
                    ? <BaseContainer
                        title={`Order N°${order?.id}`}
                        endComponent={
                            <Button onClick={onClickBack} className="px-5">
                                Back
                            </Button>
                        }
                    >
                        <OrderInfo order={order}/>
                        <ItemsTable items={order?.items}/>
                        {order.status === states[1] &&
                            <div className="d-flex flex-row justify-content-end">
                                <Button
                                    color="primary"
                                    onClick={() => setOpenAdd(true)}
                                >
                                    Add Item+
                                </Button>
                            </div>}
                        <TotalDetail
                            order={order}
                        />
                        {order.status === states[1] &&
                            <div className="d-flex justify-content-end flex-row gap-4 mt-1">
                                <Button
                                    color="success"
                                    onClick={() => dispatch(editOrderStatus(order.id, 2))}
                                >
                                    Complete Order
                                </Button>
                                <Button
                                    color="danger"
                                    onClick={() => dispatch(editOrderStatus(order.id, 3))}
                                >
                                    Reject Order
                                </Button>
                            </div>}
                        <AddItemDialog
                            order={order}
                            open={openAdd}
                            setOpen={setOpenAdd}
                        />
                    </BaseContainer>
                    : <></>
            }
        </React.Fragment>
    );
}

export default OrderDetail;