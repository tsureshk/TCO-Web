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

  goToDataMigration() {
    console.log('Output Migration');
    this.route.navigateByUrl('DataMigration');
  }

  goToAutomationTaskCreation() {
    console.log('Automation Task Creation');
    this.route.navigateByUrl('AutomationTaskCreation');
  }

  goToDataMigrationTaskCreation() {
    console.log('Datamigration Task Creation');
    this.route.navigateByUrl('DataMigrationTaskCreation');
  }

  goToAutomationEnvironmentSetup() {
    console.log('Automation Environment Setup');
    this.route.navigateByUrl('AutomationEnvironmentSetup');
  }

  goToDataMigrationEnvironmentSetup() {
    console.log('DataMigration Environment Setup');
    this.route.navigateByUrl('DataMigrationEnvironmentSetup');
  }

  goToAutomationConfiguration() {
    console.log('Automation Configuration');
    this.route.navigateByUrl('AutomationConfiguration');
  }

  goToDataMigrationConfiguration() {
    console.log('DataMigration Configuration');
    this.route.navigateByUrl('DataMigrationConfiguration');
  }
}
