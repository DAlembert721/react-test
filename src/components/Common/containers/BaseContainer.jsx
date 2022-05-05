import React from 'react';
import {Container} from "reactstrap";

const BaseContainer = ({children, title}) => (
    <Container
        className="bg-light w-100 mw-100 px-4 mt-5"
        fluid="lg"
    >
        <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-row justify-content-start w-100">
                <div className="text-start">
                    <h2>
                        {title}
                    </h2>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    </Container>
);

export default BaseContainer;