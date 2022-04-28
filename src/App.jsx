import React from 'react';
import CoinDetailPage from "./pages/CoinDetailPage";
import CoinSummaryPage from "./pages/CoinSummaryPage";
import { BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header";
import { WatchListContextProvider } from "./context/watchListContext"

const App = () => {
    return(
        <div>
            <WatchListContextProvider>
                <BrowserRouter>
                <Header />
                    <Route exact path="/" component={CoinSummaryPage} />
                    <Route path="/coins/:id" component={CoinDetailPage} />
                </BrowserRouter>
            </WatchListContextProvider>
        </div>
    )
}

export default App;