import axios from "axios";

export default axios.create({
    baseURL: "http://62.109.31.52/api", // указание адреса сервера
    headers: {
        "Content-Type": "application/json", // обмен данными будем осуществлять в формате json
    }
});