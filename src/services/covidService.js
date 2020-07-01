
/* Covid requests */
import axios from "axios";
import func from "@/lib/functions";

export default class CovidService {

    constructor() {
        let d = new Date();
        this.todayDate = func.formatDate(d);
        d.setDate(d.getDate() - 1);
        this.yesterdayDate = func.formatDate(d);
    }

    async getAll() {
        //return await axios.get('https://api.covid19api.com/world?from=' + this.yesterdayDate + 'T00:00:00Z&to=' + this.todayDate + 'T00:00:00Z');
        return await axios.get('https://api.covid19api.com/summary');
    }
    
    get(countrySlug) {
        return axios.get('https://api.covid19api.com/total/country/' + countrySlug);
    }
    
    getRecentData(countrySlug) {
        return axios.get('https://api.covid19api.com/total/country/' + countrySlug + '?from==' + this.yesterdayDate + 'T00:00:00Z&to=' + this.todayDate + 'T00:00:00Z');
    }

    getCountries() {
        return axios.get('https://api.covid19api.com/countries');
    }

}
