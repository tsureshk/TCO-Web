import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { SubTaskComponent } from './sub-task/sub-task.component';
// import { SummaryReportComponent } from './summary-report/summary-report.component';

@Component({
  selector: 'app-datamigration',
  templateUrl: './datamigration.component.html',
  styleUrls: ['./datamigration.component.scss']
})
export class DatamigrationComponent implements OnInit {
  fileName = 'temp1';
  public url: SafeResourceUrl;
  name = 'Angular 5';
  fileUrl;
  
  nodes = [
    {
      id: 1,
      name: 'Master',
      children: [
        { id: 1001, name: 'Address Master' },
        { id: 1002, name: 'Dock set' },
        { id: 1003, name: 'Warehouse' }
      ]
    },
    {
      id: 4,
      name: 'Transaction',
      children: [
       {
          id: 40001,
          name: 'Appointment',
          // children: [
          //   { id: 40010, name: 'Dock set' },
          //   { id: 40011, name: 'Door set' }            
          // ]
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
  }

  loadSubTask() {
    console.log('Automation Sub task');

    // this.dialog.open(SubTaskComponent);
  }

  SummaryReport() {
    console.log('Automation Summary task');
    // this.dialog.open(SummaryReportComponent);
  }
}
