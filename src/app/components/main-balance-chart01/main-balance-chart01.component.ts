import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexMarkers, ApexTitleSubtitle, ApexFill, ApexYAxis, ApexXAxis, ApexTooltip } from 'ng-apexcharts';
import { dataSeries } from '../../utils/data-series';
import { areaChart } from '../../utils/area-chart';

@Component({
  selector: 'app-main-balance-chart01',
  standalone: false,
  templateUrl: './main-balance-chart01.component.html',
  styleUrl: './main-balance-chart01.component.css'
})
export class MainBalanceChart01Component {
  @ViewChild('areaChart') chartArea!: ElementRef;
  @ViewChild('areaChart2') chartArea2!: ElementRef;
  private chartInstance: any; // Pour stocker l’instance ApexCharts
  private chartInstance2: any;
  public series!: ApexAxisChartSeries;
  public chart!: ApexChart;
  public dataLabels!: ApexDataLabels;
  public markers!: ApexMarkers;
  public title!: ApexTitleSubtitle;
  public fill!: ApexFill;
  public yaxis!: ApexYAxis;
  public xaxis!: ApexXAxis;
  public tooltip!: ApexTooltip;

  ngAfterViewInit(){
        if(this.chartArea){
      this.chartInstance = areaChart(this.chartArea.nativeElement);
    }

    if(this.chartArea2){
      this.chartInstance = areaChart(this.chartArea2.nativeElement);
    }
    this.initChartData();
  }
    public initChartData(): void {
    let ts2 = 1484418600000;
    let dates = [];
    for (let i = 0; i < 120; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
    }

    this.series = [
      {
        name: "XYZ MOTORS",
        data: dates
      }
    ];
    this.chart = {
      type: "area",
      stacked: false,
      height: 350,
      zoom: {
        type: "x",
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: "zoom"
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.fill = {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis = {
      labels: {
        formatter: function(val) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: "Price"
      }
    };
    this.xaxis = {
      type: "datetime"
    };
    this.tooltip = {
      shared: false,
      y: {
        formatter: function(val) {
          return (val / 1000000).toFixed(0);
        }
      }
    };
  }


  ngOnDestroy() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
    if(this.chartInstance2){
      this.chartInstance2.destroy();
    }
  }

}
