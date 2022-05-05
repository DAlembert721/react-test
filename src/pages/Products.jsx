import React from 'react';
import BaseContainer from "../components/Common/containers/BaseContainer";
import ProductsTable from "../components/products/ProductsTable";

const Products = (props) => (
    <BaseContainer
        title={'Products'}
    >
        <ProductsTable />
    </BaseContainer>
);

export default Products;