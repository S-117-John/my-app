import React from 'react';
import Head from "./head";
import { Flex, SegmentedControl, WhiteSpace, WingBlank} from "antd-mobile";
import {Button, DatePicker, Input, Select} from "antd";

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const { Option } = Select;

class DrugIndex extends React.Component{

    state = {
        date: now,
    }

    onChange(date, dateString) {
        console.log(date, dateString);
    }

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        return(
           <div style={{margin:15}}>
               <Head/>
               <WhiteSpace />
               <div>
                   <Button style={{marginRight:10}} type="primary">新增</Button>
                   <Button style={{marginRight:10}} type="primary">保存</Button>
                   <Button style={{marginRight:10}} type="primary">签署</Button>
                   <Button style={{marginRight:10}} type="primary">删除</Button>
                   <Button style={{marginRight:10}} type="primary">返回</Button>
               </div>
               <WhiteSpace />
               <div>
                   <Flex>
                       <SegmentedControl style={{width:200}} values={['长期', '临时']} />
                       <span style={{marginLeft:20}}>开始时间：</span><DatePicker onChange={this.onChange} />

                       <span style={{marginLeft:20}}>频次：</span>
                       <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                           <Option value="jack">Jack</Option>
                           <Option value="lucy">Lucy</Option>
                           <Option value="disabled" disabled>
                               Disabled
                           </Option>
                           <Option value="Yiminghe">yiminghe</Option>
                       </Select>

                       <span style={{marginLeft:20}}>用法：</span>
                       <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
                           <Option value="jack">Jack</Option>
                           <Option value="lucy">Lucy</Option>
                           <Option value="disabled" disabled>
                               Disabled
                           </Option>
                           <Option value="Yiminghe">yiminghe</Option>
                       </Select>

                       <Input addonBefore="首:"  defaultValue="1" style={{width:100,marginLeft:20}}/>

                       <Button style={{marginLeft:10}} type="primary">添加药品</Button>
                   </Flex>
               </div>

           </div>
        );
    }
}

export default DrugIndex;
