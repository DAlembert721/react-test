import React from 'react';
import {Container} from "reactstrap";

const BaseContainer = ({children, title, endComponent=null}) => (
    <Container
        className="w-100 mw-100 px-4 mt-5"
        fluid="lg"
    >
        <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-row justify-content-between w-100 align-content-center">
                <div className="text-start">
                    <h2>
                        {title}
                    </h2>
                </div>
                <div>
                    {endComponent && endComponent}
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    </Container>
);

export default BaseContainer;