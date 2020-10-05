import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homemigration',
  templateUrl: './homemigration.component.html',
  styleUrls: ['./homemigration.component.scss']
})
export class HomemigrationComponent implements OnInit {
  isAutomationEnvironmentSetup = false;
  isAutomationConfiguration = false;
  isAutomationTaskCreation = false;
  isAutomationProcess = false;
  isAutomationOperationalDashboard = false;

  isDataMigrationEnvironmentSetup = false;
  isDataMigrationConfiguration = false;
  isDataMigrationTaskCreation = false;
  isDataMigrationProcess = false;
  isDataMigrationOperationalDashboard = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  LoadDefaultValue() {
    this.isAutomationEnvironmentSetup = false;
    this.isAutomationConfiguration = false;
    this.isAutomationTaskCreation = false;
    this.isAutomationProcess = false;
    this.isAutomationOperationalDashboard = false;

    this.isDataMigrationEnvironmentSetup = false;
    this.isDataMigrationConfiguration = false;
    this.isDataMigrationTaskCreation = false;
    this.isDataMigrationProcess = false;
    this.isDataMigrationOperationalDashboard = false;
  }

  LoadAutomationEnvironmentSetup() {
    this.LoadDefaultValue();

    this.isAutomationEnvironmentSetup = true;
    console.log('isAutomationEnvironmentSetup');
  }

  LoadAutomationConfiguration() {
    this.LoadDefaultValue();
    this.isAutomationConfiguration = true;

    console.log('isAutomationConfiguration');
  }

  LoadAutomationTaskCreation() {
    this.LoadDefaultValue();
    this.isAutomationTaskCreation = true;

    console.log('AutomationTaskCreation');
  }

  LoadAutomationProcess() {
    this.LoadDefaultValue();
    this.isAutomationProcess = true;

    console.log('isAutomationProcess');
  }

  LoadAutomationOperationalDashboard() {
    this.LoadDefaultValue();
    this.isAutomationOperationalDashboard = true;

    console.log('isAutomationOperationalDashboard');
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
