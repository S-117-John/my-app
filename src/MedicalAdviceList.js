import React from 'react';
import Head from "./head";
import './index.css';
import {Flex, WhiteSpace} from 'antd-mobile';
import {Input, Button, Table} from 'antd';
import {Link} from 'react-router-dom'
import { Popconfirm, message } from 'antd';

const { Search } = Input;

const dataSource = [
    {
        key: '1',
        name: '阿莫西林',
        spec: 32,
        unit: '盒',
    },
    {
        key: '2',
        name: '阿司匹林',
        spec: 32,
        unit: '盒',
    },
    {
        key: '3',
        name: '术后清创',
        spec: 32,
        unit: '盒',
    },

];
function confirm(e) {
    console.log(e);
    window.location.href = '/drugIndex'
}

function cancel(e) {
    console.log(e);

}
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <Popconfirm
            title={text}
            onConfirm={confirm}
            onCancel={cancel}
            okText="选中药品"
            cancelText="选中非药品"
        >
            <a href="#">{text}</a>
        </Popconfirm>,
    },
    {
        title: '规格',
        dataIndex: 'spec',
        key: 'spec',
    },
    {
        title: '包装单位',
        dataIndex: 'unit',
        key: 'unit',
    },
    {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
    },
    {
        title: '参考价格',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: '库存量',
        dataIndex: 'amount',
        key: 'amount',
    },
    {
        title: '医保类型',
        dataIndex: 'mtype',
        key: 'mtype',
    },
];

class MedicalAdviceList extends React.Component{
    render() {
        return(
            <div className="flex-container">
                <Head/>
                <WhiteSpace />
                <Flex>
                    <div style={{width:300}}>
                        <Search enterButton />
                    </div>
                    <Button style={{marginLeft:20}} type="primary"><Link to="/medicalAdvice">返回</Link></Button>
                </Flex>
                <WhiteSpace />
                <Table dataSource={dataSource} columns={columns} bordered />
            </div>
        );
    }
}



export default MedicalAdviceList;
