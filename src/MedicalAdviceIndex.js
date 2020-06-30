import React from 'react';
import {SearchBar, Flex, WhiteSpace, WingBlank, Tabs, Badge, SegmentedControl, Button} from 'antd-mobile';
import { Accordion, List } from 'antd-mobile';
import { Table} from 'antd';
import { Input } from 'antd';
import { Tree } from 'antd';

const { TreeNode } = Tree;


const { Search } = Input;


const columns = [
    {
        title: '医嘱名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '用量',
        dataIndex: 'dosage',
        key: 'dosage',
        render: text => <a>{text}</a>,
    },
    {
        title: '单位',
        dataIndex: 'unit',
        key: 'unit',
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
        title: '执行科室',
        dataIndex: 'exeDept',
        key: 'exeDept',
        render: text => <a>{text}</a>,
    },

];





const treeData = [
    {
        title: '模板',
        key: '0-0',
        children: [
            {
                title: '手术',
                key: '1',
            },
            {
                title: '出院',
                key: '2',
            },
        ],
    },
];

let data = [
    {
        key: '1',
        name: 'John Brown',
        dosage: 32,
        unit: 'New York No. 1 Lake Park',
        usage: 'nice',
        frequency: 'frequency',
        exeDept: 'exeDept'

    },
    {
        key: '1',
        name: 'John Brown',
        dosage: 32,
        unit: 'New York No. 1 Lake Park',
        usage: 'nice',
        frequency: 'frequency',
        exeDept: 'exeDept'
    },
    {
        key: '1',
        name: 'John Brown',
        dosage: 32,
        unit: 'New York No. 1 Lake Park',
        usage: 'nice',
        frequency: 'frequency',
        exeDept: 'exeDept'
    },
] ;








class MedicalAdviceIndex extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            data: data
        }
    }

    onSelect = (selectedKeys, info) => {
        if(selectedKeys=='1'){
            this.setState({
                data: [
                    {
                        key: '1',
                        name: '手术',
                        dosage: 32,
                        unit: 'New York No. 1 Lake Park',
                        usage: 'nice',
                        frequency: 'frequency',
                        exeDept: 'exeDept'

                    },

                ]
            });
        }else{
            this.setState({
                data: [
                    {
                        key: '1',
                        name: '住院',
                        dosage: 32,
                        unit: 'New York No. 1 Lake Park',
                        usage: 'nice',
                        frequency: 'frequency',
                        exeDept: 'exeDept'

                    },

                ]
            });
        }

        console.log(selectedKeys);
    };

    handle() {
        // const w=window.open('about:blank');
        window.location.href = '/medicalAdviceList'
    };

    render() {
        return (
            <div style={{marginLeft: 20}}>
                <div style={{width: 500}}>
                    <Search onSearch={value => this.handle()} enterButton/>
                </div>
                <WhiteSpace/>
                <Flex wrap="nowrap" align="start">
                    <div style={{width: 200}}>
                        <SegmentedControl values={['个人', '科室']}/>
                        <Tree
                            onSelect={this.onSelect.bind(this)}
                            treeData={treeData}
                        />
                    </div>
                    <div style={{marginLeft: 20}}>
                        <Table bordered columns={columns} dataSource={this.state.data} pagination={false}/>

                        <div style={{marginLeft: 200}}>
                            <WhiteSpace/>
                            <Flex>
                                <SegmentedControl values={['长期', '临时']} style={{width: 200, marginRight: 50}}/>
                                <Button type="primary" inline size="small" style={{marginRight: '4px'}}>确定</Button>
                                <Button type="primary" inline size="small" style={{marginRight: '4px'}}>取消</Button>
                            </Flex>
                        </div>

                    </div>
                </Flex>
            </div>
        );
    }
}







export default MedicalAdviceIndex;
