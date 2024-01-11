import axios from "axios";

export default class ApiManager {
    axiosClient = axios.create();
    apiKey = process.env.REACT_APP_API_KEY;

    async init() {

        /*
        const bearerToken = process.eng.REACT_APP_BEARER_TOKEN;
        this.axiosClient.defaults.headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization : `Bearer ${bearerToken}`
        };
        */
        this.axiosClient.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    }

    get = async (url) => {
        await this.init();
        return this.axiosClient.get(`${url}&api_key=${this.apiKey}`).then(response => response);
    }

    post = async (url, payload) => {
        await this.init();
        return this.axiosClient.post(`${url}&api_key=${this.apiKey}`, payload).then(response => response);
    }
}