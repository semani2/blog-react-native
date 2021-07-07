import axios from "axios";

const ngrokId = '42f99c645ba1';

export default axios.create({
    baseURL: `http://${ngrokId}.ngrok.io`
});