import React from 'react';
import Head from "./head";
import './index.css';
import {Badge, Tabs, WhiteSpace} from 'antd-mobile';
import MedicalAdviceIndex from "./MedicalAdviceIndex";

// const tabs = [
//     { title: '医嘱', key: 't1' },
//     { title: '检查', key: 't2' },
//     { title: '检验', key: 't3' },
// ];

const tabs = [
    { title: <Badge text={'3'}>医嘱</Badge> },
    { title: <Badge text={'2'}>检查</Badge> },
    { title: <Badge dot>检验</Badge> },
];



const TabExample = () => (
    <div style={{ height: 500 }}>
        <Tabs tabs={tabs}
              initialPage={0}
              tabBarPosition="left"
              tabDirection="vertical"
              onChange={(tab, index) => { console.log('onChange', index, tab); }}
              onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
            <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'left', height: '150px', backgroundColor: '#fff' }}>
                <MedicalAdviceIndex/>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                Content of third tab
            </div>
        </Tabs>
        <WhiteSpace />
    </div>
);

function MedicalAdvice() {
    return(
        <div className="flex-container">
            <Head/>
            <WhiteSpace />
            <TabExample/>
        </div>
    );
}

export default MedicalAdvice;
