import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TCOService } from '../../shared/services/tco.service';
import { LocalService } from '../../shared/services/local.service';
import { TCO } from '../../Model/TCO';
import { DataMigrationService } from '../../shared/services/datamigration.service';
import { DataMigrationPOCO } from '../../Model/Migration/DataMigrationPOCO';
// import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-tcologin',
  templateUrl: './tcologin.component.html',
  styleUrls: ['./tcologin.component.scss']
})
export class TcologinComponent implements OnInit {
  tco: TCO;
  dataMigration: DataMigrationPOCO;

  constructor(private route: Router, private local: LocalService,
              private tcoservice: TCOService, private dataMigrationService: DataMigrationService) { }

  ngOnInit(): void {
    this.tco = this.tcoservice.getTCO();
    this.dataMigration = this.dataMigrationService.getDataMigrationPOCO();
  }

  loginFunction() {

    if (this.dataMigration.tcoLogin.UserName === 'wipro' &&
    this.dataMigration.tcoLogin.Password === 'wipro@123') {
      console.log('Enter');
      this.route.navigateByUrl('Start');
    } else {
      alert('Please check the Username and Password.');
    }

    this.dataMigration.tcoLogin.Password = '';
    
  }
}
