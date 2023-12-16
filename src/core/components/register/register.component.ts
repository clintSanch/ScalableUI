import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/core/services/auth.service';
import { PushPipe } from '@ngrx/component';
import { Observable } from 'rxjs';
import { DomDirective } from 'src/core/coredirectives/dom.directive';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    component_title = 'Register';

    @ViewChild(DomDirective) myDomDirective!: DomDirective;
    @ViewChild(DomDirective) username! : DomDirective;
    @ViewChild(DomDirective) email! : DomDirective;
    @ViewChild(DomDirective) password! : DomDirective;

    constructor(private fb: FormBuilder, private element: ElementRef, private authService: AuthService, private domdirective: DomDirective) { }

    ngOnInit(): void {}

    registerProfile = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        userName: [],
        email: [],
        mobile: [],
        password: []
    });

    onSubmit() { }

}
