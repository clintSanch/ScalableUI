import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, forkJoin } from 'rxjs';
import * as Rx from 'rxjs';

@Injectable({ providedIn: 'any', })

export class AuthService {

    remoteUrl = 'https://';
    httpHeader = new HttpHeaders().set('contentType', 'application/json').set('Acess-Control-Allow-Origin', '*');
    constructor(private _http: HttpClient) { }

    login(username: string, password: string) {
        return this._http.post(this.remoteUrl, { 'headers': this.httpHeader })
            .pipe(map((_data) => { }))
            .forEach(() => { })
            .catch(() => { })
            .finally(() => { })
    }

    register() {
        return this._http.post(this.remoteUrl, { 'headers': this.httpHeader })
            .pipe()
            .forEach(() => { })
            .catch(() => { })
            .finally(() => { });
    }
}