import { Component, Input, OnInit } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  currentWeather = [0, 0];
  isLoading = false;
  constructor(private dbService: DbService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.dbService.getValues();
    this.dbService.getUpdatedValues()?.subscribe((res) => {
      if (res.length > 1) {
        this.dbService.updateConnectionStatus(true);
        this.currentWeather = res;
      }
      this.isLoading = false;
    });
  }
}
