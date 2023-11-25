import { Injectable } from "@angular/core";
import { Location } from "src/objectModels/location";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'any'})

export class GeolocationService {

    location! : Location;

    constructor() {}

    get_Location(){
        const updated_location = new BehaviorSubject(this.location).asObservable();
        return updated_location;
    }
}