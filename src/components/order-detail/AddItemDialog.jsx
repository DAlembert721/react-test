import React from 'react';
import {Button, Form, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Select from "../Common/forms/Select";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProductByPage} from "../../redux/reducers/products";
import {useForm} from "../../hooks/useForm";
import TextInput from "../Common/forms/TextInput";
import {addOrderItem, resetCurrentOrder} from "../../redux/reducers/orders";
import OrderItem from "../../models/OrderItem";

const AddItemDialog = ({order, open, setOpen}) => {
    const {data: products} = useSelector(state => state.products);
    const dispatch = useDispatch();
    const {values, handleInputChange, reset} = useForm({
        product: "",
        quantity: ""
    });
    const handleAdd = () => {
        dispatch(addOrderItem(new OrderItem(products.find(p => p.id === Number(values.product)), values.quantity), order));
        setOpen(false);
    }
    const handleClose = () => {
        setOpen(false);
    }
    React.useEffect(() => {
        dispatch(fetchAllProductByPage(0));
    }, []);
    return (
        <Modal
            centered
            toggle={() => setOpen(false)}
            isOpen={open}
        >
            <ModalHeader>
                Add item
            </ModalHeader>
            <ModalBody>
                {open &&
                    <Form>
                        <Select
                            label={"Product"}
                            name="product"
                            valid={values.product !== ""}
                            value={values.product}
                            setValue={handleInputChange}
                        >
                            <option value={""}>
                                Select a product
                            </option>
                            {
                                (products.filter(p => !order.items.some(i => p.id === i.id)))
                                    .map(product => (
                                        <option key={product.id} value={product.id}>
                                            {product.name}
                                        </option>
                                    ))
                            }
                        </Select>
                        <TextInput
                            type="number"
                            label={"Quantity"}
                            valid={values.quantity > 0}
                            name="quantity"
                            value={values.quantity}
                            setValue={handleInputChange}
                        />
                    </Form>
                }
            </ModalBody>
            <ModalFooter>
                <Button
                    color="success"
                    onClick={() => handleAdd()}
                >
                    Add
                </Button>
                {' '}
                <Button
                    color="danger"
                    onClick={handleClose}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default AddItemDialog;