import React from 'react';
import {Table} from "reactstrap";
import TableHeader from "../Common/tables/TableHeader";
import {parseNumberToCurrency} from "../../utils/parse";

const ItemsTable = ({items=[]}) => {
    const headers = ["N", "Name", "Quantity", "Unit Price", "Cost", "Actions"];
    return(
        <Table
            className="mt-3"
            bordered
        >
            <TableHeader
                headers={headers}
            />
            <tbody>
            {
                items.map(item => (
                    <tr key={item.id}>
                        <th>
                            {item.id}
                        </th>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.quantity}
                        </td>
                        <td>
                            {parseNumberToCurrency(item.price)}
                        </td>
                        <td>
                            {parseNumberToCurrency(item.cost)}
                        </td>
                        <td className="d-flex flex-row justify-content-around">
                            <p>Edit</p>
                            <p>Delete</p>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
}

export default ItemsTable;