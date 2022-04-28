import React from 'react';
import CoinList from '../components/CoinList';
import AddCoin from '../components/AddCoin';

const CoinSummaryPage = () => {
    return(
        <div className=" coinsummary pt-4 pb-5">
            <h2 className="text-center pb- text-light">Crypto Charts :</h2>
            <AddCoin />
            <CoinList />
        </div>
    )
}

export default CoinSummaryPage;