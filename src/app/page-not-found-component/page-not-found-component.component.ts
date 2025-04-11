import { Component, ElementRef, ViewChild } from '@angular/core';
import { renderChart } from '../utils/chart-config';

@Component({
  selector: 'app-page-not-found-component',
  standalone: false,
  templateUrl: './page-not-found-component.component.html',
  styleUrl: './page-not-found-component.component.css'
})
export class PageNotFoundComponentComponent {
  @ViewChild('chartOne') chartElement!: ElementRef; // Référence au div du graphique
  private chartInstance: any; // Pour stocker l’instance ApexCharts

  ngAfterViewInit() {
    // Rendre le graphique après que le DOM soit prêt
    if (this.chartElement) {
      this.chartInstance = renderChart(this.chartElement.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
  }
}
