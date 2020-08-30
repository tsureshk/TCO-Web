import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataMigrationPOCO } from '../../Model/Migration/DataMigrationPOCO';

@Injectable()
export class DataMigrationService {
  public dataMigrationPOCO: DataMigrationPOCO = new DataMigrationPOCO();

  // progressName = 'Configuration';

  constructor() { }

  getDataMigrationPOCO(): DataMigrationPOCO {
    return this.dataMigrationPOCO;
  }

  setDataMigrationPOCO(dataMigrationPOCOs: DataMigrationPOCO) {
    this.dataMigrationPOCO = dataMigrationPOCOs;
  }
}
