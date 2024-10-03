import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { RiCloseLine } from '@remixicon/react';
import { AreaChart, Card, List, ListItem } from '@tremor/react';
import { data, Example, Card1 } from './components/areaChart'
import { Callout } from './components/callout'
import { KPIcards, KPIcard } from './components/KPIcard'
import { StockCard } from './components/StockCard'
import { Table } from './components/table'
import { TableExample } from './components/customTable'
import { MainWrapper, KeyIndicatorsWrapper, KeyIndicatorWrapper, ComponentsWrapper, 
  GPTWrapper,
  SideWrapper,
  MidWrapper
} from './style';

import { fetchAppleStock } from './utils/Nasdaq'

const Economy = (props) => {
  const [CPI, setCPI] = useState(3.8); // 初始值为 null
  const [CashRate, setCashRate] = useState(4.35);
  const [WagePriceIndex, setWagePriceIndex] = useState(4.1);


  // 使用 dataflow identifier 获取澳大利亚的通货膨胀率 (CPI) 数据
  const key = '67VJCKQ98KAR25IP'
  const data1 = 
  {
    name: 'CPI',
    stat: '151.1',
    change: '+4.1%',
    changeType: 'positive',
    areaChartData: 
      [
        {
          date: 'Sep 22',
          CPI: 7.3,
          CashRate: 2.35,
        },
        {
          date: 'Dec 22',
          CPI: 7.8,
          CashRate: 3.1,
        },
        {
          date: 'Mar 23',
          CPI: 7.0,
          CashRate: 3.6,
        },
        {
          date: 'Jun 23',
          CPI: 6.0,
          CashRate: 4.1,
        },
        {
          date: 'Sep 23',
          CPI: 5.4,
          CashRate: 4.1,
        },
        {
          date: 'Dec 23',
          CPI: 4.1,
          CashRate: 4.35,
        },
        {
          date: 'Mar 24',
          CPI: 3.6,
          CashRate: 4.35,
        },
        {
          date: 'Jun 24',
          CPI: 3.8,
          CashRate: 4.35,
        },
      ]
  }



  const getInflationRate = async () => {
    try {
      // 发送 API 请求
      const response = await axios.get(
        `https://api.data.abs.gov.au/data/ABS,CPI,/3.10001.10.50.Q?startPeriod=2024`,
        {
          headers: {
            Accept: 'application/xml',  // 确保接收 XML 格式的数据
          },
        }
      );
      
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(response.data, 'text/xml');

      // 查找所有包含 CPI 数据的 <generic:Obs> 节点
      const observations = xmlDoc.getElementsByTagName('generic:Obs');

      // 存储结果的对象
      let inflationRates = {};

      for (let i = 0; i < observations.length; i++) {
        const timePeriod = observations[i]
          .getElementsByTagName('generic:ObsDimension')[0]
          .getAttribute('value');
        const cpiValue = observations[i]
          .getElementsByTagName('generic:ObsValue')[0]
          .getAttribute('value');

        // 匹配 2024-Q1 和 2024-Q2
        if (timePeriod === '2024-Q1' || timePeriod === '2024-Q2') {
          inflationRates[timePeriod] = cpiValue;
        }
      }
      return inflationRates;
    } catch (error) {
      console.error('无法获取通货膨胀率:', error);
      return null;
    }
  };

  // 使用 useEffect 只在组件挂载时调用 getInflationRate()
  useEffect(() => {

    // fetchAppleStock().then(() => {
    //   console.log('数据已获取');
    // }).catch(error => {
    //   console.error('获取数据时发生错误:', error);
    // });

    const fetchData = async () => {
      const cpiValue = await getInflationRate();
      setCPI(cpiValue); // 将 CPI 数据存储到 state 中
    };
    fetchData();
  }, []); // 空数组确保 useEffect 只在组件挂载时运行一次

  return (
    <MainWrapper class="bg-white text-black dark:bg-gray-800 dark:text-white">
      
      <SideWrapper>
        <div className="short-section mb-[15px]">
          <div class="small-card-section pr-[7.5px] pb-[7.5px]">
            <KPIcard data={data1} class="bg-white shadow-lg rounded-lg p-4 w-full h-full"/>
          </div>
          
          <div class="small-card-section pr-[7.5px] pt-[7.5px]">Div 2</div>
          <div class="small-card-section pr-[7.5px] pt-[7.5px]">Div 3</div>
          <div class="small-card-section pl-[7.5px] pt-[7.5px]">Div 4</div>
        </div>
        
        <div className="long-section">长的内容</div>
      </SideWrapper>

      <MidWrapper>
        <div className="side-section">
          <div className="long-section mr-[15px]">
            <KPIcard data={data1} class="bg-white shadow-lg rounded-lg p-4 w-full h-full"/>
          </div>


          <div className="short-section">short section</div>
        </div>


        <div className="middle-section mt-[15px] mb-[15px]">
          <Example class="bg-white shadow-lg rounded-lg p-4"></Example>
        </div>


        <div className="side-section">
          <div className="long-section mr-[15px]">long section</div>
          <div className="short-section">short section</div>
        </div>
      </MidWrapper>


      <SideWrapper>
        <div className="long-section mb-[15px]">长的内容</div>
        <div className="short-section">短的内容</div>
      </SideWrapper>


    </MainWrapper>

  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Economy);

      
      // <div>
      //   {/* 只有当 CPI 数据存在时才进行渲染 */}
      //   {CPI ? (
      //     Object.entries(CPI).map(([period, value]) => (
      //       <div key={period}>
      //         <strong>{period}:</strong> {value}%
      //       </div>
      //     ))
      //   ) : (
      //     <p>Loading...</p> // 数据加载时显示加载状态
      //   )}
      // </div>


      //       {/* <div className="flex flex-col gap-4">
      //   <Callout variant="default" title="Default Variant" width="200px">
      //     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      //     eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      //   </Callout>

      //   <Callout variant="success" title="Success Variant">
      //     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      //     eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      //   </Callout>

      //   <Callout variant="warning" title="Warning Variant">
      //     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      //     eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      //   </Callout>

      //   <Callout variant="neutral" title="Neutral Variant">
      //     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      //     eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      //   </Callout>

      //   <Callout variant="error" title="Error Variant">
      //     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      //     eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      //   </Callout>
      // </div> */}




      // <KeyIndicatorsWrapper>
        
      //   <KeyIndicatorWrapper>
      //     <Example class="bg-white shadow-lg rounded-lg p-4 w-[200px] h-[200px]"></Example>
      //   </KeyIndicatorWrapper>

      //   <KeyIndicatorWrapper>
      //     <KPIcard data={data1} class="bg-white shadow-lg rounded-lg p-4"/>
      //     <StockCard class="bg-white shadow-lg rounded-lg p-4 w-[200px] h-[200px] flex-none"></StockCard>
      //   </KeyIndicatorWrapper>

      //   <KeyIndicatorWrapper>
      //     <KPIcards></KPIcards>
      //     <KPIcards></KPIcards>
      //   </KeyIndicatorWrapper>


        

      // </KeyIndicatorsWrapper>

      // <ComponentsWrapper class="bg-white text-black dark:bg-gray-800 dark:text-white">
      //   <div style={{width: '1000px', tableLayout: 'auto'}}>
      //     <TableExample />
      //   </div>
      //   <GPTWrapper>yooooo its GPT</GPTWrapper>
      // </ComponentsWrapper>