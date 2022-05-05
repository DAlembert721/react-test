import React, {useId} from 'react';
import {FormGroup, Input, Label} from "reactstrap";

const Select = ({name, children, value, setValue, label, valid = true}) => {
    const id = useId();
    return(
        <FormGroup>
            <Label for={id}>
                {label}
            </Label>
            <Input
                id={id}
                invalid={!valid}
                name={name}
                type="select"
                onChange={e => setValue(e)}
                value={value}
            >
                {children}
            </Input>
        </FormGroup>
    );
}

export default Select;