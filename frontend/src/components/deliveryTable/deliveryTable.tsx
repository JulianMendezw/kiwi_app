import { useEffect, useState } from 'react'
import './deliveryTable.scss'
import KiwiApi from '../../utils/kiwiApi'
import { IkiwiApiDeliveries } from '../../utils/interfaces'

const DeliveryTable = () => {

    const [deliveries, setDeliveries] = useState<Array<IkiwiApiDeliveries>>();
    const [order, setOrder] = useState<boolean>(true)

    useEffect(() => {
        KiwiApi().then((deliveriesDoc) => {
            // To format date
            deliveriesDoc?.map((delivery: any) => {
                const date = new Date(delivery.creation_date).toLocaleString()
                delivery.creation_date = date
            })
            // SOrt in Ascending order
            deliveriesDoc.sort((x: any, y: any) => +new Date(x.creation_date).getTime() - +new Date(y.creation_date).getTime())
            setDeliveries(deliveriesDoc)
        })
    }, [])


    useEffect(() => {
        if (order) {
            deliveries?.sort((x: any, y: any) => +new Date(x.creation_date).getTime() - +new Date(y.creation_date).getTime());
            setDeliveries(deliveries)
        } else {
            deliveries?.sort((x: any, y: any) => +new Date(y.creation_date).getTime() - +new Date(x.creation_date).getTime());
            setDeliveries(deliveries)
        }
    })

    return (
        <div className="delivery-table-container">
            <div className="delivery-button-container">
                <button onClick={() => setOrder(!order)}>{order ? "Order: DESC" : "Order: ASC"}</button>
            </div>

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
