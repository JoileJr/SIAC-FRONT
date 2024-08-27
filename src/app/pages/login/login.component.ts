import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  value!: string;
  loading: boolean = false;


  Submit(): void {
    this.loading = !this.loading;
  }
}
