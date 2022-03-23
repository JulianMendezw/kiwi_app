const firebasedb = require('../firebasedb');
const kiwiCtrl = {}
require('../firebasedb')


// Create a new bot 
kiwiCtrl.newBot = async (req, res) => {

    const botObj = {
        "id": "string",
        "status": req.body.status,
        "location": {
            "dropoff_lat": req.body.location.dropoff_lat,
            "dropoff_lon": req.body.location.dropoff_lon
        },
        "zone_id": req.body.zone_id
    }

    try {
        const newBotDoc = await firebasedb.collection('bot').add(botObj);
        botObj.id = newBotDoc.id
        res.send(botObj)
    } catch (error) {
        res.error(400).send("Bot was not created")
    }
}


// Create new delivery
kiwiCtrl.newDelivery = async (req, res) => {

    // TODO: Value validator
    const deliveryObj = {
        'creation_date': Date.now(),
        'state': req.body.state,
        'pickup': {
            'pickup_lat': req.body.pickup.pickup_lat,
            'pickup_lon': req.body.pickup.pickup_lon
        },
        'dropoff': {
            'dropoff_lat': req.body.dropoff.dropoff_lat,
            'dropoff_lon': req.body.dropoff.dropoff_lon
        },
        zone_id: req.body.zone_id
    }

    try {
        const newDeliveryDoc = await firebasedb.collection('delivery').add(deliveryObj);
        deliveryObj.id = newDeliveryDoc.id
        res.send(deliveryObj)

    } catch (error) {
        res.status(400).send('Error')
    }
}

// Get a delivery by id
kiwiCtrl.getDelivery = async (req, res) => {

    // TODO: Clean the data response from firebase.
    try {
        const deliveryRef = firebasedb.collection('delivery').doc(req.query.id);
        const deliveryDoc = await deliveryRef.get();

        if (deliveryDoc._fieldsProto) {
            res.send(deliveryDoc)
        } else {
            res.send('Delivery Not Found')
        }

    } catch (error) {
        res.status(400).send('Error')
    }

}

module.exports = kiwiCtrl
