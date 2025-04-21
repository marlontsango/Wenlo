import { Component, ElementRef, ViewChild } from '@angular/core';
import { renderChart } from '../utils/chart-config';
import { areaChart } from '../utils/area-chart';
import { dataSeries } from '../utils/data-series';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip
} from "ng-apexcharts";
@Component({
  selector: 'app-page-not-found-component',
  standalone: false,
  templateUrl: './page-not-found-component.component.html',
  styleUrl: './page-not-found-component.component.css'
})
export class PageNotFoundComponentComponent {

}
