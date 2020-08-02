import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../shared/services/local.service';
import { TCO } from '../../Model/TCO';
import { TCOService } from '../../shared/services/tco.service';
import { Observable } from 'rxjs';

import * as ResoucesFTEPercentageJson from '../../Model/Data/analysis.json';
import * as FinalDataJson from '../../Model/Data/FinalData.json';
import * as ResoucesFTECostJson from '../../Model/Data/ftecost.json';
import * as WMSJson from '../../Model/Data/wms.json';
import * as LocationDataJSon from '../../Model/Data/LocationData.json';
import * as LocationCostPercentageJSon from '../../Model/Data/LoadedCostPercentage.json';
import * as FirstYearCalculationJson from '../../Model/Data/FirstYearCalculation.json';

import { FTEEmployeeReduction } from '../../Model/POCO/FTEEmployeeReduction';
import { FTECost } from '../../Model/POCO/FTECost';
import { WMSErp } from '../../Model/POCO/wmserp';
import { LocationData } from '../../Model/POCO/LocationData';
import { LoadedCostPercentage } from '../../Model/POCO/LoadedCostPercentage';
import { FinalData } from '../../Model/POCO/FinalData';
import { FirstYearCalculation } from '../../Model/POCO/FirstYearCalculation';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {

  resoucesFTEPercentage: FTEEmployeeReduction[] = (ResoucesFTEPercentageJson as any).default;
  resoucesFTECost: FTECost[] = (ResoucesFTECostJson as any).default;
  wms: WMSErp[] = (WMSJson as any).default;
  locationData: LocationData[] = (LocationDataJSon as any).default;
  loadedCostPercentage: LoadedCostPercentage[] = (LocationCostPercentageJSon as any).default;
  finalDataValue: FinalData[] = (FinalDataJson as any).default;
  firstYearCalculationValue: FirstYearCalculation[] = (FirstYearCalculationJson as any).default;

  ImplementationCost: 0;
  ImplementationCostFor1Year = 0;
  SupportFTECloudCost = 0;

  totalhardwarecost = 0;
  wmsSoftwareFTECost: number;
  cloudSoftwareCost: number;
  currentDate = new Date();

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
        }
      }]
    }
  };

  chartData = [{
    data: [0, 0, 0, 0, 0],
    label: 'WMS',
    fontColor: 'white'
  },
  {
    data: [0, 0, 0, 0, 0],
    label: 'Cloud',
    fontColor: 'white'
  }
  ];


  testcolumnDefs = [
    { headerName: 'description', field: 'description' },
    { headerName: 'tier1', field: 'tier1' },
    { headerName: 'tier2', field: 'tier2' },
    { headerName: 'tier3', field: 'tier3' },
  ];

  firstYearDatacolumnDefs = [
    { headerName: 'Description', field: 'description' },
    { headerName: 'wmsyear1', field: 'wmsyear1' },
    { headerName: 'cloudyear1', field: 'cloudyear1' },
  ];

  finalDatacolumnDefs = [
    { headerName: 'Description', field: 'description' },
    { headerName: 'wmsyear1', field: 'wmsyear1' },
    { headerName: 'cloudyear1', field: 'cloudyear1' },

    { headerName: 'wmsyear2', field: 'wmsyear2' },
    { headerName: 'cloudyear2', field: 'cloudyear2' },

    { headerName: 'wmsyear3', field: 'wmsyear3' },
    { headerName: 'cloudyear3', field: 'cloudyear3' },

    { headerName: 'wmsyear4', field: 'wmsyear4' },
    { headerName: 'cloudyear4', field: 'cloudyear4' },

    { headerName: 'wmsyear5', field: 'wmsyear5' },
    { headerName: 'cloudyear5', field: 'cloudyear5' },

  ];

  tco: TCO;
  constructor(private route: Router, private local: LocalService, private tcoservice: TCOService) {

  }

  ngOnInit() {
    this.tco = this.tcoservice.getTCO();

    this.calculateFiveYearData();

    this.calculateFirstYearData();

    this.calculateGraph();

    // this.calculateDiff(this.tco.clientInput.ApplicationUpgradeDate1, this.tco.clientInput.ApplicationUpgradeDate2);

  }

  // calculateDiff(date1, date2) {
  //   let date = new Date(date1);
  //   let currentDate = new Date(date2);

  //   let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);

  //   console.log(date1);
  //   console.log(date2);
  //   console.log('Week : ' + days);
  //   return days / 7;
  // }

  //f11
  calculateTShirtCalculate() {
    if (this.tco.tShirtSizingWMS.ShirtSize === 'Large') {
      console.log('calculateTShirtCalculate : 0.30');
      return 0.30;
    } else if (this.tco.tShirtSizingWMS.ShirtSize === 'Medium') {
      console.log('calculateTShirtCalculate : 0.05');
      return 0.05;
    } else {
      console.log('calculateTShirtCalculate : 0');
      return 0;
    }
  }

  //f15
  calculateMaximumDate() {


    console.log('Upgrade Date1 : ' + this.tco.clientInput.ApplicationUpgradeDate1);
    console.log('Upgrade Date2 : ' + this.tco.clientInput.ApplicationUpgradeDate2);

    if (this.tco.clientInput.ApplicationUpgradeDate1 === null && this.tco.clientInput.ApplicationUpgradeDate2 === null) {
      if (this.tco.clientInput.ApplicationUpgradeDate1 > this.tco.clientInput.ApplicationUpgradeDate2) {
        console.log('calculateMaximumDate : ' + this.tco.clientInput.ApplicationUpgradeDate1);
        return this.tco.clientInput.ApplicationUpgradeDate1;
      } else {
        console.log('calculateMaximumDate : ' + this.tco.clientInput.ApplicationUpgradeDate2);
        return this.tco.clientInput.ApplicationUpgradeDate2;
      }
    } else {
      console.log('calculateMaximumDate : ' + new Date());
      return new Date();
    }

    // else if (this.tco.clientInput.ApplicationUpgradeDate1) {
    //   console.log('calculateMaximumDate : ' + this.tco.clientInput.ApplicationUpgradeDate1);
    //   return this.tco.clientInput.ApplicationUpgradeDate1;
    // } else if (this.tco.clientInput.ApplicationUpgradeDate2) {
    //   console.log('calculateMaximumDate : ' + this.tco.clientInput.ApplicationUpgradeDate2);
    //   return this.tco.clientInput.ApplicationUpgradeDate2;
    // }


  }
  //f16
  calculateMinimumDate() {
    console.log('calculateMinimumDate');

    if (this.tco.clientInput.ApplicationUpgradeDate1 === null && this.tco.clientInput.ApplicationUpgradeDate2 === null) {
      if (this.tco.clientInput.ApplicationUpgradeDate1 < this.tco.clientInput.ApplicationUpgradeDate2) {
        console.log('calculateMinimumDate : ' + this.tco.clientInput.ApplicationUpgradeDate1);
        return this.tco.clientInput.ApplicationUpgradeDate1;
      } else {
        console.log('calculateMinimumDate : ' + this.tco.clientInput.ApplicationUpgradeDate2);
        return this.tco.clientInput.ApplicationUpgradeDate2;
      }
    } else if (this.tco.clientInput.ApplicationUpgradeDate1) {
      console.log('calculateMinimumDate : ' + this.tco.clientInput.ApplicationUpgradeDate1);
      return this.tco.clientInput.ApplicationUpgradeDate1;
    } else if (this.tco.clientInput.ApplicationUpgradeDate2) {
      console.log('calculateMinimumDate : ' + this.tco.clientInput.ApplicationUpgradeDate2);
      return this.tco.clientInput.ApplicationUpgradeDate2;
    } else {
      console.log('calculateMinimumDate : ' + new Date());
      return new Date();
    }
  }

  //f17
  calculatlastUpgradeFrequency() {
    console.log('calculatlastUpgradeFrequency : ' + this.convertToInt((this.convertToInt(this.currentDate.getFullYear()) -
      this.convertToInt(this.calculateMinimumDate().getFullYear())) * 12) +
      (this.convertToInt(this.currentDate.getMonth()) -
        this.convertToInt(this.calculateMaximumDate().getMonth())));

    return this.convertToInt((this.convertToInt(this.currentDate.getFullYear()) -
      this.convertToInt(this.calculateMinimumDate().getFullYear())) * 12) +
      (this.convertToInt(this.currentDate.getMonth()) -
        this.convertToInt(this.calculateMaximumDate().getMonth()));

  }

  //f18
  calculateCurrentUpgradeFrequency() {
    console.log('calculateCurrentUpgradeFrequency : ' + this.convertToInt((this.convertToInt(this.currentDate.getFullYear()) -
      this.convertToInt(this.calculateMaximumDate().getFullYear())) * 12) +
      (this.convertToInt(this.currentDate.getMonth()) -
        this.convertToInt(this.calculateMinimumDate().getMonth())));

    return this.convertToInt((this.convertToInt(this.currentDate.getFullYear()) -
      this.convertToInt(this.calculateMaximumDate().getFullYear())) * 12) +
      (this.convertToInt(this.currentDate.getMonth()) -
        this.convertToInt(this.calculateMinimumDate().getMonth()));

  }

  convertToMillionSeperator(val: number) {
    return val.toLocaleString();
  }

  calculateFirstYearTotal() {
    return this.convertToInt(this.calculateSoftwareWMSSupportCostPerYear()) + this.convertToInt(this.calculateApplicationUpgradeCost()) +
      this.convertToInt(this.calculateHardwareWMSCost()) + this.convertToInt(this.calculateWMSSoftwareFTE());
  }
  calculateFirstYearData() {
    this.firstYearCalculationValue[0].wmsyear1 = 0;
    this.firstYearCalculationValue[0].cloudyear1 = this.calculateSofwareCostPerYear();

    this.firstYearCalculationValue[1].wmsyear1 = this.calculateSoftwareWMSSupportCostPerYear();
    this.firstYearCalculationValue[1].cloudyear1 = this.calculateSoftwareCloudSupportCostPerYear();

    this.firstYearCalculationValue[2].wmsyear1 = 0;
    this.firstYearCalculationValue[2].cloudyear1 = this.calculateLegacySoftwareCloudPerYear();

    this.firstYearCalculationValue[3].wmsyear1 = 0;
    this.firstYearCalculationValue[3].cloudyear1 = this.calculateImplementationCost1Year();

    this.firstYearCalculationValue[4].wmsyear1 = this.calculateApplicationUpgradeCost();
    this.firstYearCalculationValue[4].cloudyear1 = 0;

    this.firstYearCalculationValue[5].wmsyear1 = this.calculateHardwareWMSCost();
    this.firstYearCalculationValue[5].cloudyear1 = this.calculateHardwareCloudCost();

    this.firstYearCalculationValue[6].wmsyear1 = this.calculateWMSSoftwareFTE();
    this.firstYearCalculationValue[6].cloudyear1 = this.calculateSupportFTECostCloudYear1();

    this.firstYearCalculationValue[7].wmsyear1 = 0;
    this.firstYearCalculationValue[7].cloudyear1 = this.calculateLegacySupportCloudPerYear();

    this.firstYearCalculationValue[8].wmsyear1 = this.calculateWmsYear1(); //h16
    this.firstYearCalculationValue[8].cloudyear1 = this.calculatecloudyear1(); //i16

    this.firstYearCalculationValue[9].wmsyear1 = this.finalDataValue[9].wmsyear5;
    this.firstYearCalculationValue[9].cloudyear1 = this.finalDataValue[9].cloudyear5;

    this.firstYearCalculationValue[10].wmsyear1 = 0;
    this.firstYearCalculationValue[10].cloudyear1 = this.finalDataValue[10].cloudyear5;

  }

  buildCurrencySeparator() {
    return 'Test';
  }

  calculate3YearSavingPercentage() {
    return 100 - ((this.finalDataValue[8].cloudyear3 / this.finalDataValue[8].wmsyear3) * 100)
  }

  calculate5YearSavingPercentage() {
    return 100 - ((this.finalDataValue[8].cloudyear5 / this.finalDataValue[8].wmsyear5) * 100)
  }

  calculateFiveYearData() {
    this.finalDataValue[0].wmsyear1 = 0;
    this.finalDataValue[0].cloudyear1 = this.calculateSofwareCostPerYear();
    this.finalDataValue[0].wmsyear2 = 0;
    this.finalDataValue[0].cloudyear2 = this.calculateSofwareCostPerYear();
    this.finalDataValue[0].wmsyear3 = 0;
    this.finalDataValue[0].cloudyear3 = this.calculateSofwareCostPerYear();
    this.finalDataValue[0].wmsyear4 = 0;
    this.finalDataValue[0].cloudyear4 = this.calculateSofwareCostPerYear();
    this.finalDataValue[0].wmsyear5 = 0;
    this.finalDataValue[0].cloudyear5 = this.calculateSofwareCostPerYear();

    this.finalDataValue[1].wmsyear1 = this.calculateSoftwareWMSSupportCostPerYear();
    this.finalDataValue[1].cloudyear1 = this.calculateSoftwareCloudSupportCostPerYear();
    this.finalDataValue[1].wmsyear2 = this.calculateSoftwareWMSSupportCostPerYear();
    this.finalDataValue[1].cloudyear2 = this.calculateSoftwareCloudSupportCostPerYear();
    this.finalDataValue[1].wmsyear3 = this.calculateSoftwareWMSSupportCostPerYear();
    this.finalDataValue[1].cloudyear3 = this.calculateSoftwareCloudSupportCostPerYear();
    this.finalDataValue[1].wmsyear4 = this.calculateSoftwareWMSSupportCostPerYear();
    this.finalDataValue[1].cloudyear4 = this.calculateSoftwareCloudSupportCostPerYear();
    this.finalDataValue[1].wmsyear5 = this.calculateSoftwareWMSSupportCostPerYear();
    this.finalDataValue[1].cloudyear5 = this.calculateSoftwareCloudSupportCostPerYear();

    this.finalDataValue[2].wmsyear1 = 0;
    this.finalDataValue[2].cloudyear1 = this.calculateLegacySoftwareCloudPerYear();
    this.finalDataValue[2].wmsyear2 = 0;
    this.finalDataValue[2].cloudyear2 = this.calculateLegacySoftwareCloudPerYear();
    this.finalDataValue[2].wmsyear3 = 0;
    this.finalDataValue[2].cloudyear3 = this.calculateLegacySoftwareCloudPerYear();
    this.finalDataValue[2].wmsyear4 = 0;
    this.finalDataValue[2].cloudyear4 = this.calculateLegacySoftwareCloudPerYear();
    this.finalDataValue[2].wmsyear5 = 0;
    this.finalDataValue[2].cloudyear5 = this.calculateLegacySoftwareCloudPerYear();

    this.finalDataValue[3].wmsyear1 = 0;
    this.finalDataValue[3].cloudyear1 = this.calculateImplementationCost1Year();
    this.finalDataValue[3].wmsyear2 = 0;
    this.finalDataValue[3].cloudyear2 = this.calculateImplementationCost2Year();
    this.finalDataValue[3].wmsyear3 = 0;
    this.finalDataValue[3].cloudyear3 = this.calculateImplementationCost3Year();
    this.finalDataValue[3].wmsyear4 = 0;
    this.finalDataValue[3].cloudyear4 = 0;
    this.finalDataValue[3].wmsyear5 = 0;
    this.finalDataValue[3].cloudyear5 = 0;

    this.finalDataValue[4].wmsyear1 = this.calculateApplicationUpgradeCost();
    this.finalDataValue[4].cloudyear1 = 0;
    this.finalDataValue[4].wmsyear2 = this.calculateApplicationUpgradeCost();
    this.finalDataValue[4].cloudyear2 = 0;
    this.finalDataValue[4].wmsyear3 = this.calculateApplicationUpgradeCost();
    this.finalDataValue[4].cloudyear3 = 0;
    this.finalDataValue[4].wmsyear4 = this.calculateApplicationUpgradeCost();
    this.finalDataValue[4].cloudyear4 = 0;
    this.finalDataValue[4].wmsyear5 = this.calculateApplicationUpgradeCost();
    this.finalDataValue[4].cloudyear5 = 0;

    this.finalDataValue[5].wmsyear1 = this.calculateHardwareWMSCost();
    this.finalDataValue[5].cloudyear1 = this.calculateHardwareCloudCost();
    this.finalDataValue[5].wmsyear2 = this.calculateHardwareWMSCost();
    this.finalDataValue[5].cloudyear2 = this.calculateHardwareCloudCost();
    this.finalDataValue[5].wmsyear3 = this.calculateHardwareWMSCost();
    this.finalDataValue[5].cloudyear3 = this.calculateHardwareCloudCost();
    this.finalDataValue[5].wmsyear4 = this.calculateHardwareWMSCost();
    this.finalDataValue[5].cloudyear4 = this.calculateHardwareCloudCost();
    this.finalDataValue[5].wmsyear5 = this.calculateHardwareWMSCost();
    this.finalDataValue[5].cloudyear5 = this.calculateHardwareCloudCost();

    this.finalDataValue[6].wmsyear1 = this.calculateWMSSoftwareFTE();
    this.finalDataValue[6].cloudyear1 = this.calculateSupportFTECostCloudYear1();
    this.finalDataValue[6].wmsyear2 = this.calculateWMSSoftwareFTE();
    this.finalDataValue[6].cloudyear2 = this.calculateSupportFTECostCloudYear2();
    this.finalDataValue[6].wmsyear3 = this.calculateWMSSoftwareFTE();
    this.finalDataValue[6].cloudyear3 = this.calculateSupportFTECostCloudYear3();
    this.finalDataValue[6].wmsyear4 = this.calculateWMSSoftwareFTE();
    this.finalDataValue[6].cloudyear4 = this.calculateSupportFTECostCloudYear4();
    this.finalDataValue[6].wmsyear5 = this.calculateWMSSoftwareFTE();
    this.finalDataValue[6].cloudyear5 = this.calculateSupportFTECostCloudYear5();

    this.finalDataValue[7].wmsyear1 = 0;
    this.finalDataValue[7].cloudyear1 = this.calculateLegacySupportCloudPerYear();
    this.finalDataValue[7].wmsyear2 = 0;
    this.finalDataValue[7].cloudyear2 = this.calculateLegacySupportCloudPerYear();
    this.finalDataValue[7].wmsyear3 = 0;
    this.finalDataValue[7].cloudyear3 = this.calculateLegacySupportCloudPerYear();
    this.finalDataValue[7].wmsyear4 = 0;
    this.finalDataValue[7].cloudyear4 = this.calculateLegacySupportCloudPerYear();
    this.finalDataValue[7].wmsyear5 = 0;
    this.finalDataValue[7].cloudyear5 = this.calculateLegacySupportCloudPerYear();

    this.finalDataValue[8].wmsyear1 = this.calculateWmsYear1(); //h16
    this.finalDataValue[8].cloudyear1 = this.calculatecloudyear1(); //i16
    this.finalDataValue[8].wmsyear2 = this.calculateWmsYear2(); //j16
    this.finalDataValue[8].cloudyear2 = this.calculatecloudyear2(); //k16
    this.finalDataValue[8].wmsyear3 = this.calculateWmsYear3(); // l16
    this.finalDataValue[8].cloudyear3 = this.calculatecloudyear3(); //m16
    this.finalDataValue[8].wmsyear4 = this.calculateWmsYear4(); //n16
    this.finalDataValue[8].cloudyear4 = this.calculatecloudyear4(); //o16
    this.finalDataValue[8].wmsyear5 = this.calculateWmsYear5(); //p16
    this.finalDataValue[8].cloudyear5 = this.calculatecloudyear5(); //q16

    this.finalDataValue[9].wmsyear1 = this.finalDataValue[8].wmsyear1;
    this.finalDataValue[9].cloudyear1 = this.finalDataValue[8].cloudyear1;
    this.finalDataValue[9].wmsyear2 = this.calculateWmsYear1() + this.calculateWmsYear2();
    this.finalDataValue[9].cloudyear2 = this.calculatecloudyear2() + this.calculatecloudyear1();
    this.finalDataValue[9].wmsyear3 = this.calculateWmsYear3() + this.finalDataValue[9].wmsyear2;
    this.finalDataValue[9].cloudyear3 = this.calculatecloudyear3() + this.finalDataValue[9].cloudyear2;
    this.finalDataValue[9].wmsyear4 = this.calculateWmsYear4() + this.finalDataValue[9].wmsyear3;
    this.finalDataValue[9].cloudyear4 = this.calculatecloudyear4() + this.finalDataValue[9].cloudyear3;
    this.finalDataValue[9].wmsyear5 = this.calculateWmsYear5() + this.finalDataValue[9].wmsyear4
    this.finalDataValue[9].cloudyear5 = this.calculatecloudyear5() + this.finalDataValue[9].cloudyear5


    this.finalDataValue[10].wmsyear1 = 0;
    this.finalDataValue[10].cloudyear1 = this.finalDataValue[8].wmsyear1 - this.calculatecloudyear1();
    this.finalDataValue[10].wmsyear2 = 0;
    this.finalDataValue[10].cloudyear2 = this.finalDataValue[10].cloudyear1 + (this.finalDataValue[8].wmsyear2 - this.calculatecloudyear2());
    this.finalDataValue[10].wmsyear3 = 0;
    this.finalDataValue[10].cloudyear3 = this.finalDataValue[10].cloudyear2 + (this.finalDataValue[8].wmsyear3 - this.calculatecloudyear3());
    this.finalDataValue[10].wmsyear4 = 0;
    this.finalDataValue[10].cloudyear4 = this.finalDataValue[10].cloudyear3 + (this.finalDataValue[8].wmsyear4 - this.calculatecloudyear4());
    this.finalDataValue[10].wmsyear5 = 0;
    this.finalDataValue[10].cloudyear5 = this.finalDataValue[10].cloudyear4 + (this.finalDataValue[8].wmsyear5 - this.calculatecloudyear5());
  }

  calculateWmsYear1() {
    return (this.convertToInt(this.finalDataValue[0].wmsyear1) +
      this.convertToInt(this.finalDataValue[1].wmsyear1) +
      this.convertToInt(this.finalDataValue[2].wmsyear1) +
      this.convertToInt(this.finalDataValue[3].wmsyear1) +
      this.convertToInt(this.finalDataValue[4].wmsyear1) +
      this.convertToInt(this.finalDataValue[5].wmsyear1) +
      this.convertToInt(this.finalDataValue[6].wmsyear1) +
      this.convertToInt(this.finalDataValue[7].wmsyear1))
  }

  calculateWmsYear2() {
    return (this.convertToInt(this.finalDataValue[0].wmsyear2) +
      this.convertToInt(this.finalDataValue[1].wmsyear2) +
      this.convertToInt(this.finalDataValue[2].wmsyear2) +
      this.convertToInt(this.finalDataValue[3].wmsyear2) +
      this.convertToInt(this.finalDataValue[4].wmsyear2) +
      this.convertToInt(this.finalDataValue[5].wmsyear2) +
      this.convertToInt(this.finalDataValue[6].wmsyear2) +
      this.convertToInt(this.finalDataValue[7].wmsyear2))
  }

  calculateWmsYear3() {
    return (this.convertToInt(this.finalDataValue[0].wmsyear3) +
      this.convertToInt(this.finalDataValue[1].wmsyear3) +
      this.convertToInt(this.finalDataValue[2].wmsyear3) +
      this.convertToInt(this.finalDataValue[3].wmsyear3) +
      this.convertToInt(this.finalDataValue[4].wmsyear3) +
      this.convertToInt(this.finalDataValue[5].wmsyear3) +
      this.convertToInt(this.finalDataValue[6].wmsyear3) +
      this.convertToInt(this.finalDataValue[7].wmsyear3))
  }

  calculateWmsYear4() {
    return (this.convertToInt(this.finalDataValue[0].wmsyear4) +
      this.convertToInt(this.finalDataValue[1].wmsyear4) +
      this.convertToInt(this.finalDataValue[2].wmsyear4) +
      this.convertToInt(this.finalDataValue[3].wmsyear4) +
      this.convertToInt(this.finalDataValue[4].wmsyear4) +
      this.convertToInt(this.finalDataValue[5].wmsyear4) +
      this.convertToInt(this.finalDataValue[6].wmsyear4) +
      this.convertToInt(this.finalDataValue[7].wmsyear4))
  }

  calculateWmsYear5() {
    return (this.convertToInt(this.finalDataValue[0].wmsyear5) +
      this.convertToInt(this.finalDataValue[1].wmsyear5) +
      this.convertToInt(this.finalDataValue[2].wmsyear5) +
      this.convertToInt(this.finalDataValue[3].wmsyear5) +
      this.convertToInt(this.finalDataValue[4].wmsyear5) +
      this.convertToInt(this.finalDataValue[5].wmsyear5) +
      this.convertToInt(this.finalDataValue[6].wmsyear5) +
      this.convertToInt(this.finalDataValue[7].wmsyear5))
  }


  calculatecloudyear1() {
    return (this.convertToInt(this.finalDataValue[0].cloudyear1) +
      this.convertToInt(this.finalDataValue[1].cloudyear1) +
      this.convertToInt(this.finalDataValue[2].cloudyear1) +
      this.convertToInt(this.finalDataValue[3].cloudyear1) +
      this.convertToInt(this.finalDataValue[4].cloudyear1) +
      this.convertToInt(this.finalDataValue[5].cloudyear1) +
      this.convertToInt(this.finalDataValue[6].cloudyear1) +
      this.convertToInt(this.finalDataValue[7].cloudyear1))
  }

  calculatecloudyear2() {
    return (this.convertToInt(this.finalDataValue[0].cloudyear2) +
      this.convertToInt(this.finalDataValue[1].cloudyear2) +
      this.convertToInt(this.finalDataValue[2].cloudyear2) +
      this.convertToInt(this.finalDataValue[3].cloudyear2) +
      this.convertToInt(this.finalDataValue[4].cloudyear2) +
      this.convertToInt(this.finalDataValue[5].cloudyear2) +
      this.convertToInt(this.finalDataValue[6].cloudyear2) +
      this.convertToInt(this.finalDataValue[7].cloudyear2))
  }

  calculatecloudyear3() {
    return (this.convertToInt(this.finalDataValue[0].cloudyear3) +
      this.convertToInt(this.finalDataValue[1].cloudyear3) +
      this.convertToInt(this.finalDataValue[2].cloudyear3) +
      this.convertToInt(this.finalDataValue[3].cloudyear3) +
      this.convertToInt(this.finalDataValue[4].cloudyear3) +
      this.convertToInt(this.finalDataValue[5].cloudyear3) +
      this.convertToInt(this.finalDataValue[6].cloudyear3) +
      this.convertToInt(this.finalDataValue[7].cloudyear3))
  }

  calculatecloudyear4() {
    return (this.convertToInt(this.finalDataValue[0].cloudyear4) +
      this.convertToInt(this.finalDataValue[1].cloudyear4) +
      this.convertToInt(this.finalDataValue[2].cloudyear4) +
      this.convertToInt(this.finalDataValue[3].cloudyear4) +
      this.convertToInt(this.finalDataValue[4].cloudyear4) +
      this.convertToInt(this.finalDataValue[5].cloudyear4) +
      this.convertToInt(this.finalDataValue[6].cloudyear4) +
      this.convertToInt(this.finalDataValue[7].cloudyear4))
  }

  calculatecloudyear5() {
    return (this.convertToInt(this.finalDataValue[0].cloudyear5) +
      this.convertToInt(this.finalDataValue[1].cloudyear5) +
      this.convertToInt(this.finalDataValue[2].cloudyear5) +
      this.convertToInt(this.finalDataValue[3].cloudyear5) +
      this.convertToInt(this.finalDataValue[4].cloudyear5) +
      this.convertToInt(this.finalDataValue[5].cloudyear5) +
      this.convertToInt(this.finalDataValue[6].cloudyear5) +
      this.convertToInt(this.finalDataValue[7].cloudyear5));
  }
  calculateSofwareCostPerYear() {
    return (this.convertToInt(this.tco.jdaInput.SumJDA) / 12) * this.convertToInt(this.tco.clientInput.TotalNumberofFinancialUsers);
  }

  calculateSoftwareWMSSupportCostPerYear() {
    return this.convertToInt(this.tco.clientInput.TotalAnnualApplicationSupportFeesPayabletoJDA);
  }

  calculateLegacySoftwareCloudPerYear() {
    return this.convertToInt(this.tco.clientInput.TotalAnnualApplicationSupportFeesPayabletoJDA) / 2
  }

  calculateSoftwareCloudSupportCostPerYear() {
    return this.convertToInt(this.getCloudSupport()) / this.convertToInt(this.getPeriod())
  }


  calculateCloudSoftwareFTEYear1() {
    this.cloudSoftwareCost = 0;

    if (this.tco.clientInput.SelectedTier === 'Tier1') {

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier1) *
            ((100 - this.resoucesFTEPercentage[0].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier1) *
            ((100 - this.resoucesFTEPercentage[1].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier1) *
            ((100 - this.resoucesFTEPercentage[2].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier1) *
            ((100 - this.resoucesFTEPercentage[3].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier1));
    } else if (this.tco.clientInput.SelectedTier === 'Tier2') {
      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier2) *
            ((100 - this.resoucesFTEPercentage[0].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier2) *
            ((100 - this.resoucesFTEPercentage[1].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier2) *
            ((100 - this.resoucesFTEPercentage[2].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier2) *
            ((100 - this.resoucesFTEPercentage[3].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier2));
    } else if (this.tco.clientInput.SelectedTier === 'Tier3') {
      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier3) *
            ((100 - this.resoucesFTEPercentage[0].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier3) *
            ((100 - this.resoucesFTEPercentage[1].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier3) *
            ((100 - this.resoucesFTEPercentage[2].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier3) *
            ((100 - this.resoucesFTEPercentage[3].year1) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier3));
    }

    return Math.round(this.cloudSoftwareCost / 4);
  }

  calculateCloudSoftwareFTEYear2() {
    this.cloudSoftwareCost = 0;

    if (this.tco.clientInput.SelectedTier === 'Tier1') {

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier1) *
            ((100 - this.resoucesFTEPercentage[0].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier1) *
            ((100 - this.resoucesFTEPercentage[1].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier1) *
            ((100 - this.resoucesFTEPercentage[2].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier1) *
            ((100 - this.resoucesFTEPercentage[3].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier1));
    } else if (this.tco.clientInput.SelectedTier === 'Tier2') {
      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier2) *
            ((100 - this.resoucesFTEPercentage[0].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier2) *
            ((100 - this.resoucesFTEPercentage[1].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier2) *
            ((100 - this.resoucesFTEPercentage[2].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier2) *
            ((100 - this.resoucesFTEPercentage[3].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier2));
    } else if (this.tco.clientInput.SelectedTier === 'Tier3') {
      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier3) *
            ((100 - this.resoucesFTEPercentage[0].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier3) *
            ((100 - this.resoucesFTEPercentage[1].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier3) *
            ((100 - this.resoucesFTEPercentage[2].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier3) *
            ((100 - this.resoucesFTEPercentage[3].year2) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier3));
    }

    return Math.round(this.cloudSoftwareCost / 4);
  }

  calculateCloudSoftwareFTEYear3() {
    this.cloudSoftwareCost = 0;

    if (this.tco.clientInput.SelectedTier === 'Tier1') {

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier1) *
            ((100 - this.resoucesFTEPercentage[0].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier1) *
            ((100 - this.resoucesFTEPercentage[1].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier1) *
            ((100 - this.resoucesFTEPercentage[2].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier1) *
            ((100 - this.resoucesFTEPercentage[3].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier1));
    } else if (this.tco.clientInput.SelectedTier === 'Tier2') {
      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier2) *
            ((100 - this.resoucesFTEPercentage[0].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier2) *
            ((100 - this.resoucesFTEPercentage[1].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier2) *
            ((100 - this.resoucesFTEPercentage[2].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier2) *
            ((100 - this.resoucesFTEPercentage[3].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier2));
    } else if (this.tco.clientInput.SelectedTier === 'Tier3') {
      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier3) *
            ((100 - this.resoucesFTEPercentage[0].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier3) *
            ((100 - this.resoucesFTEPercentage[1].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier3) *
            ((100 - this.resoucesFTEPercentage[2].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier3) *
            ((100 - this.resoucesFTEPercentage[3].year3) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier3));
    }

    return Math.round(this.cloudSoftwareCost / 4);
  }

  calculateCloudSoftwareFTEYear4() {
    this.cloudSoftwareCost = 0;

    if (this.tco.clientInput.SelectedTier === 'Tier1') {

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier1) *
            ((100 - this.resoucesFTEPercentage[0].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier1) *
            ((100 - this.resoucesFTEPercentage[1].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier1) *
            ((100 - this.resoucesFTEPercentage[2].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier1) *
            ((100 - this.resoucesFTEPercentage[3].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier1));
    } else if (this.tco.clientInput.SelectedTier === 'Tier2') {
      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier2) *
            ((100 - this.resoucesFTEPercentage[0].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier2) *
            ((100 - this.resoucesFTEPercentage[1].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier2) *
            ((100 - this.resoucesFTEPercentage[2].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier2) *
            ((100 - this.resoucesFTEPercentage[3].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier2));
    } else if (this.tco.clientInput.SelectedTier === 'Tier3') {
      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier3) *
            ((100 - this.resoucesFTEPercentage[0].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier3) *
            ((100 - this.resoucesFTEPercentage[1].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier3) *
            ((100 - this.resoucesFTEPercentage[2].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier3) *
            ((100 - this.resoucesFTEPercentage[3].year4) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier3));
    }

    return Math.round(this.cloudSoftwareCost / 4);
  }

  calculateCloudSoftwareFTEYear5() {
    this.cloudSoftwareCost = 0;

    if (this.tco.clientInput.SelectedTier === 'Tier1') {

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier1) *
            ((100 - this.resoucesFTEPercentage[0].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier1) *
            ((100 - this.resoucesFTEPercentage[1].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier1) *
            ((100 - this.resoucesFTEPercentage[2].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier1));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier1) *
            ((100 - this.resoucesFTEPercentage[3].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier1));
    } else if (this.tco.clientInput.SelectedTier === 'Tier2') {
      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier2) *
            ((100 - this.resoucesFTEPercentage[0].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier2) *
            ((100 - this.resoucesFTEPercentage[1].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier2) *
            ((100 - this.resoucesFTEPercentage[2].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier2));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier2) *
            ((100 - this.resoucesFTEPercentage[3].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier2));
    } else if (this.tco.clientInput.SelectedTier === 'Tier3') {
      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
          (this.convertToInt(this.resoucesFTECost[0].tier3) *
            ((100 - this.resoucesFTEPercentage[0].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[0].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
          (this.convertToInt(this.resoucesFTECost[1].tier3) *
            ((100 - this.resoucesFTEPercentage[1].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[1].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
          (this.convertToInt(this.resoucesFTECost[2].tier3) *
            ((100 - this.resoucesFTEPercentage[2].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[2].tier3));

      this.cloudSoftwareCost = (this.cloudSoftwareCost +
        (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
          (this.convertToInt(this.resoucesFTECost[3].tier3) *
            ((100 - this.resoucesFTEPercentage[3].year5) / 100))) +
        this.convertToInt(this.resoucesFTECost[3].tier3));
    }

    return Math.round(this.cloudSoftwareCost / 4);
  }

  getCloudSupport() {
    console.log('Cloud support ' + this.wms[0].cloudsupport);
    return this.convertToInt(this.wms[0].cloudsupport);
  }

  getPeriod() {
    return this.convertToInt(this.wms[0].period);
  }

  getLegacySupport() {
    return this.convertToInt(this.wms[0].legacysupport);
  }

  calculateLegacySupportCloudPerYear() {
    return this.getLegacySupport() / this.getPeriod();
  }
  // ends here


  public chartColors: any[] = [
    {
      backgroundColor: ['#007BFF', '#60c5ba', '#007BFF', '#60c5ba', '#60c5ba']
    }];

  chartLabels = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'];


  // calculateApplicationUpgradeCost() {
  //   // Need to check with upgrade frequency period
  //   return (((this.convertToInt(this.tco.clientInput.Duration1) / 260)
  //     * this.convertToInt(this.tco.clientInput.UpgradePerformedInternallyOrUsed1)) *
  //     (this.convertToInt(this.tco.clientInput.UpgradeCost1) + this.convertToInt(this.tco.clientInput.UpgradeCost2)) / 2);
  // }

  //f12
  calculateApplicationUpgradeCost() {
    console.log('calculateApplicationUpgradeCost');
    if (this.calculateProjectedNumberOfUpgrades() === 0) {
      console.log('calculateApplicationUpgradeCost 0 : ' + this.calculateApplicationAverageUpgradeCost());
      return this.calculateApplicationAverageUpgradeCost();
    } else {
      console.log('calculateApplicationUpgradeCost 1 : ' +
        (this.convertToInt(this.calculateApplicationAverageUpgradeCost()) *
        this.convertToInt(this.calculateProjectedNumberOfUpgrades()) /
        this.convertToInt(this.getPeriod())) *  this.calculateTShirtCalculate());

      return (this.convertToInt(this.calculateApplicationAverageUpgradeCost()) *
      this.convertToInt(this.calculateProjectedNumberOfUpgrades()) /
      this.convertToInt(this.getPeriod())) *  this.calculateTShirtCalculate();
    }

    // return ((this.calculateApplicationAverageUpgradeCost() +
    //   this.calculateProjectedNumberOfUpgrades()) / this.getPeriod()) *
    //   this.calculateTShirtCalculate();
  }

  //f19
  calculateProjectedNumberOfUpgrades() {
    console.log('calculateProjectedNumberOfUpgrades : ' + ((this.convertToInt(this.calculateTShirtCalculate()) + this.convertToInt(this.getPeriod()) * 12) +
      (this.currentDate.getMonth() - this.calculateMaximumDate().getMonth())));

    return ((this.convertToInt(this.calculateTShirtCalculate()) + this.convertToInt(this.getPeriod()) * 12) +
      (this.currentDate.getMonth() - this.calculateMaximumDate().getMonth()));
  }

  // Starts here
  //f14
  calculateApplicationAverageUpgradeCost() {
    console.log('calculateApplicationAverageUpgradeCost : ' +
      (this.convertToInt(this.tco.clientInput.UpgradeCost1) +
        this.convertToInt(this.tco.clientInput.UpgradeCost2)) / 2);

    return (this.convertToInt(this.tco.clientInput.UpgradeCost1) + this.convertToInt(this.tco.clientInput.UpgradeCost2) / 2);
  }
  // Ends here

  calculateSupportFTECostCloudYear1() {
    this.SupportFTECloudCost = 0;
    this.SupportFTECloudCost = (this.convertToInt(this.wms[0].legacysupport) +
      this.convertToInt(this.tco.clientInput.TotalAnnualApplicationSupportFeesPayabletoJDA)) / 2;

    console.log(this.SupportFTECloudCost);

    return this.SupportFTECloudCost;
  }

  calculateSupportFTECostCloudYear2() {
    this.SupportFTECloudCost = 0;
    this.SupportFTECloudCost = (this.convertToInt(this.wms[0].legacysupport) +
      this.convertToInt(this.tco.clientInput.TotalAnnualApplicationSupportFeesPayabletoJDA)) / 2;

    console.log(this.SupportFTECloudCost);

    return this.SupportFTECloudCost;
  }

  calculateSupportFTECostCloudYear3() {
    this.SupportFTECloudCost = 0;
    this.SupportFTECloudCost = (this.convertToInt(this.wms[0].legacysupport) +
      this.convertToInt(this.tco.clientInput.TotalAnnualApplicationSupportFeesPayabletoJDA)) / 2;

    console.log(this.SupportFTECloudCost);

    return this.SupportFTECloudCost;
  }

  calculateSupportFTECostCloudYear4() {
    this.SupportFTECloudCost = 0;
    this.SupportFTECloudCost = (this.convertToInt(this.wms[0].legacysupport) +
      this.convertToInt(this.tco.clientInput.TotalAnnualApplicationSupportFeesPayabletoJDA)) / 2;

    console.log(this.SupportFTECloudCost);

    return this.SupportFTECloudCost * 0.10;
  }

  calculateSupportFTECostCloudYear5() {
    this.SupportFTECloudCost = 0;
    this.SupportFTECloudCost = (this.convertToInt(this.wms[0].legacysupport) +
      this.convertToInt(this.tco.clientInput.TotalAnnualApplicationSupportFeesPayabletoJDA)) / 2;

    console.log(this.SupportFTECloudCost);

    return this.SupportFTECloudCost * 0.10;
  }


  calculateHardwareWMSCost() {
    this.totalhardwarecost = 0;

    if (this.tco.clientInput.annualInhouseCost === 0) {
      this.totalhardwarecost = this.convertToInt(this.tco.clientInput.totalInhouseServer) * 35000;
    } else {
      this.totalhardwarecost = this.convertToInt(this.tco.clientInput.annualInhouseCost);
    }
    this.totalhardwarecost = this.convertToInt(this.totalhardwarecost) + this.convertToInt(this.tco.clientInput.applicationHostingFee);
    this.totalhardwarecost = this.convertToInt(this.totalhardwarecost) + this.convertToInt(this.tco.clientInput.annualSpendHostingFee);

    return this.convertToInt(this.totalhardwarecost);
  }

  calculateHardwareCloudCost() {
    this.totalhardwarecost = 0;
    return this.convertToInt(this.calculateHardwareWMSCost()) * 0.10;
  }

  convertToInt(val) {
    // tslint:disable-next-line:radix
    return parseInt(val);
  }

  calculateWMSSoftwareFTE() {
    // Percentage hardcoded need to rewrite the percentage logic.
    // Tier logic need to be writter currently it is handles only the Tier1.

    this.wmsSoftwareFTECost = 0;

    this.wmsSoftwareFTECost = (this.wmsSoftwareFTECost +
      (this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) *
        (this.convertToInt(this.resoucesFTECost[0].tier1) * 0.2)) +
      this.convertToInt(this.resoucesFTECost[0].tier1));

    this.wmsSoftwareFTECost = (this.wmsSoftwareFTECost +
      (this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) *
        (this.convertToInt(this.resoucesFTECost[1].tier1) * 0.2)) +
      this.convertToInt(this.resoucesFTECost[1].tier1));

    this.wmsSoftwareFTECost = (this.wmsSoftwareFTECost +
      (this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) *
        (this.convertToInt(this.resoucesFTECost[2].tier1) * 0.2)) +
      this.convertToInt(this.resoucesFTECost[2].tier1));

    this.wmsSoftwareFTECost = (this.wmsSoftwareFTECost +
      (this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors) *
        (this.convertToInt(this.resoucesFTECost[3].tier1) * 0.2)) +
      this.convertToInt(this.resoucesFTECost[3].tier1));

    return this.wmsSoftwareFTECost;
  }

  calculateImplementationCost1Year() {
    this.ImplementationCostFor1Year = 0;

    //  console.log(this.finaldata);

    if (this.tco.tShirtSizingWMS.ShirtSize === 'Small') {
      if (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear1) > 1) {
        this.ImplementationCostFor1Year = this.ImplementationCostFor1Year + 260000;

        this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
          (260000 * 0.30) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear1) - 1);
      } else {
        this.ImplementationCostFor1Year = 260000;
      }

    } else if (this.tco.tShirtSizingWMS.ShirtSize === 'Medium') {
      if (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear1) > 1) {
        this.ImplementationCostFor1Year = this.ImplementationCostFor1Year + 400000;

        this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
          (400000 * 0.25) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear1) - 1);
      } else {
        this.ImplementationCostFor1Year = 400000;
      }
    } else if (this.tco.tShirtSizingWMS.ShirtSize === 'Large') {
      if (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear1) > 1) {
        this.ImplementationCostFor1Year = this.ImplementationCostFor1Year + 700000;

        this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
          (700000 * 0.20) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear1) - 1);
      } else {
        this.ImplementationCostFor1Year = 700000;
      }
    } else if (this.tco.tShirtSizingWMS.ShirtSize === 'Extra Large') {
      if (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear1) > 1) {
        this.ImplementationCostFor1Year = this.ImplementationCostFor1Year + 925000;

        this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
          (925000 * 0.20) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear1) - 1);
      } else {
        this.ImplementationCostFor1Year = 925000;
      }
    }

    return this.ImplementationCostFor1Year;
  }

  calculateImplementationCost2Year() {
    this.ImplementationCostFor1Year = 0;

    if (this.tco.tShirtSizingWMS.ShirtSize === 'Small') {
      this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
        (260000 * 0.30) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear2));
    } else if (this.tco.tShirtSizingWMS.ShirtSize === 'Medium') {
      this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
        (400000 * 0.25) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear2));

    } else if (this.tco.tShirtSizingWMS.ShirtSize === 'Large') {
      this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
        (700000 * 0.20) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear2));
    } else if (this.tco.tShirtSizingWMS.ShirtSize === 'Extra Large') {
      this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
        (925000 * 0.20) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear2));
    }
    return this.ImplementationCostFor1Year;
  }

  calculateImplementationCost3Year() {
    this.ImplementationCostFor1Year = 0;

    if (this.tco.tShirtSizingWMS.ShirtSize === 'Small') {
      this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
        (260000 * 0.30) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear3));
    } else if (this.tco.tShirtSizingWMS.ShirtSize === 'Medium') {
      this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
        (400000 * 0.25) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear3));

    } else if (this.tco.tShirtSizingWMS.ShirtSize === 'Large') {
      this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
        (700000 * 0.20) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear3));
    } else if (this.tco.tShirtSizingWMS.ShirtSize === 'Extra Large') {
      this.ImplementationCostFor1Year = this.ImplementationCostFor1Year +
        (925000 * 0.20) * (this.convertToInt(this.tco.clientInput.NoOfSiteImpYear3));
    }
    return this.ImplementationCostFor1Year;
  }

  calculateFTECount() {
    return this.convertToInt(this.tco.clientInput.NumberofBusinessFTEs) +
      this.convertToInt(this.tco.clientInput.NumberofITorTechnologyDeveloperFTEs) +
      this.convertToInt(this.tco.clientInput.NumberofSystemAdminDBAFTEs) +
      this.convertToInt(this.tco.clientInput.NumberofConsultantsContractors);
  }

  goToClient() {
    console.log('Output button');
    this.tcoservice.setTCO(this.tco);
    this.local.setProgress('Client');
    this.route.navigateByUrl('home/login');
  }

  onChartClick(event) {
    console.log(event);
  }

  calculateGraph() {
    console.log(this.tco.tShirtSizing.CurrentType);

    this.chartData = [{
      data: [this.finalDataValue[8].wmsyear1, this.finalDataValue[8].wmsyear2, this.finalDataValue[8].wmsyear3, this.finalDataValue[8].wmsyear4, this.finalDataValue[8].wmsyear5],
      label: 'WMS',
      fontColor: 'white'
    },
    {
      data: [this.finalDataValue[8].cloudyear1, this.finalDataValue[8].cloudyear2, this.finalDataValue[8].cloudyear3, this.finalDataValue[8].cloudyear4, this.finalDataValue[8].cloudyear5],
      label: 'Cloud',
      fontColor: 'white'
    }
    ];

    // if (this.tco.tShirtSizing.CurrentType === 'Small') {
    //   this.tco.erpTCOReport.currentSoftwareUpgradeCostPerYer = '$ 1,10,000';
    //   this.tco.erpTCOReport.currentHardwareCostPerYear = '$ 1,20,000';
    //   this.tco.erpTCOReport.SupportFTEHeadcountCostYear = '$ 1,00,000';
    //   this.tco.erpTCOReport.TotalCurrentSpendPerYear = '$ 4,75,000';


    // } else if (this.tco.tShirtSizing.CurrentType === 'Medium') {
    //   this.tco.erpTCOReport.currentSoftwareUpgradeCostPerYer = '$ 1,40,000';

    //   this.tco.erpTCOReport.currentHardwareCostPerYear = '$ 2,50,000';

    //   this.tco.erpTCOReport.SupportFTEHeadcountCostYear = '$ 1,20,000';


    //   this.tco.erpTCOReport.TotalCurrentSpendPerYear = '$ 6,50,000';

    //   this.chartData = [{
    //     data: [650000, 650000, 650000, 650000, 650000],
    //     label: 'WMS',
    //     fontColor: 'white'
    //   },
    //   {
    //     data: [550000, 540000, 500500, 430000, 430000],
    //     label: 'Cloud',
    //     fontColor: 'white'
    //   }
    //   ];
    // } else if (this.tco.tShirtSizing.CurrentType === 'Large') {
    //   this.tco.erpTCOReport.currentSoftwareUpgradeCostPerYer = '$ 28,00,000';

    //   this.tco.erpTCOReport.currentHardwareCostPerYear = '$ 40,00,000';

    //   this.tco.erpTCOReport.SupportFTEHeadcountCostYear = '$ 28,00,000';


    //   this.tco.erpTCOReport.TotalCurrentSpendPerYear = '$ 1,10,00,000';

    //   this.chartData = [{
    //     data: [1100000, 1100000, 1100000, 1100000, 1100000],
    //     label: 'WMS',
    //     fontColor: 'white'
    //   },
    //   {
    //     data: [950000, 940000, 880000, 800000, 800000],
    //     label: 'Cloud',
    //     fontColor: 'white'
    //   }
    //   ];
    // } else if (this.tco.tShirtSizing.CurrentType === 'Extra Large') {
    //   this.tco.erpTCOReport.currentSoftwareUpgradeCostPerYer = '$ 30,00,000';

    //   this.tco.erpTCOReport.currentHardwareCostPerYear = '$ 42,00,000';

    //   this.tco.erpTCOReport.SupportFTEHeadcountCostYear = '$ 54,00,000';


    //   this.tco.erpTCOReport.TotalCurrentSpendPerYear = '$ 1,40,00,000';
    //   this.chartData = [{
    //     data: [1400000, 1400000, 1400000, 1400000, 1400000],
    //     label: 'WMS',
    //     fontColor: 'white'
    //   },
    //   {
    //     data: [1150000, 1050000, 1000000, 925000, 925000],
    //     label: 'Cloud',
    //     fontColor: 'white'
    //   }
    //   ];
    // }
  }
}
