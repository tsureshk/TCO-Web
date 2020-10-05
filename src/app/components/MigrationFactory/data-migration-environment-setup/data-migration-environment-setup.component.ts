import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { DataMigrationEnvironmentUpdateOrDeleteComponent } from '../data-migration-environment-update-or-delete/data-migration-environment-update-or-delete.component';

@Component({
  selector: 'app-data-migration-environment-setup',
  templateUrl: './data-migration-environment-setup.component.html',
  styleUrls: ['./data-migration-environment-setup.component.scss']
})
export class DataMigrationEnvironmentSetupComponent implements OnInit {

  constructor(private dialog: MatDialog, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  EditOrUpdate() {
    // this.dialog.open(AutomationEnvironmentUpdateDeleteComponent);

    this.dialog.open(DataMigrationEnvironmentUpdateOrDeleteComponent, {
      panelClass: 'custom-dialog',
      hasBackdrop: true,
    });
  }
}
