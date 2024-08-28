import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  value!: string;
  loading: boolean = false;
  formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.instanceFormLogin();
  }

  instanceFormLogin(): void {
    this.formLogin = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  submit(): void {
    this.loading = !this.loading;
    const {login, password} = this.formLogin.value;
    const canAuthenticate = this.validateLoginAndPassword(login, password)

    if(!canAuthenticate){
      this.loading = !this.loading;
      return
    }

    console.log("login: " + login)
    console.log("password: " + password)
  }

  validateLoginAndPassword(login: string, password: string): boolean {
    let returnError = false;
    if (login === null) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Login é obrigatório' });
      returnError = true;
    }
    if (password === null) {
      this.messageService.add({ severity: 'warn', summary: 'Atenção', detail: 'Senha é obrigatório' });
      returnError = true;
    }
    console.log('validou')
    return !returnError;
  }
}
