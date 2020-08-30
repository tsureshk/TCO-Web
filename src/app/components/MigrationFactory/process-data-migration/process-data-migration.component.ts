import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataMigrationService } from '../../../shared/services/datamigration.service';
import { DataMigrationPOCO } from '../../../Model/Migration/DataMigrationPOCO';

@Component({
  selector: 'app-process-data-migration',
  templateUrl: './process-data-migration.component.html',
  styleUrls: ['./process-data-migration.component.scss']
})
export class ProcessDataMigrationComponent implements OnInit {
  dataMigrationPOCO: DataMigrationPOCO;
  isConfiguration = false;
  isEventManagement = false;
  isExtensions = false;
  isInventory = false;
  isLabor = false;
  isIOutboundplanner = false;
  isPacking = false;
  isPicking = false;
  isProduction = false;
  isReceving = false;
  isReturns = false;

  isShipping = false;
  isSystemAdminstrator = false;
  isSystemManagement = false;
  isYard = false;

  constructor(private route: Router, private dataMigrationservice: DataMigrationService) { }

  ngOnInit() {
    console.log('Init Called');
    this.initMenu();
    this.isConfiguration = true;
  }

  initMenu() {
    this.isConfiguration = false;
    this.isEventManagement = false;
    this.isExtensions = false;
    this.isInventory = false;
    this.isLabor = false;
    this.isIOutboundplanner = false;
    this.isPacking = false;
    this.isPicking = false;
    this.isProduction = false;
    this.isReceving = false;
    this.isReturns = false;
   }

  ConfigurationClick(event: Event) {
    this.initMenu();
    this.isConfiguration = true;
  }

  RecevingClick(event: Event) {
    this.initMenu();
    this.isReceving = true;
  }

  WarehouseClick(event: Event) {
    this.initMenu();
  }

  goToConfiguration() {
    this.dataMigrationservice.setDataMigrationPOCO(this.dataMigrationPOCO);
    this.route.navigateByUrl('homeDataMigration/ConfigurationDataMigration');
  }

  goToOutput() {
    this.dataMigrationservice.setDataMigrationPOCO(this.dataMigrationPOCO);
    this.route.navigateByUrl('homeDataMigration/OutputDataMigration');
  }
}
