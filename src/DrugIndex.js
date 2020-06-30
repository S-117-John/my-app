import React from 'react';
import Head from "./head";
import {Flex, WhiteSpace, WingBlank} from "antd-mobile";
import {Button} from "antd";

class DrugIndex extends React.Component{
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

               <div>
                   <Flex>

                   </Flex>
               </div>

           </div>
        );
    }
}

export default DrugIndex;
