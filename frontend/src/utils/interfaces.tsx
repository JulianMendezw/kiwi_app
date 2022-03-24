interface IkiwiApiDeliveries {
    "id": string,
    "creation_date": number,
    "state": "pending" | "assigned" | "in_transit" | "delivered",
    "pickup": {
        "pickup_lat": number,
        "pickup_lon": number,
    },
    "dropoff": {
        "dropoff_lat": number,
        "dropoff_lon": number,
    }
    "zone_id": string,
}

export type { IkiwiApiDeliveries }