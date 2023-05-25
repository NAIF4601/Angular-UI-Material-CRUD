import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  logout(): void {
    this.auth.logout();
  }

// throw new Error('Method not implemented.');

  title = 'ang14-material-ui-crud';
}
