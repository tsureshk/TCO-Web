import { Component, OnInit } from '@angular/core';
import { DataMigrationService } from '../../../shared/services/datamigration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-data-migration',
  templateUrl: './home-data-migration.component.html',
  styleUrls: ['./home-data-migration.component.scss']
})
export class HomeDataMigrationComponent implements OnInit {

  constructor(private route: Router, private dataMigrationservice: DataMigrationService) { }

  ngOnInit() {
  }

  goToAutomation() {
    console.log('Automation Migration');
    this.route.navigateByUrl('Automation');
  }

  goToConfiguration() {
    console.log('Configuration Migration');
    this.route.navigateByUrl('Configuration');
  }

  goToOutput() {
    console.log('Output Migration');
    this.route.navigateByUrl('OutputDataMigration');
  }
}
