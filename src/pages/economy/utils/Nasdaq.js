// 获取苹果股票的实时价格
export async function fetchAppleStock() {
    const apiKey = '67VJCKQ98KAR25IP';  // 将 YOUR_API_KEY 替换为你自己的 API Key
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      // 输出苹果的最新股价
      if (data['Global Quote']) {
        console.log('苹果当前价格:', data['Global Quote']['05. price']);
      } else {
        console.log('无法获取数据，请检查API Key或请求参数。');
      }
    } catch (error) {
      console.error('获取数据失败:', error);
    }
  }

// 获取苹果公司最近一年的股价数据
export async function fetchAppleYearlyStock() {
    const apiKey = 'YOUR_API_KEY'; // 请替换为你的 Alpha Vantage API Key
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&outputsize=full&apikey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data['Time Series (Daily)']) {
        const dailyPrices = data['Time Series (Daily)'];
        // 过滤出最近一年的数据
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const filteredData = Object.entries(dailyPrices).filter(([date]) => new Date(date) >= oneYearAgo);
  
        // 输出最近一年的数据
        filteredData.forEach(([date, priceInfo]) => {
          console.log(`Date: ${date}, Close Price: ${priceInfo['4. close']}`);
        });
      } else {
        console.log('无法获取数据，请检查API Key或请求参数。');
      }
    } catch (error) {
      console.error('获取数据失败:', error);
    }
  }
  