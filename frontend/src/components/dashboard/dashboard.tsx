import './dashboard.scss'
import DeliveryTable from "../deliveryTable/deliveryTable";


const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <DeliveryTable></DeliveryTable>
        </div>
    )
}

export default Dashboard
