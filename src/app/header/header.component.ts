import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  connectionStatus!: boolean;

  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    this.dbService.connection.subscribe((res) => {
      this.connectionStatus = res;
    });
  }
}
