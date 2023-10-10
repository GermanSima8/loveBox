import React from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

const ViewProduct = ({title}) => {
    return (
        <Card
            style={{
                width: 220,
            }}
            cover={
                <img
                    alt="example"
                    src={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}
                />
            }
            actions={[
                <ShoppingCartOutlined />,
            ]}
        >
            <Meta
                title={title}
            />
        </Card>
    )
}

export default ViewProduct;