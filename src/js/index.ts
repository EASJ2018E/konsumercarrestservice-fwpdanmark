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
let uri :string = "http://rest-pele-easj-dk.azurewebsites.net/api/cars";

function getAllCars(): void{
    

    axios.get<ICar[]>(uri)
    .then(function (responce:AxiosResponse<ICar[]>):void{

        let result: string = "<ol>";
        responce.data.forEach((car: ICar) => {
            if(car == null){
                result += "<li> Null element</li>"
            }
            else{
                result += "<li>"+ car.model+" " + car.vendor +" " +car.price +"</li>"
            }
            
        });
        result+= "</ol>"
        divtag.innerHTML = result;
    })
    .catch(function (error: AxiosError): void{
        divtag.innerHTML = error.message;
    })
}

let postButtonElement: HTMLButtonElement = document.getElementById("postButton") as HTMLButtonElement;
postButtonElement.addEventListener("click", postCar);

function postCar(): void{
    let vendorField: HTMLInputElement = document.getElementById("inputVendor") as HTMLInputElement; 
    let modelField: HTMLInputElement = document.getElementById("inputModel") as HTMLInputElement;
    let priceField: HTMLInputElement = document.getElementById("inputPrice") as HTMLInputElement;

    let myVendor: string = vendorField.value;
    let myModel: string = modelField.value;
    let myPrice: number = Number(priceField.value);

    axios.post<ICar>(uri,{model:myModel, vendor:myVendor, price:myPrice})
    .then((response: AxiosResponse) => {console.log(response.status +" " + response.statusText)})
    .catch((error: AxiosError) => {console.log(error);} )
}

let deleteButtonElement: HTMLButtonElement = document.getElementById("deleteButton") as HTMLButtonElement
deleteButtonElement.addEventListener("click",deleteCar);

function deleteCar(): void{
    let modelDeleteField: HTMLInputElement = document.getElementById("deleteCar") as HTMLInputElement
    let newUri = "http://rest-pele-easj-dk.azurewebsites.net/api/cars/"+modelDeleteField.value;
    axios.delete(newUri)
    .then((response: AxiosResponse) => {console.log(response.status +" " + response.statusText)})
    .catch((error: AxiosError) => {console.log(error);} )
        
    
}