import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit {
  visible: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logoutDialog(): void {
    this.visible = true;
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
