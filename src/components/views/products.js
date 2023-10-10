import React from "react";

import Navbar from '../navigation/navbar';
import ScrollToTopButton from '../resources/floatBtn';
import ViewProduct from '../resources/card';

import { Col, Divider, Row , Pagination  } from 'antd';

const Products = () => {
    return (
        <div className="main-products" >
            <Navbar />
            <div>
                <Divider style={{ fontSize: '30px' }}>Productos</Divider>
                <Row justify="center" gutter={[0, 24]}>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                    <Col className="gutter-row" span={6} align="middle">
                        <div ><ViewProduct /></div>
                    </Col>
                </Row>
                <ScrollToTopButton/>
            </div>
        </div>
    )
}

export default Products;