import React from "react";
import Navbar from "./navbar";
import './dashboard.scss'
import DeliveryList from "./deliveryList";


const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <DeliveryList></DeliveryList>
        </div>
    )
}

export default Dashboard
