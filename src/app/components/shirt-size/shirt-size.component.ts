import {
  Component,
  OnInit
} from '@angular/core';
import {
  TCO
} from '../../Model/TCO';
import {
  LocalService
} from '../../shared/services/local.service';
import {
  TCOService
} from '../../shared/services/tco.service';
import {
  Router
} from '@angular/router';


import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-shirt-size',
  templateUrl: './shirt-size.component.html',
  styleUrls: ['./shirt-size.component.scss'],
})
export class ShirtSizeComponent implements OnInit {
  constructor(
    private tcoservice: TCOService
  ) { }
  tco: TCO;
  total = 0;
  currentState;
  ImplementationDuration;
  isTMSVisible = false;
  isWMSVisible = false;
  isOtherVisible = true;
  isGraphVisible = false;

  smallStandardImplementation = 4750000;
  mediumStandardImplementation = 650000;
  largeStandardImplementation = 1100000;
  extraLargeStandardImplementation = 1400000;

  smallFactoryImplementation = 260000;
  mediumFactoryImplementation = 400000;
  largeFactoryImplementation = 700000;
  extraLargeFactoryImplementation = 925000;

  smallAdditionalFactoryImplementation = 0;
  mediumAdditionalFactoryImplementation = 0;
  largeAdditionalFactoryImplementation = 0;
  extraLargeAdditionalFactoryImplementation = 0;

  smallAdditionalStandardImplementation = 4750000;
  mediumAdditionalStandardImplementation = 650000;
  largeAdditionalStandardImplementation = 1100000;
  extraLargeAdditionalStandardImplementation = 1400000;

  public barChartOptions: ChartOptions = {
    responsive: true,

    legend: {
      labels: {
        fontSize: 15,
        fontColor: 'white',
      }
    },
    scales: {
      yAxes: [{
       
          ticks: {
              beginAtZero: true,
              fontSize: 15,
              fontColor: 'white'
          },
      }],
    xAxes: [{
          ticks: {
              fontSize: 15,
              fontColor: 'white'
          },
      }]
  }
  };

  // public barChartLabels: Label[] = ['Factory Implementation', 'Standard implementation'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [this.mediumFactoryImplementation], label: 'Factory Implementation', stack: 'A' },
    { data: [this.mediumAdditionalFactoryImplementation], label: 'Additonal Factory Implementation', stack: 'A' },
    { data: [this.mediumStandardImplementation], label: 'Medium standard implementation', stack: 'B' },
    { data: [this.mediumAdditionalStandardImplementation], label: 'Medium Addtional standard implementation', stack: 'B' },
  ];

  initImplementionCost() {
    this.smallStandardImplementation = 4750000;
    this.mediumStandardImplementation = 650000;
    this.largeStandardImplementation = 1100000;
    this.extraLargeStandardImplementation = 1400000;

    this.smallFactoryImplementation = 260000;
    this.mediumFactoryImplementation = 400000;
    this.largeFactoryImplementation = 700000;
    this.extraLargeFactoryImplementation = 925000;

    this.smallAdditionalFactoryImplementation = 0;
    this.mediumAdditionalFactoryImplementation = 0;
    this.largeAdditionalFactoryImplementation = 0;
    this.extraLargeAdditionalFactoryImplementation = 0;

    this.smallAdditionalStandardImplementation = 4750000;
    this.mediumAdditionalStandardImplementation = 650000;
    this.largeAdditionalStandardImplementation = 1100000;
    this.extraLargeAdditionalStandardImplementation = 1400000;
  }

  initControlVisible() {
    this.isTMSVisible = false;
    this.isWMSVisible = false;
    this.isOtherVisible = false;
    this.isGraphVisible = false;
  }

  validateTruck() {

    console.log(this.tco.tShirtSizingWMS.AverageTruckPerDay);
    console.log(this.tco.tShirtSizingWMS.NoOfOrdersPerDay);

    if ((this.convertToInt(this.tco.tShirtSizingWMS.NoOfOrdersPerDay) /
      this.convertToInt(this.tco.tShirtSizingWMS.AverageTruckPerDay)) > 1000) {
      alert('Please check the truck and No. of orders.');
    }
  }

  calculateImplementationCost() {

    //  this.openDialog();

    if (this.tco.tShirtSizing.Product === 'WMS') {
      // this.smallStandardImplementation = 4750000 * this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented);
      // this.mediumStandardImplementation = 650000 * this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented);
      // this.largeStandardImplementation = 1100000 * this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented);
      // this.extraLargeStandardImplementation = 1400000 * this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented);


      this.smallAdditionalStandardImplementation = ((4750000 * 0.20) *
        (this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented) - 1));

      this.mediumAdditionalStandardImplementation = ((650000 * 0.20) *
        (this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented) - 1));

      this.largeAdditionalStandardImplementation = ((1100000 * 0.20) *
        (this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented) - 1));

      this.extraLargeAdditionalStandardImplementation = ((1400000 * 0.20) *
        (this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented) - 1));

      this.smallAdditionalFactoryImplementation = ((260000 * 0.30) *
        (this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented) - 1));

      this.mediumAdditionalFactoryImplementation = ((400000 * 0.25) *
        (this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented) - 1));

      this.largeAdditionalFactoryImplementation = ((700000 * 0.20) *
        (this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented) - 1));

      this.extraLargeAdditionalFactoryImplementation = ((700000 * 0.20) *
        (this.convertToInt(this.tco.tShirtSizingWMS.NumberOfSitesTobeImplemented) - 1));

    } else {
      this.smallStandardImplementation = 4750000;
      this.mediumStandardImplementation = 650000;
      this.largeStandardImplementation = 1100000;
      this.extraLargeStandardImplementation = 1400000;

      this.smallFactoryImplementation = 260000;
      this.mediumFactoryImplementation = 400000;
      this.largeFactoryImplementation = 700000;
      this.extraLargeFactoryImplementation = 925000;
    }

    console.log('Extra large ' + this.extraLargeFactoryImplementation);
  }

  convertToInt(val) {
    // tslint:disable-next-line:radix
    return parseInt(val);
  }

  callType(value) {
    this.initControlVisible();
    this.isGraphVisible = false;

    if (value === 'WMS') {
      this.isWMSVisible = true;
    } else if (value === 'TMS') {
      this.isOtherVisible = true;
    } else {
      this.isOtherVisible = true;
    }
    console.log(value);
    console.log(this.isOtherVisible);
    console.log(this.isTMSVisible);
    console.log(this.isWMSVisible);
  }

  ngOnInit() {
    this.tco = this.tcoservice.getTCO();
  }

  chartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#ffffff',
      }
    },
    scales: {
      xAxes: [{
        ticks: {
          fontColor: 'white',

        }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'white',
          max: 1200000,
          min: 100000
        }
      }]
    }
  };


  // tslint:disable-next-line: member-ordering
  chartData = [{
    data: [0],
    label: 'Factory Implementation',
    fontColor: 'white'
  },
  {
    data: [0],
    label: 'Standard Implementation',
    fontColor: 'white'
  }
  ];

  public chartColors: any[] = [{
    backgroundColor: ['Green', '#60c5ba', '#007BFF', '#60c5ba', '#60c5ba']
  }];

  chartLabels = [''];

  calculateShirtSizing() {
    this.total = 0;
    this.isGraphVisible = true;

    this.calculateImplementationCost();

    if ((this.tco.tShirtSizing.Product === 'WMS')) {
      this.calculateWMSShirtSizing();
    }
    else {

      if ((this.tco.tShirtSizing.Product === 'Demand Manager')) {
        //this.total = this.total + 20;
      } else if ((this.tco.tShirtSizing.Product === 'Demand Planner')) {
        //this.total = this.total + 25;
      } else if ((this.tco.tShirtSizing.Product === 'Supply Chain Planner')) {
        //this.total = this.total + 30;
      }

      if ((this.tco.tShirtSizing.Version === 'n - 1 (Small)')) {
        this.total = this.total + 15;
      } else if ((this.tco.tShirtSizing.Version === 'n - 2 to 4 (Medium)')) {
        this.total = this.total + 20;
      } else if ((this.tco.tShirtSizing.Version === 'n - 4 to 6 (Large)')) {
        this.total = this.total + 25;
      } else if (
        (this.tco.tShirtSizing.Version === 'n-6 and lesser(Extra Large)')
      ) {
        this.total = this.total + 30;
      }

      if ((this.tco.tShirtSizing.Purpose === 'Implementation')) {
        //this.total = this.total + 20;
      } else if ((this.tco.tShirtSizing.Purpose === 'Transformation')) {
        //this.total = this.total + 15;
      }

      if ((this.tco.tShirtSizing.LinesofBusiness === 'B2B')) {
        this.total = this.total + 15;
      } else if ((this.tco.tShirtSizing.LinesofBusiness === 'Retail')) {
        this.total = this.total + 20;
      } else if ((this.tco.tShirtSizing.LinesofBusiness === 'Direct')) {
        this.total = this.total + 25;
      }

      //  if (this.tco.tShirtSizing.SCMNetworkReach = 'Local')
      //     {
      //       this.total = this.total + 10;
      //     }
      //     else
      if ((this.tco.tShirtSizing.SCMNetworkReach === 'Country')) {
        this.total = this.total + 15;
      } else if ((this.tco.tShirtSizing.SCMNetworkReach === 'Regional')) {
        this.total = this.total + 20;
      } else if ((this.tco.tShirtSizing.SCMNetworkReach === 'Global')) {
        this.total = this.total + 25;
      }

      if (
        this.tco.tShirtSizing.ProductHierarchyComplexity1 > 0 &&
        this.tco.tShirtSizing.ProductHierarchyComplexity1 <= 10
      ) {
        this.total = this.total + 8;
      } else if (
        this.tco.tShirtSizing.ProductHierarchyComplexity1 > 11 &&
        this.tco.tShirtSizing.ProductHierarchyComplexity1 <= 20
      ) {
        this.total = this.total + 12;
      } else if (
        this.tco.tShirtSizing.ProductHierarchyComplexity1 > 21 &&
        this.tco.tShirtSizing.ProductHierarchyComplexity1 <= 30
      ) {
        this.total = this.total + 16;
      } else {
        this.total = this.total + 20;
      }

      if (
        this.tco.tShirtSizing.ProductHierarchyComplexity2 > 0 &&
        this.tco.tShirtSizing.ProductHierarchyComplexity2 <= 10
      ) {
        this.total = this.total + 8;
      } else if (
        this.tco.tShirtSizing.ProductHierarchyComplexity2 > 11 &&
        this.tco.tShirtSizing.ProductHierarchyComplexity2 <= 20
      ) {
        this.total = this.total + 12;
      } else if (
        this.tco.tShirtSizing.ProductHierarchyComplexity2 > 21 &&
        this.tco.tShirtSizing.ProductHierarchyComplexity2 <= 30
      ) {
        this.total = this.total + 16;
      } else {
        this.total = this.total + 20;
      }
      if (
        this.tco.tShirtSizing.NetworkComplexity1 > 0 &&
        this.tco.tShirtSizing.NetworkComplexity1 <= 4
      ) {
        this.total = this.total + 9;
      } else if (
        this.tco.tShirtSizing.NetworkComplexity1 > 5 &&
        this.tco.tShirtSizing.NetworkComplexity1 <= 8
      ) {
        this.total = this.total + 12;
      } else if (
        this.tco.tShirtSizing.NetworkComplexity1 > 9 &&
        this.tco.tShirtSizing.NetworkComplexity1 <= 12
      ) {
        this.total = this.total + 15;
      } else {
        this.total = this.total + 18;
      }

      if (
        this.tco.tShirtSizing.NetworkComplexity2 > 0 &&
        this.tco.tShirtSizing.NetworkComplexity2 <= 10
      ) {
        this.total = this.total + 9;
      } else if (
        this.tco.tShirtSizing.NetworkComplexity2 > 11 &&
        this.tco.tShirtSizing.NetworkComplexity2 <= 15
      ) {
        this.total = this.total + 12;
      } else if (
        this.tco.tShirtSizing.NetworkComplexity2 > 16 &&
        this.tco.tShirtSizing.NetworkComplexity2 <= 25
      ) {
        this.total = this.total + 15;
      } else {
        this.total = this.total + 18;
      }

      if (
        this.tco.tShirtSizing.NetworkComplexity3 > 0 &&
        this.tco.tShirtSizing.NetworkComplexity3 <= 40
      ) {
        this.total = this.total + 9;
      } else if (
        this.tco.tShirtSizing.NetworkComplexity3 > 41 &&
        this.tco.tShirtSizing.NetworkComplexity3 <= 60
      ) {
        this.total = this.total + 12;
      } else if (
        this.tco.tShirtSizing.NetworkComplexity3 > 61 &&
        this.tco.tShirtSizing.NetworkComplexity3 <= 100
      ) {
        this.total = this.total + 15;
      } else {
        this.total = this.total + 18;
      }

      if (
        this.tco.tShirtSizing.NetworkComplexity4 > 0 &&
        this.tco.tShirtSizing.NetworkComplexity4 <= 120
      ) {
        this.total = this.total + 9;
      } else if (
        this.tco.tShirtSizing.NetworkComplexity4 > 121 &&
        this.tco.tShirtSizing.NetworkComplexity4 <= 240
      ) {
        this.total = this.total + 12;
      } else if (
        this.tco.tShirtSizing.NetworkComplexity4 > 241 &&
        this.tco.tShirtSizing.NetworkComplexity4 <= 400
      ) {
        this.total = this.total + 15;
      } else {
        this.total = this.total + 18;
      }

      if (
        this.tco.tShirtSizing.NetworkComplexity5 > 0 &&
        this.tco.tShirtSizing.NetworkComplexity5 <= 1200
      ) {
        this.total = this.total + 9;
      } else if (
        this.tco.tShirtSizing.NetworkComplexity5 > 1201 &&
        this.tco.tShirtSizing.NetworkComplexity5 <= 2400
      ) {
        this.total = this.total + 12;
      } else if (
        this.tco.tShirtSizing.NetworkComplexity5 > 2401 &&
        this.tco.tShirtSizing.NetworkComplexity5 <= 4000
      ) {
        this.total = this.total + 15;
      } else {
        this.total = this.total + 18;
      }

      //  if (this.tco.tShirtSizing.GlobalProcurementComplexity = 'Simple')
      //     {
      //       this.total = this.total + 6;
      //     }
      //     else  if (this.tco.tShirtSizing.GlobalProcurementComplexity = 'Medium')
      //     {
      //       this.total = this.total + 9;
      //     }
      //     else  if (this.tco.tShirtSizing.GlobalProcurementComplexity = 'Complex')
      //     {
      //       this.total = this.total + 12;
      //     }
      //    else
      // {
      //   this.total = this.total + 15;
      // }

      if (
        this.tco.tShirtSizing.PartnersSuppliers1 > 0 &&
        this.tco.tShirtSizing.PartnersSuppliers1 <= 3000
      ) {
        this.total = this.total + 6;
      } else if (
        this.tco.tShirtSizing.PartnersSuppliers1 > 3001 &&
        this.tco.tShirtSizing.PartnersSuppliers1 <= 30000
      ) {
        this.total = this.total + 9;
      } else if (
        this.tco.tShirtSizing.PartnersSuppliers1 > 30001 &&
        this.tco.tShirtSizing.PartnersSuppliers1 <= 60000
      ) {
        this.total = this.total + 12;
      } else {
        this.total = this.total + 15;
      }

      if ((this.tco.tShirtSizing.Customization1 === 0)) { } else if ((this.tco.tShirtSizing.Customization1 === 1)) {
        this.total = this.total + 5;
      } else if ((this.tco.tShirtSizing.Customization1 === 2)) {
        this.total = this.total + 10;
      } else {
        this.total = this.total + 15;
      }

      if (
        this.tco.tShirtSizing.Customization2 > 0 &&
        this.tco.tShirtSizing.Customization2 <= 5
      ) {
        this.total = this.total + 10;
      } else if (
        this.tco.tShirtSizing.Customization2 > 6 &&
        this.tco.tShirtSizing.Customization2 <= 10
      ) {
        this.total = this.total + 15;
      } else if (
        this.tco.tShirtSizing.Customization2 > 11 &&
        this.tco.tShirtSizing.Customization2 <= 20
      ) {
        this.total = this.total + 25;
      } else {
        this.total = this.total + 30;
      }

      if (
        this.tco.tShirtSizing.Interfaces1 > 0 &&
        this.tco.tShirtSizing.Interfaces1 <= 2
      ) {
        this.total = this.total + 6;
      } else if (
        this.tco.tShirtSizing.Interfaces1 > 3 &&
        this.tco.tShirtSizing.Interfaces1 <= 5
      ) {
        this.total = this.total + 9;
      } else if (
        this.tco.tShirtSizing.Interfaces1 > 6 &&
        this.tco.tShirtSizing.Interfaces1 <= 8
      ) {
        this.total = this.total + 12;
      } else {
        this.total = this.total + 15;
      }

      if (
        this.tco.tShirtSizing.Interfaces2 > 0 &&
        this.tco.tShirtSizing.Interfaces2 <= 0
      ) { } else if (
        this.tco.tShirtSizing.Interfaces2 > 1 &&
        this.tco.tShirtSizing.Interfaces2 <= 3
      ) {
        this.total = this.total + 10;
      } else if (
        this.tco.tShirtSizing.Interfaces2 > 4 &&
        this.tco.tShirtSizing.Interfaces2 <= 6
      ) {
        this.total = this.total + 15;
      } else {
        this.total = this.total + 20;
      }

      this.tco.tShirtSizing.Total = this.total;

      if (this.total <= 180) {
        this.tco.tShirtSizing.CurrentType = 'Small';
        this.tco.tShirtSizing.DurationOfImplementation = 'upto 3 months';
        this.tco['standardImplementation'] = this.smallStandardImplementation;
        this.tco['factoryImplementation'] = this.smallFactoryImplementation;

        this.chartData = [{
          data: [this.smallFactoryImplementation],
          label: 'Factory Implementation',
          fontColor: 'white'
        },
        {
          data: [this.smallStandardImplementation],
          label: 'Standard Implementation',
          fontColor: 'white'
        }
        ];

      } else if (this.total > 181 && this.total <= 230) {
        this.tco.tShirtSizing.CurrentType = 'Medium';
        this.tco.tShirtSizing.DurationOfImplementation = '4 - 6 months';
        this.tco['standardImplementation'] = this.mediumStandardImplementation;
        this.tco['factoryImplementation'] = this.mediumFactoryImplementation;

        this.chartData = [{
          data: [this.mediumFactoryImplementation],
          label: 'Factory Implementation',
          fontColor: 'white'
        },
        {
          data: [this.mediumStandardImplementation],
          label: 'Standard Implementation',
          fontColor: 'white'
        }
        ];

      } else if (this.total >= 231 && this.total <= 280) {
        this.tco.tShirtSizing.CurrentType = 'Large';
        this.tco.tShirtSizing.DurationOfImplementation = '7 - 9 months';
        this.tco['standardImplementation'] = this.largeStandardImplementation;
        this.tco['factoryImplementation'] = this.largeFactoryImplementation;

        this.chartData = [{
          data: [this.largeFactoryImplementation],
          label: 'Factory Implementation',
          fontColor: 'white'
        },
        {
          data: [this.largeStandardImplementation],
          label: 'Standard Implementation',
          fontColor: 'white'
        }
        ];
      } else if (this.total >= 281) {
        this.tco.tShirtSizing.CurrentType = 'Extra Large';
        this.tco.tShirtSizing.DurationOfImplementation = '9 - 12 months';
        this.tco['standardImplementation'] = this.extraLargeStandardImplementation;
        this.tco['factoryImplementation'] = this.extraLargeFactoryImplementation;

        this.chartData = [{
          data: [this.extraLargeFactoryImplementation],
          label: 'Factory Implementation',
          fontColor: 'white'
        },
        {
          data: [this.extraLargeStandardImplementation],
          label: 'Standard Implementation',
          fontColor: 'white'
        }
        ];

      }

      console.log('Chart extra large ' + this.extraLargeStandardImplementation)
      console.log(this.tco.tShirtSizing);
      console.log(this.tco.tShirtSizing.DurationOfImplementation);
    }

  }

  // Starts here
  calculateWMSShirtSizing() {
    this.total = 0;
    this.isGraphVisible = true;
    if ((this.tco.tShirtSizing.Version === 'n - 1 (Small)')) {
      this.total = this.total + 15;
    } else if ((this.tco.tShirtSizing.Version === 'n - 2 to 4 (Medium)')) {
      this.total = this.total + 20;
    } else if ((this.tco.tShirtSizing.Version === 'n - 4 to 6 (Large)')) {
      this.total = this.total + 25;
    } else if (
      (this.tco.tShirtSizing.Version === 'n-6 and lesser(Extra Large)')
    ) {
      this.total = this.total + 30;
    }

    if ((this.tco.tShirtSizing.LinesofBusiness === 'B2B')) {
      this.total = this.total + 15;
    } else if ((this.tco.tShirtSizing.LinesofBusiness === 'Retail')) {
      this.total = this.total + 20;
    } else if ((this.tco.tShirtSizing.LinesofBusiness === 'Direct')) {
      this.total = this.total + 25;
    }



    if ((this.tco.tShirtSizing.SCMNetworkReach === 'Country')) {
      this.total = this.total + 15;
    } else if ((this.tco.tShirtSizing.SCMNetworkReach === 'Regional')) {
      this.total = this.total + 20;
    } else if ((this.tco.tShirtSizing.SCMNetworkReach === 'Global')) {
      this.total = this.total + 25;
    }

    if ((this.tco.tShirtSizingWMS.NoOfDockDoors > 0 && this.tco.tShirtSizingWMS.NoOfDockDoors <= 3)) {
      this.total = this.total + 8;
    } else if ((this.tco.tShirtSizingWMS.NoOfDockDoors > 3 && this.tco.tShirtSizingWMS.NoOfDockDoors <= 5)) {
      this.total = this.total + 12;
    } else if ((this.tco.tShirtSizingWMS.NoOfDockDoors > 5 && this.tco.tShirtSizingWMS.NoOfDockDoors <= 10)) {
      this.total = this.total + 16;
    } else if ((this.tco.tShirtSizingWMS.NoOfDockDoors > 10)) {
      this.total = this.total + 20;
    }

    if ((this.tco.tShirtSizingWMS.AverageTruckPerDay > 0 && this.tco.tShirtSizingWMS.AverageTruckPerDay <= 8)) {
      this.total = this.total + 8;
    } else if ((this.tco.tShirtSizingWMS.AverageTruckPerDay > 8 && this.tco.tShirtSizingWMS.AverageTruckPerDay <= 12)) {
      this.total = this.total + 12;
    } else if ((this.tco.tShirtSizingWMS.AverageTruckPerDay > 12 && this.tco.tShirtSizingWMS.AverageTruckPerDay <= 15)) {
      this.total = this.total + 16;
    } else if ((this.tco.tShirtSizingWMS.AverageTruckPerDay > 15)) {
      this.total = this.total + 20;
    }

    if ((this.tco.tShirtSizingWMS.NoOfOrdersPerDay > 0 && this.tco.tShirtSizingWMS.NoOfOrdersPerDay <= 30000)) {
      this.total = this.total + 8;
    } else if ((this.tco.tShirtSizingWMS.NoOfOrdersPerDay > 30000 && this.tco.tShirtSizingWMS.NoOfOrdersPerDay <= 100000)) {
      this.total = this.total + 12;
    } else if ((this.tco.tShirtSizingWMS.NoOfOrdersPerDay > 100000 && this.tco.tShirtSizingWMS.NoOfOrdersPerDay <= 150000)) {
      this.total = this.total + 16;
    } else if ((this.tco.tShirtSizingWMS.NoOfOrdersPerDay > 150000)) {
      this.total = this.total + 20;
    }

    // if (
    //   this.tco.tShirtSizingWMS.NoOfProductHierarchy > 0 &&
    //   this.tco.tShirtSizingWMS.NoOfProductHierarchy <= 10
    // ) {
    //   this.total = this.total + 8;
    // } else if (
    //   this.tco.tShirtSizingWMS.NoOfProductHierarchy > 11 &&
    //   this.tco.tShirtSizingWMS.NoOfProductHierarchy <= 20
    // ) {
    //   this.total = this.total + 12;
    // } else if (
    //   this.tco.tShirtSizingWMS.NoOfProductHierarchy > 21 &&
    //   this.tco.tShirtSizingWMS.NoOfProductHierarchy <= 30
    // ) {
    //   this.total = this.total + 16;
    // } else {
    //   this.total = this.total + 20;
    // }

    if (
      this.tco.tShirtSizingWMS.NumberofPalletssPerOrderLine > 0 &&
      this.tco.tShirtSizingWMS.NumberofPalletssPerOrderLine <= 20
    ) {
      this.total = this.total + 8;
    } else if (
      this.tco.tShirtSizingWMS.NumberofPalletssPerOrderLine > 20 &&
      this.tco.tShirtSizingWMS.NumberofPalletssPerOrderLine <= 22
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizingWMS.NumberofPalletssPerOrderLine > 22 &&
      this.tco.tShirtSizingWMS.NumberofPalletssPerOrderLine <= 20000
    ) {
      this.total = this.total + 16;
    } else {
      this.total = this.total + 20;
    }

    if (
      this.tco.tShirtSizingWMS.NumberofManufacturingUnits > 0 &&
      this.tco.tShirtSizingWMS.NumberofManufacturingUnits <= 4
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizingWMS.NumberofManufacturingUnits > 5 &&
      this.tco.tShirtSizingWMS.NumberofManufacturingUnits <= 8
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizingWMS.NumberofManufacturingUnits > 9 &&
      this.tco.tShirtSizingWMS.NumberofManufacturingUnits <= 12
    ) {
      this.total = this.total + 15;
    } else {
      this.total = this.total + 18;
    }

    if (
      this.tco.tShirtSizingWMS.NumberofWarehouses > 0 &&
      this.tco.tShirtSizingWMS.NumberofWarehouses <= 10
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizingWMS.NumberofWarehouses > 11 &&
      this.tco.tShirtSizingWMS.NumberofWarehouses <= 15
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizingWMS.NumberofWarehouses > 16 &&
      this.tco.tShirtSizingWMS.NumberofWarehouses <= 25
    ) {
      this.total = this.total + 15;
    } else {
      this.total = this.total + 18;
    }

    if (
      this.tco.tShirtSizingWMS.NumberofDCsFCs > 0 &&
      this.tco.tShirtSizingWMS.NumberofDCsFCs <= 40
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizingWMS.NumberofDCsFCs > 41 &&
      this.tco.tShirtSizingWMS.NumberofDCsFCs <= 60
    ) {
      this.total = this.total + 12;
    } else if (
      this.tco.tShirtSizingWMS.NumberofDCsFCs > 61 &&
      this.tco.tShirtSizingWMS.NumberofDCsFCs <= 100
    ) {
      this.total = this.total + 15;
    } else {
      this.total = this.total + 18;
    }

    if (this.tco.tShirtSizingWMS.GlobalProcurementComplexity === 'Simple') {
      this.total = this.total + 6;
    } else if (this.tco.tShirtSizingWMS.GlobalProcurementComplexity === 'Medium') {
      this.total = this.total + 9;
    } else if (this.tco.tShirtSizingWMS.GlobalProcurementComplexity === 'Complex') {
      this.total = this.total + 12;
    } else {
      this.total = this.total + 15;
    }

    if (
      this.tco.tShirtSizingWMS.GreenLogistics === 'Haz MaterialMgmt'
    ) {
      this.total = this.total + 5;
    } else if (
      this.tco.tShirtSizingWMS.GreenLogistics === 'Control Substances (Pharma)'
    ) {
      this.total = this.total + 4;
    } else if (
      this.tco.tShirtSizingWMS.GreenLogistics === 'BioWaste'
    ) {
      this.total = this.total + 4;
    }


    if (
      this.tco.tShirtSizingWMS.DiverseSupplierLocation === 'Yes'
    ) {
      this.total = this.total + 5;
    } else if (
      this.tco.tShirtSizingWMS.DiverseSupplierLocation === 'No'
    ) {
      this.total = this.total + 4;
    }

    if ((this.tco.tShirtSizingWMS.ApproxNumberofProductMods === 0)) { } else if ((this.tco.tShirtSizingWMS.ApproxNumberofProductMods === 1)) {
      this.total = this.total + 5;
    } else if ((this.tco.tShirtSizingWMS.ApproxNumberofProductMods === 2)) {
      this.total = this.total + 10;
    } else {
      this.total = this.total + 15;
    }

    if (
      this.tco.tShirtSizingWMS.ApproxNumberofCustomLogic > 0 &&
      this.tco.tShirtSizingWMS.ApproxNumberofCustomLogic <= 5
    ) {
      this.total = this.total + 10;
    } else if (
      this.tco.tShirtSizingWMS.ApproxNumberofCustomLogic > 6 &&
      this.tco.tShirtSizingWMS.ApproxNumberofCustomLogic <= 10
    ) {
      this.total = this.total + 15;
    } else if (
      this.tco.tShirtSizingWMS.ApproxNumberofCustomLogic > 11 &&
      this.tco.tShirtSizingWMS.ApproxNumberofCustomLogic <= 20
    ) {
      this.total = this.total + 25;
    } else {
      this.total = this.total + 30;
    }

    if (
      this.tco.tShirtSizingWMS.NoofStandardInterfaces > 0 &&
      this.tco.tShirtSizingWMS.NoofStandardInterfaces <= 2
    ) {
      this.total = this.total + 6;
    } else if (
      this.tco.tShirtSizingWMS.NoofStandardInterfaces > 3 &&
      this.tco.tShirtSizingWMS.NoofStandardInterfaces <= 5
    ) {
      this.total = this.total + 9;
    } else if (
      this.tco.tShirtSizingWMS.NoofStandardInterfaces > 6 &&
      this.tco.tShirtSizingWMS.NoofStandardInterfaces <= 8
    ) {
      this.total = this.total + 12;
    } else {
      this.total = this.total + 15;
    }

    if (
      this.tco.tShirtSizingWMS.NumberofNonStandardInterfaces > 0 &&
      this.tco.tShirtSizingWMS.NumberofNonStandardInterfaces <= 0
    ) { } else if (
      this.tco.tShirtSizingWMS.NumberofNonStandardInterfaces > 1 &&
      this.tco.tShirtSizingWMS.NumberofNonStandardInterfaces <= 3
    ) {
      this.total = this.total + 10;
    } else if (
      this.tco.tShirtSizingWMS.NumberofNonStandardInterfaces > 4 &&
      this.tco.tShirtSizingWMS.NumberofNonStandardInterfaces <= 6
    ) {
      this.total = this.total + 15;
    } else {
      this.total = this.total + 20;
    }

    this.tco.tShirtSizing.Total = this.total;

    if (this.total <= 200) {
      this.tco.tShirtSizing.CurrentType = 'Small';
      this.tco.tShirtSizing.DurationOfImplementation = 'upto 3 months';
      this.tco['standardImplementation'] = this.smallStandardImplementation;
      this.tco['factoryImplementation'] = this.smallFactoryImplementation;

      this.barChartData = [
        { data: [this.smallFactoryImplementation], label: 'Factory Implementation', stack: 'A' },
        { data: [this.smallAdditionalFactoryImplementation], label: 'Additonal Factory Implementation', stack: 'A' },
        { data: [this.smallStandardImplementation], label: 'Medium standard implementation', stack: 'B' },
        { data: [this.smallAdditionalStandardImplementation], label: 'Medium Addtional standard implementation', stack: 'B' },
      ];

      // this.chartData = [{
      //   data: [this.smallFactoryImplementation],
      //   label: 'Factory Implementation',
      //   fontColor: 'white'
      // },
      // {
      //   data: [this.smallStandardImplementation],
      //   label: 'Standard Implementation',
      //   fontColor: 'white'
      // },
      // {
      //   data: [this.smallAdditionalFactoryImplementation],
      //   label: 'Rest Site factory Implementation',
      //   fontColor: 'white'
      // }
      // ];

    } else if (this.total > 201 && this.total <= 250) {
      this.tco.tShirtSizing.CurrentType = 'Medium';
      this.tco.tShirtSizing.DurationOfImplementation = '4 - 6 months';
      this.tco['standardImplementation'] = this.mediumStandardImplementation;
      this.tco['factoryImplementation'] = this.mediumFactoryImplementation;

      this.barChartData = [
        { data: [this.mediumFactoryImplementation], label: 'Factory Implementation', stack: 'A' },
        { data: [this.mediumAdditionalFactoryImplementation], label: 'Additonal Factory Implementation', stack: 'A' },
        { data: [this.mediumStandardImplementation], label: 'Medium standard implementation', stack: 'B' },
        { data: [this.mediumAdditionalStandardImplementation], label: 'Medium Addtional standard implementation', stack: 'B' },
      ];

      // this.chartData = [{
      //   data: [this.mediumFactoryImplementation],
      //   label: 'Factory Implementation',
      //   fontColor: 'white'
      // },
      // {
      //   data: [this.mediumStandardImplementation],
      //   label: 'Standard Implementation',
      //   fontColor: 'white'
      // },
      // {
      //   data: [this.mediumAdditionalFactoryImplementation],
      //   label: 'Addtional site Factory Implementation',
      //   fontColor: 'white'
      // }
      // ];

    } else if (this.total >= 251 && this.total <= 300) {
      this.tco.tShirtSizing.CurrentType = 'Large';
      this.tco.tShirtSizing.DurationOfImplementation = '7 - 9 months';
      this.tco['standardImplementation'] = this.largeStandardImplementation;
      this.tco['factoryImplementation'] = this.largeFactoryImplementation;

      
      this.barChartData = [
        { data: [this.largeFactoryImplementation], label: 'Factory Implementation', stack: 'A' },
        { data: [this.largeAdditionalFactoryImplementation], label: 'Additonal Factory Implementation', stack: 'A' },
        { data: [this.largeStandardImplementation], label: 'Medium standard implementation', stack: 'B' },
        { data: [this.largeAdditionalStandardImplementation], label: 'Medium Addtional standard implementation', stack: 'B' },
      ];

      // this.chartData = [{
      //   data: [this.largeFactoryImplementation],
      //   label: 'Factory Implementation',
      //   fontColor: 'white'
      // },
      // {
      //   data: [this.largeStandardImplementation],
      //   label: 'Standard Implementation',
      //   fontColor: 'white'
      // },
      // {
      //   data: [this.largeAdditionalFactoryImplementation],
      //   label: 'Rest site Factory Implementation',
      //   fontColor: 'white'
      // }
      // ];
    } else if (this.total >= 301) {
      this.tco.tShirtSizing.CurrentType = 'Extra Large';
      this.tco.tShirtSizing.DurationOfImplementation = '9 - 12 months';
      this.tco['standardImplementation'] = this.extraLargeStandardImplementation;
      this.tco['factoryImplementation'] = this.extraLargeFactoryImplementation;

      this.barChartData = [
        { data: [this.extraLargeFactoryImplementation], label: 'Factory Implementation', stack: 'A' },
        { data: [this.extraLargeAdditionalFactoryImplementation], label: 'Additonal Factory Implementation', stack: 'A' },
        { data: [this.extraLargeStandardImplementation], label: 'Medium standard implementation', stack: 'B' },
        { data: [this.extraLargeAdditionalStandardImplementation], label: 'Medium Addtional standard implementation', stack: 'B' },
      ];


      // this.chartData = [{
      //   data: [this.extraLargeFactoryImplementation],
      //   label: 'Factory Implementation',
      //   fontColor: 'white'
      // },
      // {
      //   data: [this.extraLargeStandardImplementation],
      //   label: 'Standard Implementation',
      //   fontColor: 'white'
      // },
      // {
      //   data: [this.extraLargeAdditionalFactoryImplementation],
      //   label: 'Rest site Factory Implementation',
      //   fontColor: 'white'
      // }
      // ];
    }
    this.isGraphVisible = true;
    console.log(this.tco.tShirtSizing);
    console.log(this.tco.tShirtSizing.DurationOfImplementation);
  }
  // Endss here
}
