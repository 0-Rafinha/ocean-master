import React from "react";
import "./Card.css"
import eth from "../../assets/icon-eth.svg"
import time from "../../assets/icon-time.svg"


export default function Card(props) {
    return (
        <div className="card">
            <img src={props.data.image} alt="" className="picture" />
            <div className="content">
                <h1 className="subject">{props.data.name}</h1>
                <p className="description">{props.data.description}</p>
                <hr />
                <div className="info">
                    <p className="daysLeft"><img src={time} alt="" /> {props.data.expirationDate} days left</p>
                    <p className="price"><img src={eth} alt="" /> {props.data.price} ETH</p>
                </div>
            </div>
            <div className="creator">
            {props.data.creator}
            </div>
        </div>
    )
}
