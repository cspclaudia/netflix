import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private router: Router) {}
  show: any;
  ngOnInit(): void {
    this.show = false;
  }
  entrar() {
    this.show = true;
    this.router.navigateByUrl('/Auth/login');
  }
  assinar() {
    this.show = true;
    this.router.navigateByUrl('/Auth/registro');
  }
}
