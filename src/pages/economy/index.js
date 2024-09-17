import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { RiCloseLine } from '@remixicon/react';
import { AreaChart, Card, List, ListItem } from '@tremor/react';
import { data, Example, Card1 } from './components/areaChart'


const Economy = (props) => {
  const [CPI, setCPI] = useState(null); // 初始值为 null

  // 使用 dataflow identifier 获取澳大利亚的通货膨胀率 (CPI) 数据
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
    const fetchData = async () => {
      const cpiValue = await getInflationRate();
      setCPI(cpiValue); // 将 CPI 数据存储到 state 中
    };
    fetchData();
  }, []); // 空数组确保 useEffect 只在组件挂载时运行一次

  return (
    <div>
      <h2>CPI Data</h2>
      <div>
        {/* 只有当 CPI 数据存在时才进行渲染 */}
        {CPI ? (
          Object.entries(CPI).map(([period, value]) => (
            <div key={period}>
              <strong>{period}:</strong> {value}%
            </div>
          ))
        ) : (
          <p>Loading...</p> // 数据加载时显示加载状态
        )}
      </div>
      <div class="text-red-500">This text should be red if Tailwind is working</div>
      <Example></Example>
      <Card1>card</Card1>
    </div>
  );
};

const mapState = (state) => ({});

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(Economy);