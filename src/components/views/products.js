import React from "react";
import Navbar from '../navigation/navbar';
import ViewProduct from '../resources/card';
import '../views/products.css';
import { Col, Divider, Row } from 'antd';



const Products = () => {
    return (
        <div>
            <Navbar />
            <Divider>Productos</Divider>

            <Row justify="space-around" style={{ margin: '25px 0' }}>
                <Col span={4}><ViewProduct
                                price="5 mx"
                                title="Corazon"
                                ImgSrc="hola"
                                /></Col>
                <Col span={4}><ViewProduct
                                title="Perro"/></Col>
                <Col span={4}><ViewProduct/></Col>
                <Col span={4}><ViewProduct/></Col>
            </Row>
            <Row justify="space-around" style={{ margin: '25px 0' }}>
                <Col span={4}><ViewProduct/></Col>
                <Col span={4}><ViewProduct/></Col>
                <Col span={4}><ViewProduct/></Col>
                <Col span={4}><ViewProduct/></Col>
            </Row>
            <Row justify="space-around" style={{ margin: '25px 0' }}>
                <Col span={4}><ViewProduct/></Col>
                <Col span={4}><ViewProduct/></Col>
                <Col span={4}><ViewProduct/></Col>
                <Col span={4}><ViewProduct/></Col>
            </Row>
        </div>
    )
}

export default Products;