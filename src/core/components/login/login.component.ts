import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { User } from 'src/objectModels/user';
import { State, Store, createSelector, createFeatureSelector, createReducer } from '@ngrx/store';
import { outputAst } from '@angular/compiler';
import { DomDirective } from 'src/core/coredirectives/dom.directive';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    component_title = 'Login';


    @ViewChild(DomDirective) domManipulation!: DomDirective;
    @ViewChild('username') username! : ElementRef;
    @ViewChild('password') paswd! : ElementRef;
    @ViewChild('okButton') loginButton! : ElementRef;

    constructor(private authservice: AuthService, private store: Store,) { }

    ngOnInit(): void {
        console.log("username :", this.username.nativeElement);
        console.log("password :", this.paswd.nativeElement);
    }

    onSubmit() {}

    handleUser(value: string) {}

    handlePass(passValue: string) {}
}
