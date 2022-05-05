import React, {createContext, useId} from 'react';
import {Table} from "reactstrap";
import TableHeader from "../Common/tables/TableHeader";
import {fetchAllOrders} from "../../services/OrderServices";
import {Link} from "react-router-dom";
import {parseNumberToCurrency} from "../../utils/parse";
import TablePaginator from "../Common/tables/TablePaginator";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllOrdersByPage, setCurrentOrder} from "../../redux/slices/ordersSlice";

export const OrdersContext = createContext([]);

const OrdersTable = () => {
    const headers = ["N", "Consumer", "Status", "Date", "Total", "Actions"];
    const {data: orders} = useSelector(({orders}) => orders);
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchAllOrdersByPage(page));
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
                                <Link
                                    to={`/orders/${order.id}`}
                                    onClick={() => dispatch(setCurrentOrder(order))}>
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