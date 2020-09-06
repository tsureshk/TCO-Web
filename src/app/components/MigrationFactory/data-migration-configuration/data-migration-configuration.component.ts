import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataMigrationService } from '../../../shared/services/datamigration.service';
import { DataMigrationPOCO } from '../../../Model/Migration/DataMigrationPOCO';


@Component({
  selector: 'app-data-migration-configuration',
  templateUrl: './data-migration-configuration.component.html',
  styleUrls: ['./data-migration-configuration.component.scss']
})
export class DataMigrationConfigurationComponent implements OnInit {

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
