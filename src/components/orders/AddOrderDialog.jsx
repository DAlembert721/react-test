import React from 'react';
import {Button, Form, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Select from "../Common/forms/Select";
import TextInput from "../Common/forms/TextInput";
import {useForm} from "../../hooks/useForm";
import {useDispatch} from "react-redux";
import {createOrder} from "../../redux/reducers/orders";

const AddOrderDialog = ({open, setOpen}) => {
    const dispatch = useDispatch();
    const {values, handleInputChange, reset} = useForm({
        customer: "",
    });
    const handleAdd = () => {
        dispatch(createOrder(values));
        setOpen(false);
    }
    return(
        <Modal
            centered
            toggle={() => setOpen(false)}
            isOpen={open}
        >
            <ModalHeader>
                Add Order
            </ModalHeader>
            <ModalBody>
                {open &&
                    <Form>
                        <TextInput
                            label={"Customer"}
                            valid={values.customer !== ""}
                            name="customer"
                            value={values.customer}
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
                    onClick={() => setOpen(false)}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default AddOrderDialog;