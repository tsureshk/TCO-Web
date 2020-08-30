import { Component, OnInit } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { saveAs } from 'file-saver';
import { FileService } from './File.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { ShirtSizeComponent } from    app/components/shirt-size/shirt-size.component';

import { ShirtSizeComponent } from '../../shirt-size/shirt-size.component';
import { AppointmentSubTaskComponent } from './AutomationSubTask/appointment-sub-task/appointment-sub-task.component';
import { AppointmentSummaryComponent } from './AutomationSummary/appointment-summary/appointment-summary.component';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
// import { GuiColumn, GuiSearching } from '@generic-ui/ngx-grid';

@Component({
  selector: 'app-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['./automation.component.scss']
})
export class AutomationComponent implements OnInit {
  fileName = 'temp1';
  public url: SafeResourceUrl;
  name = 'Angular 5';
  fileUrl;

  nodes = [
    {
      id: 1,
      name: 'Configuration',
      children: [
        { id: 1001, name: 'Warehouse' },
        { id: 1002, name: 'Partners' },
        { id: 1003, name: 'Equipment' },
        { id: 1004, name: 'Work' },
        { id: 1005, name: 'Inventory' },
        { id: 1006, name: 'Inbound' },
        { id: 1007, name: 'Outbound' },
        { id: 1008, name: 'Production' },
        { id: 1009, name: 'Integration' },
        { id: 1010, name: 'Advanced' }
      ]
    },
    {
      id: 2,
      name: 'Event Management',
      children: [
        { id: 2001, name: 'Administration' },
      ]
    },
    {
      id: 4,
      name: 'Receving',
      children: [
        {
          id: 4001,
          name: 'Dashboard',
        },
        {
          id: 40001,
          name: 'Receving Issues',
          children: [
            { id: 40010, name: 'Not Expected' },
            { id: 40011, name: 'No Location' },
            { id: 40012, name: 'Not Receivable' },
            { id: 40013, name: 'Location Overrides' },
            { id: 40014, name: 'Overages' },
            { id: 40015, name: 'Shortages' },
            { id: 40016, name: 'Damages' },
            { id: 40017, name: 'Distrubution Exceptions' },
            { id: 40018, name: 'Inbound Quality Issues' }
          ]
        },
        {
          id: 40100,
          name: 'Staging',
        },
        {
          id: 40101,
          name: 'Door Activity',
        },
        {
          id: 40102,
          name: 'Appointments',
        },
        {
          id: 40103,
          name: 'Inbound Shipments',
        },
        {
          id: 40104,
          name: 'Check In',
        },
        {
          id: 40105,
          name: 'Transport Equipment',
        },
        {
          id: 40106,
          name: 'Work Queue',
        },
        {
          id: 40107,
          name: 'Workflows',
        },
      ]
    }
  ];
  options = {};
  http: any;

  constructor(private dialog: MatDialog, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const data = 'Field1,Field2,Field3,Field4';
    const blob = new Blob([data], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }

  onSelectedChange(e) {

  }

  onFilterChange(e) {

  }

  downloadTemplate() {
    console.log('Test');

    const anchor = document.createElement('a');
    anchor.setAttribute('href', 'D:/test.ods');
    anchor.setAttribute('download', '');
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
    console.log('Test Done');


    // this.fileService.download().subscribe(
    //   res => {
    //     const blob = new Blob([res.blob()], { type: 'application/vnd.ms.excel' });
    //     const file = new File([blob], this.fileName + '.xlsx', { type: 'application/vnd.ms.excel' });
    //     saveAs(file);
    //   },
    //   res => {
    //     // notify error
    //   }
    // );
  }

  loadSubTask() {
    console.log('Automation Sub task');

    this.dialog.open(AppointmentSubTaskComponent);
  }
  SummaryReport() {
    console.log('Automation Sub task');

    this.dialog.open(AppointmentSummaryComponent);
  }
}
