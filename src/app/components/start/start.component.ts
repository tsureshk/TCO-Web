import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../shared/services/local.service';
import { DataMigrationService } from '../../shared/services/datamigration.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private route: Router , private local: LocalService, private dataMigrationService: DataMigrationService) { }

  ngOnInit() {
  }

  goToHome() {
    this.local.setProgress('Information');
    this.route.navigateByUrl('home/client');
  }

  goToShirt() {
    this.route.navigateByUrl('shirt');
  }

  goToMigrationFactory() {
    console.log('Migration Factory');
    this.route.navigateByUrl('homeMigration');
  }
}
