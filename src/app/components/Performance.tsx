'use client';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import PerformanceGraph from './PerformanceGraph';
import { getBlockHeight, getPriceChart } from '@/app/utils/axios';
import { formatNumberWithCommas } from '@/app/utils/formatNumberWithCommas';
interface BlockHeightData {
  poxMarketCap: string;
  poxRank: string;
  AccountHolder: string;
  poxPrice: string;
  txnVol24: string;
  txCount24: string;
}
interface PriceChartDataItem {
  date: number;  // Assuming `time` is a string (e.g., ISO date string)
  value: number; // Assuming `price` is a number
}
interface DataItem {
  date: number;  // Date as a timestamp (number)
  value: number; // The price or other numerical value
}

const Performance = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [blockHeightData, setBlockHeightData] = useState<BlockHeightData | null>(null);
  const [chartData, setChartData] = useState<DataItem[]>([]);

  // Fetch block height data from API
  useEffect(() => {
    const fetchBlockHeightData = async () => {
      try {
        const data = await getBlockHeight();
        setBlockHeightData(data?.message);  // Assuming the API response is an object with a "message" key
      } catch (error) {
        console.error('Error fetching block height:', error);
      }
    };

    // Fetch price chart data from API
    const getChartData = async () => {
      try {
        const response = await getPriceChart();
        const mappedData = response?.message.map((item: PriceChartDataItem) => ({
          date: new Date(item.date).getTime(),  // Convert string to timestamp (number)
          value: item.value,                    // Assuming `price` is the value you want
        }));
        setChartData(mappedData || []);  // Ensure chartData is set correctly
      } catch (error) {
        console.error('Error fetching price chart data:', error);
      }
    };

    fetchBlockHeightData();
    getChartData();
  }, []); 

  return (
    <div
      className={`min-h-screen text-center px-0 md:px-4 lg:px-6 xl:px-40 mt-0 md:mt-32  ${inView ? 'animate-slideInFromLeft' : ''}`}
      ref={ref} // Attach the ref to trigger the inView hook
    >
      {/* Title */}
      <p className="text-3xl md:text-5xl lg:text-5xl xl:text-7xl 2xl:text-5xl md:h-28 lg:h-28 font-semibold">
        Market Performance
      </p>
      {/* Performance graph and stats */}
      <div className="whitespace-nowrap flex flex-col md:flex-row lg:flex-row space-x-0 md:space-x-6 lg:space-x-6">
        <PerformanceGraph data={chartData} />
        <div className="flex flex-col space-y-6 md:space-y-0 lg:space-y-0 justify-around text-white">
          <div className="mt-6 md:mt-0 lg:mt-0 flex flex-col items-center rounded-3xl px-12 py-8 bg-black shadow-inner shadow-green-500">
            <p className="font-bold text-xl md:text-3xl">
              ${blockHeightData?.poxMarketCap && formatNumberWithCommas(parseInt(blockHeightData.poxMarketCap))}
            </p>
            <p className="font-semibold text-xl whitespace-nowrap">Total Market Cap</p>
          </div>
          <div className="flex flex-col items-center border-[1px] border-gray-700 rounded-3xl px-12 py-8 bg-black shadow-inner shadow-green-500">
            <p className="font-bold text-xl md:text-3xl">
              {blockHeightData?.poxRank && formatNumberWithCommas(parseInt(blockHeightData.poxRank))}
            </p>
            <p className="font-semibold text-xl">Global Rank</p>
          </div>
          <div className="flex flex-col items-center border-[1px] border-gray-700 rounded-3xl px-12 py-8 bg-black shadow-inner shadow-green-500">
            <p className="font-bold text-xl md:text-3xl">
              {blockHeightData?.AccountHolder && formatNumberWithCommas(parseInt(blockHeightData.AccountHolder))}
            </p>
            <p className="font-semibold text-xl whitespace-nowrap">Accounts holding POX</p>
          </div>
        </div>
      </div>

      {/* Additional stats */}
      <div className="w-full flex flex-col item-center md:flex-row lg:flex-row justify-between text-white py-6 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 flex flex-col border-y-[1px] border-gray-700 border-l-[1px] rounded-3xl md:rounded-r-none lg:rounded-r-none px-4 py-8 md:px-12 lg:px-16 bg-black shadow-inner shadow-green-500">
          <p className="font-bold text-xl md:text-3xl">{blockHeightData?.poxPrice && blockHeightData.poxPrice}</p>
          <p className="font-semibold text-xl">Current Price</p>
        </div>
        <div className="flex-1 flex flex-col items-center border-y-[1px] border-gray-700 px-4 py-8 rounded-3xl md:rounded-none lg:rounded-none md:px-12 lg:px-16 bg-black shadow-inner shadow-green-500">
          <p className="font-bold text-xl md:text-3xl">
            {blockHeightData?.txnVol24 && formatNumberWithCommas(parseInt(blockHeightData.txnVol24))}
          </p>
          <p className="font-semibold text-xl">Transaction Volume (24hr)</p>
        </div>
        <div className="flex-1 flex flex-col items-center border-y-[1px] border-gray-700 border-r-[1px] rounded-3xl md:rounded-l-none lg:rounded-l-none px-4 py-8 md:px-12 lg:px-16 bg-black shadow-inner shadow-green-500">
          <p className="font-bold text-xl md:text-3xl">
            {blockHeightData?.txCount24 && formatNumberWithCommas(parseInt(blockHeightData.txCount24))}
          </p>
          <p className="font-semibold text-xl">Transaction Count (24hr)</p>
        </div>
      </div>
    </div>
  );
};

export default Performance;
