import React from "react";
import { Link} from "react-router-dom";

const Coin = ({coin, deleteCoin}) => {
    return(
        <Link  to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
            <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark rounded">
                <img src={coin.image} height="50"className="coinlist-image"/>
                <span className="text-decoration-none">{coin.name}</span>
                <span className="text-decoration-none">{coin.current_price} $</span>
                <span className={coin.price_change_percentage_24h < 0 ? "text-danger mright" : "text-success mright"} >
                    { " " }
                    {coin.price_change_percentage_24h < 0 ? (
                        <i className="fas fa-sort-down align-middle mx-2 mb-1"></i>
                    ) : (
                        <i className="fas fa-sort-up align-middle mx-2 mt-1"></i>
                    )}
                    {coin.price_change_percentage_24h} %
                </span>
                <i onClick={(e) => {
                    deleteCoin(coin.id)
                }} className="delete-icon far fa-times-circle text-danger" id="delete"></i>
            </li>
        </Link>
    )
}

export default Coin;