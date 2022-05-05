import React from 'react';
import {parseNumberToCurrency} from "../../utils/parse";

const TotalDetail = ({order}) => (
    <div className="d-flex justify-content-end mt-4">
        <div className="d-flex flex-column w-25">
            <div className="d-flex flex-row justify-content-between">
                <h4>Subtotal</h4>
                <p>{parseNumberToCurrency(order.subtotalAmount)}</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <h4>Taxes</h4>
            </div>
            <div className="ms-4">
                <div className="d-flex flex-row justify-content-between">
                    <h5>Total City Tax</h5>
                    <p>{parseNumberToCurrency(order.cityTax)}</p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <h5>Total County Tax</h5>
                    <p>{parseNumberToCurrency(order.countyTax)}</p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <h5>Total State Tax</h5>
                    <p>{parseNumberToCurrency(order.stateTax)}</p>
                </div>
                <div className="d-flex flex-row justify-content-between">
                    <h5>Total Federal Tax</h5>
                    <p>{parseNumberToCurrency(order.federalTax)}</p>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <h4>Total Taxes</h4>
                <p>{parseNumberToCurrency(order.totalTaxes)}</p>
            </div>
            <div className="d-flex flex-row justify-content-between">
                <h4>Total</h4>
                <p>{parseNumberToCurrency(order.totalAmount)}</p>
            </div>
        </div>
    </div>
);

export default TotalDetail;