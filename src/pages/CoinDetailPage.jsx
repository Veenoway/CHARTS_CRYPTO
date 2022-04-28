import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import HistoryChart from "../components/HistoryChart";
import CoinData from "../components/CoinData";
import coinGecko from "../apis/coinGecko";


const CoinDetailPage = () => {
    const { id } = useParams();
    const [ coinData, setCoinData ] = useState({});
    const [ isLoading, setIsLoading] = useState(false);
    
    const formatData = (data) => {
        return data.map((el) => {
          return {
            t: el[0],
            y: el[1].toFixed(2),
          };
        });
      };

    useEffect(() => {
        
        const fetchData = async () => { 

            setIsLoading(true);
            const [week, month, year, detail ] = await Promise.all([
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days: 7,
                        interval: "5M"
                    },
                }),
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days: 30,
                        interval: "5M"
                    }
                }),
                coinGecko.get(`/coins/${id}/market_chart`, {
                    params: {
                        vs_currency: "usd",
                        days: 365,
                        interval: "5M"
                    },
                }),   
                coinGecko.get(`/coins/markets`, {
                    params: {
                        vs_currency: "usd",
                        ids: id,
                    },
                }),  
            ]);
            setCoinData({
                week: formatData(week.data.prices),
                month: formatData(month.data.prices),
                year: formatData(year.data.prices),
                detail: detail.data[0]
            })
            setIsLoading(false);
        }
        fetchData();
        console.log(coinData)
    }, [])
    

    const renderData = () => {
        if(isLoading) {
             return <div className="container-loading">
            <div className="yellow-loading"></div>
            <div className="red-loading"></div>
            <div className="blue-loading"></div>
            <div className="violet-loading"></div>
        </div>
        }
        return (
            <div className="coinlist">
                <HistoryChart data={coinData}/>
                <CoinData data={coinData.detail}/>
            </div>
        );
    };
    return renderData();
}

export default CoinDetailPage;