
import { HttpHeaders } from "@angular/common/http";



export const API_URL = 'http://localhost:3000/api/v1'
// export const API_URL = 'https://childrenscanapi.herokuapp.com/api/v1'

let httpHeaders = { "Content-Type": "application/json"};
// let httpHeaders = { "Content-Type": "multipart/form-data"};

export const httpOptions = {
    headers: new HttpHeaders(httpHeaders)

  };
