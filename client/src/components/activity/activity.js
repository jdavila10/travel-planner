import React from "react";
import { Link } from "react-router-dom";
import SearchActivity from "../Search/SearchActivity.js";

const Activity = () => {
    return (
     
        <div  className="container valign-wrapper">
        <div className="row">
            <div className="row">
                <div className="col s12 center-align">
                    <h4>
                        BOOK IT AND GO, CATCH YOU OUTSIDE HOWBOUT THAT!
                </h4>
                    <p className="flow-text white-text text-lighten-1">
                        A freaking cool tool to book your travel for your next trip !!!
                </p>
                    <br />
                </div>
            </div>
            <SearchActivity />
        </div>
    </div>
    );
};

export default Activity;
