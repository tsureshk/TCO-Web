import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../shared/services/local.service';
import { TCOService } from '../../shared/services/tco.service';
import { TCO } from '../../Model/TCO';

@Component({
  selector: 'app-jda',
  templateUrl: './jda.component.html',
  styleUrls: ['./jda.component.scss'],
})
export class JdaComponent implements OnInit {
  jdaList = [
    {
      // tslint:disable-next-line:max-line-length
      description: 'Receiving of orders',
    },
    {
      description: 'Multiple types of receipt orders',
    },
    {
      description: 'Specialty receipt support',
    },
    {
      description: 'Allow/restrict partial case receipts',
    },
    {
      description: 'Reverse and voiding of receipts',
    },
    {
      description: 'Appointment scheduling',
    },
    {
      description: 'Dock scheduling',
    },
    {
      description: 'Cross-docking',
    },
    {
      description: 'Yard management',
    },
    {
      description: 'Directed put-away',
    },
    {
      description: 'Returns management',
    },
    {
      description: 'Vendor data tracking',
    },
    {
      description: 'Label verification',
    },
    {
      description: 'Label generation',
    },
    {
      description: 'Palletize LPNs on receipt',
    },
    {
      description: 'MMobile scanner and app/smartphone support',
    },
    {
      description: 'Operations Center',
    },

    {
      description: 'Purchasing',
    },
    {
      description: 'iProcurement',
    },
    {
      description: 'Supplier Lifecycle Management',
    },
    {
      description: 'Outreach',
    },
    {
      description: 'Activity Management Gateway',
    },
    {
      description: 'Application Object Library',
    },
    {
      description: 'Cost Management',
    },
    {
      description: 'EDI Gateway',
    },
    {
      description: 'eMail Center',
    },
    {
      description: 'Exchange Market Place Financial Services Accounting Hub',
    },
    {
      description: 'Inventory Management',
    },
    {
      description: 'iSupplier Portal',
    },
    {
      description: 'Mobile Supply Chain Application',
    },
    {
      description: 'Order Entry',
    },
    {
      description: 'Procurement Contracts',
    },
    {
      description: 'Blue Yonder Applications System Bundle',
    },
    {
      description: 'Blue Yonder Configurator Developer',
    },
    {
      description: 'Blue Yonder Contracts Core',
    },
    {
      description: 'Blue Yonder Contracts for Sales',
    },
    {
      description: 'Blue Yonder Governance, Risk, & Compliance Manager',
    },
    {
      description: 'Product Lifecycle Management',
    },
    {
      description: 'Project Billing',
    },
    {
      description: 'Project Bundle',
    },
    {
      description: 'Quality',
    },
    {
      description: 'Self-Service Work Requests',
    },
    {
      description: 'Service Contracts',
    },
    {
      description: 'Service Procurement',
    },
    {
      description: 'Sourcing',
    },
    {
      description: 'Warehouse Management',
    },
    {
      description: 'Workflow Cartridge',
    },
  ];

  constructor(private route: Router, private local: LocalService, private tcoservice: TCOService) {}
  tco: TCO;

  ngOnInit() {
    this.tco = this.tcoservice.getTCO();
  }

  goToLogin() {
    this.tcoservice.setTCO(this.tco);
    this.local.setProgress('Client');
    this.route.navigateByUrl('home/login');
  }

  goToOutput() {
    this.tcoservice.setTCO(this.tco);
    this.local.setProgress('output');
    this.route.navigateByUrl('home/output');
  }

  getTotal() {
    console.log(this.tco);
   // return 0;
    return  this.tco.jdaInput.amount.reduce((a, b) => a + b);
  }
}
