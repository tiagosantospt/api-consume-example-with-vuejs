
/* Covid requests */
import axios from "axios";

export default class CovidService {

    async getAll() {
        return await axios.get('https://api.covid19api.com/summary');
    }

}
