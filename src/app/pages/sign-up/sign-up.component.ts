import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  value!: string;
  loading: boolean = false;
  formRegister!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) {
  }

  ngOnInit(): void {
    this.instanceFormLogin();
  }

  instanceFormLogin(): void {
    this.formRegister = this.formBuilder.group({
      login: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  submit(): void {
    this.loading = !this.loading;
    const {login, password, confirmPassword} = this.formRegister.value;
    const canAuthenticate = this.validateRegister(login, password, confirmPassword)

    if (!canAuthenticate) {
      this.loading = !this.loading;
      return
    }

    console.log("login: " + login)
    console.log("password: " + password)
    console.log("confirmPassword: " + confirmPassword)
  }

  // trocar parametro para algum objeto
  validateRegister(login: string, password: string, confirmPassword: string): boolean {
    let returnError = false;
    if (login === null) {
      this.messageService.add({severity: 'info', summary: 'Atenção', detail: 'Login é obrigatório'});
      returnError = true;
    }
    if (password === null) {
      this.messageService.add({severity: 'info', summary: 'Atenção', detail: 'Senha é obrigatório'});
      returnError = true;
    }
    if (confirmPassword === null) {
      this.messageService.add({severity: 'info', summary: 'Atenção', detail: 'Confirmar a senha é obrigatório'});
      returnError = true;
    }
    if (confirmPassword === password) {
      this.messageService.add({severity: 'info', summary: 'Atenção', detail: 'As senhas precisam ser iguais!'});
      returnError = true;
    }
    console.log('validou')
    return !returnError;
  }

}
