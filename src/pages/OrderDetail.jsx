import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import BaseContainer from "../components/Common/containers/BaseContainer";
import OrderInfo from "../components/order-detail/OrderInfo";
import ItemsTable from "../components/order-detail/ItemsTable";
import {Button} from "reactstrap";
import TotalDetail from "../components/order-detail/TotalDetail";

const OrderDetail = () => {
    const {current} = useSelector(state => state.orders);
    let navigate = useNavigate();
    React.useEffect(() => {
        !current && navigate("/");
    }, []);

    const onClickBack = () => {
        navigate("/");
    }
    return (
        <React.Fragment>
            {
                current
                    ? <BaseContainer
                        title={`Order N°${current?.id}`}
                        endComponent={
                            <Button onClick={onClickBack} className="px-5">
                                Back
                            </Button>
                        }
                    >
                        <OrderInfo order={current}/>
                        <ItemsTable items={current?.items}/>
                        <div className="d-flex flex-row justify-content-end">
                            <Button
                                color="primary"
                            >
                                Add Item+
                            </Button>
                        </div>
                        <TotalDetail
                            order={current}
                        />
                        <div className="d-flex justify-content-end flex-row gap-4 mt-1">
                            <Button
                                color="success"
                            >
                                Complete Order
                            </Button>
                            <Button
                                color="danger"
                            >
                                Reject Order
                            </Button>
                        </div>

                    </BaseContainer>
                    : <></>
            }
        </React.Fragment>
    );
}

export default OrderDetail;