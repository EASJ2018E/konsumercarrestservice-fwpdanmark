import axios, {
    AxiosResponse, 
    AxiosError} from "../../node_modules/axios/index";

    //http://rest-pele-easj-dk.azurewebsites.net/api/cars

interface ICar {
    model: string;
    vendor: string;
    price: number;
}

let buttontag: HTMLButtonElement = document.getElementById("getAllButton") as HTMLButtonElement;
buttontag.addEventListener("click",getAllCars);
let divtag: HTMLDivElement = document.getElementById("content") as HTMLDivElement;

function getAllCars(): void{
    let uri :string = "http://rest-pele-easj-dk.azurewebsites.net/api/cars";

    axios.get<ICar[]>(uri)
    .then(function (responce:AxiosResponse<ICar[]>):void{

        let result: string = "<ol>";
        responce.data.forEach((car: ICar) => {
            result += "<li>"+ car.model+" " + car.vendor +" " +car.price +"</li>"
        });
        result+= "</ol>"
        divtag.innerHTML = result;
    })
    .catch(function (error: AxiosError): void{
        divtag.innerHTML = error.message;
    })
}