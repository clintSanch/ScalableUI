import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, catchError, forkJoin } from 'rxjs';
import * as Rx from 'rxjs';

@Injectable({providedIn: 'any'})

export class AuthService {

    remoteUrl = 'https://';
    httpHeader =new HttpHeaders().set('contentType', 'application/json').set('Acess-Control-Allow-Origin', '*');
    constructor(private http: HttpClient){}

    login(){
      return this.http.post(this.remoteUrl, {'headers': this.httpHeader}).pipe(map((_data) => {}), catchError((err)))
    }

    register(){
      return this.http.post(this.remoteUrl, {'headers': this.httpHeader}).pipe(forkJoin((_data) => {}), catchError((err)))
    }
}