import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from 'antd-mobile';
import * as serviceWorker from './serviceWorker';
import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css';
import { Flex, WhiteSpace } from 'antd-mobile';
import { SegmentedControl, WingBlank } from 'antd-mobile';
import { List, Checkbox } from 'antd-mobile';
import Head from "./head";
import { Table, Tag, Space, Radio } from 'antd';
import {
    VerticalAlignTopOutlined,
    VerticalAlignMiddleOutlined,
    VerticalAlignBottomOutlined

} from '@ant-design/icons';
import App from "./App";
import {Link} from 'react-router-dom'


const Item = List.Item;
const CheckboxItem = Checkbox.CheckboxItem;


const columns = [
    {
        title: '组',
        dataIndex: 'group',
        key: 'group',
        render: text => {
            if(text == 1){
                return(
                    <VerticalAlignTopOutlined />
                );
            }else if(text == 2){
                return(
                    <VerticalAlignMiddleOutlined />
                );
            }else{
                return (
                    <VerticalAlignBottomOutlined />
                );
            }
        },
        width: 50,
        fixed: 'left',
    },

    {
        title: '分类',
        dataIndex: 'classification',
        key: 'classification',
        width: 60,
        fixed: 'left',
    },
    {
        title: '医嘱',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
        width: 150,
        fixed: 'left',
    },
    {
        title: '长',
        key: 'tags',
        dataIndex: 'tags',
        render: text => {
            let color = text == "长"  ? 'geekblue' : 'green';
            // if (tag === 'loser') {
            //     color = 'volcano';
            // }
            return (
                <Tag color={color} key={text}>
                    {text}
                </Tag>
            );
        },
    },
    {
        title: '开始时间',
        key: 'startTime',
        dataIndex: 'startTime',
    },

    {
        title: '用量',
        dataIndex: 'dosage',
        key: 'dosage',
        render: text => <a>{text}</a>,
    },
    {
        title: '用法',
        dataIndex: 'usage',
        key: 'usage',
        render: text => <a>{text}</a>,
    },
    {
        title: '频次',
        dataIndex: 'frequency',
        key: 'frequency',
        render: text => <a>{text}</a>,
    },
    {
        title: '首',
        dataIndex: 'first',
        key: 'first',
        render: text => <a>{text}</a>,
    },
    {
        title: '停止时间',
        dataIndex: 'endTime',
        key: 'endTime',
        render: text => <a>{text}</a>,
    },
    {
        title: '末',
        dataIndex: 'last',
        key: 'last',
        render: text => <a>{text}</a>,
    },
    {
        title: '开立人',
        dataIndex: 'creator',
        key: 'creator',
        render: text => <a>{text}</a>,
    },
    {
        title: '签署',
        dataIndex: 'sign',
        key: 'sign',
        render: text => <a>{text}</a>,
    },
    {
        title: '停嘱',
        dataIndex: 'stop',
        key: 'stop',
        render: text => <a>{text}</a>,
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text) => (
            <Space size="middle">
                <a>详情</a>
            </Space>
        ),
        width: 100,
        fixed: 'right',
    },
];

const data = [
    {
        key: '1',
        name: '5%葡萄糖注射液/250ml/袋',
        group: 1,
        classification: '西药',
        tags: "长",
        startTime: '05-30 12:00',
        dosage: '250ml',
        usage: '输液(免费)',
        frequency: 'qd',
        first: '1',
        endTime: '05-30 12:00',
        last: '1',
        creator: '陆丞燕',
        sign: '陆丞燕',
        stop: '陆丞燕',

    },
    {
        key: '2',
        name: '5%葡萄糖注射液/250ml/袋',
        group: 2,
        classification: '西药',
        tags: "长",
        startTime: '05-30 12:00',
        dosage: '250ml',
        usage: '输液(免费)',
        frequency: 'qd',
        first: '1',
        endTime: '05-30 12:00',
        last: '1',
        creator: '陆丞燕',
        sign: '陆丞燕',
        stop: '陆丞燕',

    },
    {
        key: '3',
        name: '5%葡萄糖注射液/250ml/袋',
        group: 3,
        classification: '西药',
        tags: "长",
        startTime: '05-30 12:00',
        dosage: '250ml',
        usage: '输液(免费)',
        frequency: 'qd',
        first: '1',
        endTime: '05-30 12:00',
        last: '1',
        creator: '陆丞燕',
        sign: '陆丞燕',
        stop: '陆丞燕',

    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

const Content = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    return(
        <div className="flex-container">
            <Head/>
            <WhiteSpace />
            <div>
                <Flex  wrap="wrap">
                    <div>
                        <SegmentedControl
                            values={['全部', '临时', '长期']}
                            style={{ width: '250px' }}
                        />
                    </div>
                    <div style={{marginLeft:20}}>
                        <SegmentedControl
                            values={['全部', '当前']}
                            style={{ width: '250px'}}
                        />
                    </div>
                    <div style={{ marginLeft:50 }}>
                        <Link to="/medicalAdvice"><Button type="primary" inline style={{ marginRight: '4px' }}>新医嘱</Button></Link>
                        <Button type="primary" inline style={{ marginRight: '4px' }}>停嘱</Button>
                        <Button type="primary" inline style={{ marginRight: '4px' }}>签署</Button>
                        <Button type="primary" inline style={{ marginRight: '4px' }}>删除</Button>
                    </div>
                </Flex>
            </div>
            <WhiteSpace />
            <div>
                <Table
                    rowSelection={{ type: selectionType, ...rowSelection,}}
                    columns={columns}
                    dataSource={data}
                    scroll={{ x: 1500 }}
                    pagination={ false }/>
            </div>
        </div>
    );
};

export default Content;

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
