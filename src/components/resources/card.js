import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

const ViewProduct = ({price,title}) => {
   
    return (
        <Card
            style={{
                width: '90%',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Establece la sombra
                padding: '16px',
            }}
            cover={
                <img
                    alt="example"
                    src={"https://i.pinimg.com/originals/11/1e/c8/111ec857774baac27510f047ba6a670f.jpg"}
                />
            }
            actions={[
                <ShoppingCartOutlined />,
            ]}
        >
            <Meta
                title="Precio"
                description="Descripcion"
            />
        </Card>
    )
}

export default ViewProduct;