import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api"
});


export const getPrediction =
    async (ticker) => {

        const response =
            await API.post(
                "/predictions",
                { ticker }
            );

        return response.data;
    };


export const getStock =
    async (ticker) => {

        const response =
            await API.get(
                `/stocks/${ticker}`
            );

        return response.data;
    };


export const getRisk =
    async (ticker) => {

        const response =
            await API.get(
                `/risk/${ticker}`
            );

        return response.data;
    };


export const getExplanation =
    async (ticker) => {

        const response =
            await API.post(
                "/explanations",
                { ticker }
            );

        return response.data;
    };