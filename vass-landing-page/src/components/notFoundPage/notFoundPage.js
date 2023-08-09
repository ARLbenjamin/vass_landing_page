import React from "react";
import { Link } from "react-router-dom";
import "./notFoundPage.scss";

export default function Error404() {

    return (
        <div className="error-404">
            <div className="container">
                <h1 className="first-four">4</h1>
                <div className="cog-wheel1">
                    <div className="cog1">
                        <div className="top"></div>
                        <div className="down"></div>
                        <div className="left-top"></div>
                        <div className="left-down"></div>
                        <div className="right-top"></div>
                        <div className="right-down"></div>
                        <div className="left"></div>
                        <div className="right"></div>
                    </div>
                </div>
                <h1 className="second-four">4</h1>
                <p className="wrong-para">Hola</p>
                <p className="message-to-go-home">
                    Regresa
                    <span className="go-home">
                        {" "}
                        <Link to="/">Adios</Link>
                    </span>
                    ?
                </p>
            </div>
        </div>
    );
}