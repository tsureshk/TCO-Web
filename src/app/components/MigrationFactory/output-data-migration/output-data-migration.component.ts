import { Component, OnInit } from '@angular/core';
import { DataMigrationService } from '../../../shared/services/datamigration.service';
import { DataMigrationPOCO } from '../../../Model/Migration/DataMigrationPOCO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output-data-migration',
  templateUrl: './output-data-migration.component.html',
  styleUrls: ['./output-data-migration.component.scss']
})
export class OutputDataMigrationComponent implements OnInit {
  dataMigrationPOCO: DataMigrationPOCO;

  public chartColors: any[] = [
    {
      backgroundColor: ['#007BFF', '#60c5ba', '#007BFF', '#60c5ba', '#60c5ba']
    }];

  chartLabels = ['Pass', 'Fail'];

  chartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#ffffff',
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'white',
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'white',
        }
      }]
    }
  };

  chartData = [{
    data: [90, 0],
    label: 'Pass',
    fontColor: 'white'
  },
  {
    data: [10, 0],
    label: 'Fail',
    fontColor: 'white'
  }
  ];


  constructor(private route: Router, private dataMigrationservice: DataMigrationService) { }

  ngOnInit() {
  }

  goToProcess() {
    this.dataMigrationservice.setDataMigrationPOCO(this.dataMigrationPOCO);
    this.route.navigateByUrl('homeDataMigration/ProcessDataMigration');
  }

  goToOutput() {
    this.dataMigrationservice.setDataMigrationPOCO(this.dataMigrationPOCO);
    this.route.navigateByUrl('homeDataMigration/OutputDataMigration');
  }
}
