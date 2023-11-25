import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'any',})

export class SharedService {

    private message_Source = new BehaviorSubject('');
    certain_store = this.message_Source.asObservable();

    constructor() {}

    
}