import { useEffect, useState } from 'react'
import './deliveryTable.scss'
import KiwiApi from '../../utils/kiwiApi'
import { IkiwiApiDeliveries } from '../../utils/interfaces'
import { iframeMap } from './iframeMap'

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
            // Sort in Ascending order by date
            deliveriesDoc.sort((x: any, y: any) => +new Date(x.creation_date).getTime() - +new Date(y.creation_date).getTime())
            setDeliveries(deliveriesDoc)
        })
    }, [])

    useEffect(() => {
        const newDeliveries = deliveries ? [...deliveries] : []

        if (order) {
            newDeliveries?.sort((x: any, y: any) => +new Date(x.creation_date).getTime() - +new Date(y.creation_date).getTime());
            setDeliveries(newDeliveries)
        } else {
            newDeliveries?.sort((x: any, y: any) => +new Date(y.creation_date).getTime() - +new Date(x.creation_date).getTime());
            setDeliveries(newDeliveries)
        }
    }, [order])

    return (
        <div className="delivery-table-container">
            <div className="delivery-button-container">
                <button className="Order-button" onClick={() => setOrder(!order)}>{order ? "Order: ASC" : "Order: DESC"}</button>
            </div>

            <table className="delivery-table">
                <thead>
                    <tr>
                        <th className="tg-0lax">Creation</th>
                        <th className="tg-0lax">State</th>
                        <th className="tg-0lax">Pickup / Dropoff</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveries?.map((delivery: any) => (
                        <tr key={delivery.id}>
                            <td>{delivery.creation_date}</td>
                            <td>{delivery.state}</td>
                            <td>{iframeMap(delivery)}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div >
    )
}

export default DeliveryTable
