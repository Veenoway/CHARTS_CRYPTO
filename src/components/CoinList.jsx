import React from 'react';
import { useEffect, useState, useRef, useContext } from 'react';
import geckoApi from "../apis/coinGecko";
import { WatchListContext } from '../context/watchListContext';
import Coin from "./Coin";

const CoinList = () => {
    const [coin, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { watchList, deleteCoin } = useContext(WatchListContext)
    console.log(watchList)
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            const result = await geckoApi.get("/coins/markets", {
                params: {
                    vs_currency: "usd",
                    ids: watchList.join(",")
                }
            });
            console.log(result.data)
            setCoins(result.data)
            setIsLoading(false)
        }
        fetchData();
        console.log(coin)
    },[watchList])

    const renderCoins = () => {
        if(isLoading) {
            return <div class="container-loading">
                        <div class="yellow-loading"></div>
                        <div class="red-loading"></div>
                        <div class="blue-loading"></div>
                        <div class="violet-loading"></div>
                    </div>
        }
        return (
            <div className="d-flex justify-content-center align-items-center">
                <ul className="coinlist list-group mt-2 w-50 ">
                    {coin.map(coin => {
                        return <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />
                    })}
                </ul>
            </div>
        )
    }

    return <div>{renderCoins()}</div>
    
}

export default CoinList;