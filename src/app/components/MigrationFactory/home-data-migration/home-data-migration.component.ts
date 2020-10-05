import { Component, OnInit } from '@angular/core';
import { DataMigrationService } from '../../../shared/services/datamigration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-data-migration',
  templateUrl: './home-data-migration.component.html',
  styleUrls: ['./home-data-migration.component.scss']
})
export class HomeDataMigrationComponent implements OnInit {
  isDataMigrationEnvironmentSetup = false;
  isDataMigrationConfiguration = false;
  isDataMigrationTaskCreation = false;
  isDataMigrationProcess = false;
  isDataMigrationOperationalDashboard = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.LoadDataMigrationEnvironmentSetup();
  }

  LoadDefaultValue() {
    this.isDataMigrationEnvironmentSetup = false;
    this.isDataMigrationConfiguration = false;
    this.isDataMigrationTaskCreation = false;
    this.isDataMigrationProcess = false;
    this.isDataMigrationOperationalDashboard = false;
  }


  LoadDataMigrationEnvironmentSetup() {
    this.LoadDefaultValue();

    this.isDataMigrationEnvironmentSetup = true;
    console.log('isDataMigrationEnvironmentSetup');
  }

  LoadDataMigrationConfiguration() {
    this.LoadDefaultValue();
    this.isDataMigrationConfiguration = true;

    console.log('isDataMigrationConfiguration');
  }

  LoadDataMigrationTaskCreation() {
    this.LoadDefaultValue();
    this.isDataMigrationTaskCreation = true;

    console.log('DataMigrationTaskCreation');
  }

  LoadDataMigrationProcess() {
    this.LoadDefaultValue();
    this.isDataMigrationProcess = true;

    console.log('isDataMigrationProcess');
  }

  LoadDataMigrationOperationalDashboard() {
    this.LoadDefaultValue();
    this.isDataMigrationOperationalDashboard = true;

    console.log('isDataMigrationOperationalDashboard');
  }

  goToNavigateToHomePage() {
    console.log('Start Home');
    this.route.navigateByUrl('Start');
  }
}
