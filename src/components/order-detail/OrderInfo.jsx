import React from 'react';

const OrderInfo = ({order}) => (
    <div className="d-flex flex-column gap-2 w-25">
        <div className="d-flex flex-row justify-content-between">
            <h5>Customer</h5>
            <h5>{order.customer}</h5>
        </div>
        <div className="d-flex flex-row justify-content-between">
            <h5>Status</h5>
            <h5>{order.status}</h5>
        </div>
        <div className="d-flex flex-row justify-content-between">
            <h5>Date</h5>
            <h5>{new Date(order.date).toLocaleDateString()}</h5>
        </div>
    </div>
);

export default OrderInfo;