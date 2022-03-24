import axios from 'axios';
import { IkiwiApiDeliveries } from './interfaces';

const KiwiApi = async () => {

    const URL = "http://localhost:4000/api/getAllDeliveries";

    const deliveries = await axios.get(URL);
    return deliveries.data
}

export default KiwiApi
