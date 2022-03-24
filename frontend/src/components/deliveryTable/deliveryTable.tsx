import './deliveryTable.scss'

const deliveryApiDoc = [{
    "id": "1",
    "creation_date": Date.now(),
    "state": "pending",
    "pickup": {
        "pickup_lat": 12545,
        "pickup_lon": 53535
    },

    "dropoff": {
        "dropoff_lat": 634634,
        "dropoff_lon": 346346,
    },
    "zone_id": "Polombia"
},
{
    "id": "2",
    "creation_date": Date.now(),
    "state": "pending",
    "pickup": {
        "pickup_lat": 12545,
        "pickup_lon": 53535
    },

    "dropoff": {
        "dropoff_lat": 634634,
        "dropoff_lon": 346346,
    },
    "zone_id": "Polombia"
}
]

const DeliveryTable = () => {


    return (
        <div className="delivery-table-container">
            <table className="delivery-table">
                <thead>
                    <tr>
                        <th className="tg-0lax">Creation Date</th>
                        <th className="tg-0lax">Creation Time</th>
                        <th className="tg-0lax">State</th>
                        <th className="tg-0lax">Pickup</th>
                        <th className="tg-0lax">Dropoff</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveryApiDoc?.map((apiData: any) => (
                        <tr>
                            <td>{apiData.creation_date}</td>
                            <td>{apiData.state}</td>
                            <td>{apiData.pickup.pickup_lat}</td>
                            <td>{apiData.dropoff.dropoff_lat}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default DeliveryTable
