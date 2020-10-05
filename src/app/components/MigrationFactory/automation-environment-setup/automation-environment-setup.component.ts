import { Component, OnInit } from '@angular/core';
import { AutomationEnvironmentUpdateDeleteComponent } from '../automation-environment-update-delete/automation-environment-update-delete.component';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-automation-environment-setup',
  templateUrl: './automation-environment-setup.component.html',
  styleUrls: ['./automation-environment-setup.component.scss']
})
export class AutomationEnvironmentSetupComponent implements OnInit {

  constructor(private dialog: MatDialog, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  EditOrUpdate() {
    // this.dialog.open(AutomationEnvironmentUpdateDeleteComponent);

    this.dialog.open(AutomationEnvironmentUpdateDeleteComponent, {
      panelClass: 'custom-dialog',
      hasBackdrop: true,
    });
  }
}
