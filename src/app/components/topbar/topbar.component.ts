import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {

  constructor(private router: Router,
              private confirmationService: ConfirmationService,
              private messageService: MessageService
  ) {
  }

  ngOnInit() {
  }

  logout(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Você realmente deseja sair do sistema?',
      header: 'Desejar sair?',
      icon: 'pi pi-exclamation-circle',
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "Sair",
      rejectLabel: "Cancelar",
      rejectButtonStyleClass: "p-button-text",
      accept: () => {
        this.messageService.add({severity: 'info', summary: 'Confirmado', detail: 'Logout realizado com sucesso!'});
        localStorage.clear();
        this.router.navigate(['/login']);
      },
    });
  }

}
