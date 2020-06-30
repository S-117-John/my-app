import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { Flex, WhiteSpace } from 'antd-mobile';
import logo from "./logo.svg";

function Head() {
    return (
        <div>
            <Flex  wrap="wrap">
                <h1>南宫</h1>
                <h3>31</h3>
                <h3>男</h3>
                <h3>3岁</h3>
            </Flex>
            <Flex  wrap="wrap">
                <h3>住院号：13423  身份：灵璧医保  入院：2020-5-30 12:23   诊断： 肺炎</h3>
            </Flex>
        </div>
    );
}

export default Head;
