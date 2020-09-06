import { Component, OnInit } from '@angular/core';
import { DataMigrationPOCO } from '../../../Model/Migration/DataMigrationPOCO';
import { Router } from '@angular/router';
import { DataMigrationService } from '../../../shared/services/datamigration.service';

@Component({
  selector: 'app-automation-output',
  templateUrl: './automation-output.component.html',
  styleUrls: ['./automation-output.component.scss']
})
export class AutomationOutputComponent implements OnInit {
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


  ngOnInit(): void {
  }

}
