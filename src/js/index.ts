import axios, {
    AxiosResponse, 
    AxiosError} from "../../node_modules/axios/index";

    //http://rest-pele-easj-dk.azurewebsites.net/api/cars

interface Icar {
    model: string;
    vendor: string;
    price: number;
}