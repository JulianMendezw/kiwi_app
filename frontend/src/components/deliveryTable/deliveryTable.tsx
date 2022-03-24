import { useEffect, useState } from 'react'
import './deliveryTable.scss'
import KiwiApi from '../../utils/kiwiApi'
import { IkiwiApiDeliveries } from '../../utils/interfaces'

const DeliveryTable = () => {

    const [deliveries, setDeliveries] = useState<Array<IkiwiApiDeliveries>>();
    const [date, setDate] = useState();

    useEffect(() => {
        KiwiApi().then((deliveries) => {
            // to Format Date
            deliveries?.map((delivery: any) => {
                const date = new Date(delivery.creation_date).toLocaleString()
                delivery.creation_date = date
            })
            setDeliveries(deliveries)
        })
    }, [])

    const dateFormat = (params: any) => {
        const date = new Date(params)
        return date
    }

    return (
        <div className="delivery-table-container">
            <table className="delivery-table">
                <thead>
                    <tr>
                        <th className="tg-0lax">Creation</th>
                        <th className="tg-0lax">State</th>
                        <th className="tg-0lax">Pickup</th>
                        <th className="tg-0lax">Dropoff</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveries?.map((delivery: any) => (

                        <tr>
                            <td>{delivery.creation_date}</td>
                            <td>{delivery.state}</td>
                            <td>{delivery.pickup.pickup_lat}</td>
                            <td>{delivery.dropoff.dropoff_lat}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default DeliveryTable
