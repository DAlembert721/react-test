import React, {useId} from 'react';
import {Table} from "reactstrap";
import TableHeader from "../Common/tables/TableHeader";
import {fetchAllOrders} from "../../services/OrderServices";
import {Link} from "react-router-dom";
import {parseNumberToCurrency} from "../../utils/parse";
import TablePaginator from "../Common/tables/TablePaginator";

const OrdersTable = (props) => {
    const headers = ["N", "Consumer", "Status", "Date", "Total", "Actions"];
    const [orders, setOrders] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const retrieveOrders = () => {
        fetchAllOrders(page)
            .then(data => {
                setOrders(data)
            });
    }
    React.useEffect(() => {
        retrieveOrders();
    }, [page]);
    return(
        <React.Fragment>
            <Table bordered>
                <TableHeader headers={headers}/>
                <tbody>
                {
                    orders.map(order => (
                        <tr key={order.id}>
                            <th>
                                {order.id}
                            </th>
                            <td>
                                {order.customer}
                            </td>
                            <td>
                                {order.status}
                            </td>
                            <td>
                                {new Date(order.date).toLocaleDateString()}
                            </td>
                            <td>
                                {parseNumberToCurrency(order.totalAmount)}
                            </td>
                            <td>
                                <Link to={`/orders/${order.id}`}>
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))
                }
                </tbody>
            </Table>
            <div className="d-flex justify-content-end">
                <TablePaginator
                    page={page}
                    setPage={setPage}
                    pages={2}
                />
            </div>
        </React.Fragment>
    );
}

export default OrdersTable;