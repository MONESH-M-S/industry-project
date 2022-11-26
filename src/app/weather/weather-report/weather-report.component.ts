import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss'],
})
export class WeatherReportComponent implements OnInit {
  @Input() weatherStats = [0,0];
  constructor() {}

  ngOnInit(): void {}
}
