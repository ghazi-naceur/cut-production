import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from './login.service';


@Component({ 
    selector: 'app-login',
    templateUrl: './login.component.html'
 })
export class LoginComponent implements OnInit {

    loading = false;
    submitted = false;
    returnUrl: string;
    statusCode: number;
    message: string;

    constructor(private loginService: LoginService, 
        private formBuilder: FormBuilder, private router: Router) { }

    loginForm = new FormGroup({
        username: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    login() { 
        let login = this.loginForm.value;
        this.loginService.login(login).subscribe(
            successCode =>{
            this.statusCode = successCode;
              this.loginForm.reset();
              this.router.navigateByUrl('/success');
              this.message = "";
            },
            errorCode => {
                this.statusCode = 404;
                this.message = "Ce login n'est pas autorisé."
            });
    }

    onSubmit() {

    }
}
