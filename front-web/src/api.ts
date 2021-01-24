import axios from "axios";
import { OrderPayload } from "./Orders/types";


const API_URL = 'https://maksuedson-sds2.herokuapp.com';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

const API_URL_BH = 'http://51.161.75.165:8081';

export function fetchProducts(){
    return axios(`${API_URL_BH}/products`)
}

export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function saveOrder(payload: OrderPayload){
    return axios.post(`${API_URL_BH}/orders`, payload)
}