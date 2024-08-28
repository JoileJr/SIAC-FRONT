import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
  sidebarVisible: boolean = false;
  items: any [] = [];

  constructor(
    private messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-file',
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
    ];
  }

}
