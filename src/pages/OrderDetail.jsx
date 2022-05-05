import React from 'react';
import {useParams} from "react-router-dom";

const OrderDetail = () => {
    let {orderId} = useParams();
    React.useEffect(() => {
        console.log(orderId);
    }, [])
    return(
        <div>
            Order {orderId}
        </div>
    );
}

export default OrderDetail;