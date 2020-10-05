import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-automation-migration',
  templateUrl: './home-automation-migration.component.html',
  styleUrls: ['./home-automation-migration.component.scss']
})
export class HomeAutomationMigrationComponent implements OnInit {

  isAutomationEnvironmentSetup = false;
  isAutomationConfiguration = false;
  isAutomationTaskCreation = false;
  isAutomationProcess = false;
  isAutomationOperationalDashboard = false;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.LoadAutomationEnvironmentSetup();
  }

  LoadDefaultValue() {
    this.isAutomationEnvironmentSetup = false;
    this.isAutomationConfiguration = false;
    this.isAutomationTaskCreation = false;
    this.isAutomationProcess = false;
    this.isAutomationOperationalDashboard = false;

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
}
