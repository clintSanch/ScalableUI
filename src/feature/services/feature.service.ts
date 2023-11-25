import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, retry, tap, throwError, firstValueFrom, filter, finalize } from 'rxjs';
import { Product } from 'src/objectModels/product';
import { commonEnvironment } from 'src/environments/environment.dev';
import { environment } from 'src/environments/environment.qa';
import { prod_environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'any' })

export class FeatureService {

    api_url = commonEnvironment.apiUrl;
    private products = new BehaviorSubject<Product[]>([]);
    current_Products = this.products.asObservable();
    httpHeaders = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    errorMessage!: string;
    payload! : Product

    constructor(private http_Api: HttpClient) { }

    /**
     * Observable type
     * @param data 
     * @returns 
     */
    update_Product(product: Product[]) {

        return this.http_Api.patch(`${this.api_url}/product_id`, this.httpHeaders)
            .pipe(map((data: any) => { return data }),)
            , retry(1) //Denotes retrying a failed request once or whichever the number assigned
            , catchError((error: any) => { return throwError('there is an error', error) });

    }

    /**
     * perfect Observable method or function
     * @param data 
     * @returns 
     */
    available_Products(): Observable<Product[]> {

        return this.http_Api.get<Product[]>(`${this.api_url}`, this.httpHeaders)
            .pipe(tap((data) => JSON.stringify(data))

                , retry(1)//Denotes retrying a failed request
                , catchError((error) => {
                    if (error.error instanceof ErrorEvent) {
                        this.errorMessage = `Error : ${error.error.message}`
                    } else {
                        this.errorMessage = this.serverError(error)
                    }
                    return throwError(this.errorMessage)
                })
                , finalize(() => { }));
    }

    /**
     * promise bases function or
     * @returns 
     */
    async available_Product() {

        return await this.http_Api.get(`${this.api_url}/product_id`, this.httpHeaders)
            .forEach((data: any) => { return JSON.parse(data) })
            .then(() => { })
            .then(() => { })
            .catch((error) => {
                if (error.error instanceof ErrorEvent) {
                    //client-side error type
                    this.errorMessage = `Error : ${error.error.message}`
                } else {
                    //responding with error from the server could there be
                    this.errorMessage = this.serverError(error)
                }
                return throwError(this.errorMessage)
            })
            .finally(() => { });
    }

    /**
     * perfect Observable fuctions or methods
     * that posts or uploads new products to the web-server for trade
     * @param data 
     * @returns 
     */
    upload_Product(product: Product[]) {

        return this.http_Api.post(`${this.api_url}/product_id`, this.payload, this.httpHeaders)
            .pipe(map((data: any) => { return data }))
            , retry(1)
            , catchError((error) => {
                if (error.error instanceof ErrorEvent) {
                    //client-side error type
                    this.errorMessage = `Error : ${error.error.message}`
                } else {
                    //error coming from server
                    this.errorMessage = this.serverError(error)
                }

                return throwError(this.errorMessage)
            })
            , finalize(() => { });
    }


    /**
     * typical server errors types
     * @param error
     * @returns 
     */
    private serverError(error: HttpErrorResponse): string {

        switch (error.status) {
            case 404: { return `not found: ${error.message}` };
            case 403: { return `access denied : ${error.message}` };
            case 500: { return `internal server error : ${error.message}` };
            default: { return `unknown server error: ${error.message}` };
        }
    }
}