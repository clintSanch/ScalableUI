import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({providedIn: 'any'})

export class BaseApiService {

    private httpHeaders = {
        headers : new HttpHeaders({'content-Type': 'application/json'})
    }

    constructor(private http: HttpClient) {}

    /**
     * send Post Request
     * @Param url
     * @Param data
     * @returns
     */

    async postRequest(url: string, data: any){

        return this.http.post('https://', data, this.httpHeaders)
        .pipe()
    }


    /**
     * send Get Request
     * @param url
     * @returns
     */
    async getRequest(url : string) {

        return this.http.get('https://', this.httpHeaders)
        .pipe()
    }

    /** Same process for PUT, DELETE, PATCH if needed **/
}