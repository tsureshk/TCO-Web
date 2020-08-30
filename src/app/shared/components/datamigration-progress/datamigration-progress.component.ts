import { Component, OnInit } from '@angular/core';
import { DataMigrationService } from '../../services/datamigration.service';

@Component({
  selector: 'app-datamigration-progress',
  templateUrl: './datamigration-progress.component.html',
  styleUrls: ['./datamigration-progress.component.scss']
})
export class DatamigrationProgressComponent implements OnInit {
  progressName: string;
  constructor(private dataMigrationService: DataMigrationService) { }

  ngOnInit() {

  }

}
