import { Component, OnInit } from '@angular/core';
import { DataMigrationService } from '../../../shared/services/datamigration.service';
import { DataMigrationPOCO } from '../../../Model/Migration/DataMigrationPOCO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration-data-migration',
  templateUrl: './configuration-data-migration.component.html',
  styleUrls: ['./configuration-data-migration.component.scss']
})

export class ConfigurationDataMigrationComponent implements OnInit {
  currentSelectedProcess: string;
  dataMigrationProcess: string[] = ['Automation', 'Data Migration'];
  dataMigrationPOCO: DataMigrationPOCO;
  isDatabaseUploadSelected: boolean;
  isCSVUploadSelected: boolean;

  isDatabaseSelected: boolean;
  isAutomationSelected: boolean;

  constructor(private route: Router, private dataMigrationservice: DataMigrationService) { }

  ngOnInit() {
    this.isDatabaseUploadSelected = true;
  }

  goToProcess() {
    this.dataMigrationservice.setDataMigrationPOCO(this.dataMigrationPOCO);
    this.route.navigateByUrl('homeDataMigration/ProcessDataMigration');
  }

  setUploadRadio(e: string) {
    this.isDatabaseUploadSelected = false;
    this.isCSVUploadSelected = false;

    console.log(e);

    if (e === 'DatabaseUpload') {
      this.isDatabaseUploadSelected = true;
    } else if (e === 'CSVUpload') {
      this.isCSVUploadSelected = true;
    }
  }

  changeProcess(e) {
    this.isDatabaseSelected = false;
    this.isAutomationSelected = false;

    console.log(e.target.id);

    if (e.target.id === 'Datamigrationcheckbox') {
      this.isDatabaseSelected = true;
    } else if (e.target.id === 'Automationcheckbox') {
      this.isAutomationSelected = true;
    }
  }

  changeUpload(e) {
    this.isDatabaseUploadSelected = false;
    this.isCSVUploadSelected = false;

    console.log(e.target.id);

    if (e.target.id === 'DatabaseToDatabaseUploadcheckbox') {
      this.isDatabaseUploadSelected = true;
    } else if (e.target.id === 'CSVUploadcheckbox') {
      this.isCSVUploadSelected = true;
    }
  }
}
