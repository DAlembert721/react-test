import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllOrdersByPage} from "../../redux/reducers/orders";
import {Table} from "reactstrap";
import TableHeader from "../Common/tables/TableHeader";
import {parseNumberToCurrency} from "../../utils/parse";
import {Link} from "react-router-dom";
import TablePaginator from "../Common/tables/TablePaginator";
import {fetchAllProductByPage} from "../../redux/reducers/products";

const ProductsTable = () => {
    const headers = ["N", "Name", "Category", "Price", "Status", "Actions"];
    const {data: products} = useSelector(({products}) => products);
    const [page, setPage] = React.useState(1);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchAllProductByPage(page));
    }, [page]);
    return(
        <React.Fragment>
            <Table bordered>
                <TableHeader headers={headers}/>
                <tbody>
                {
                    products.map(product => (
                        <tr key={product.id}>
                            <th>
                                {product.id}
                            </th>
                            <td>
                                {product.name}
                            </td>
                            <td>
                                {product.category}
                            </td>
                            <td>
                                {parseNumberToCurrency(product.price)}
                            </td>
                            <td>
                                {product.status? 'Active' : 'Inactive'}
                            </td>
                            <td>
                                <Link
                                    to={`/products`}>
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
                    pages={1}
                />
            </div>
        </React.Fragment>
    );
}

export default ProductsTable;