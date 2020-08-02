import { ClientInput } from './ClientInput';
import { BeginPage } from './BeginPage';
import { ERPCurrentSpend } from './ERPCurrentSpend';

export class ERPTCOReport
{
    beginPage: BeginPage = new BeginPage();
    clientInput: ClientInput = new ClientInput();
    erpCurrentSpend: ERPCurrentSpend =  new ERPCurrentSpend();

    Heading = this.clientInput.CurrentOnpremiseApplication;
    SoftwareLicenseCostYearOracleEBS = this.erpCurrentSpend.TotalPeopleSoftOrEBSSupportFee;
    SoftwareSupportPerYearEBS:number;
    LegacySoftwareSupportPerYearOracleEBS:number;
    ImplementationCostYearDSEBS:number;

    SoftwareUpgradeCost18MonthsEBS = this.erpCurrentSpend.PeopleSoftEBSUpgradeCostsperyear;
    HardwareCostYearEBS = this.erpCurrentSpend.PeopleSoftEBSHardwareCosts;
    SupportFTEHeadcountCostYearEBS = this.erpCurrentSpend.CustomerPeopleSoftEBSMaintenanceTeamCosts;
    LegacySupportPerYearDSEBS: number;

    TOTALFor3YearsEBS = this.SoftwareLicenseCostYearOracleEBS + this.SoftwareSupportPerYearEBS + this.LegacySoftwareSupportPerYearOracleEBS +
    this.ImplementationCostYearDSEBS + this.SoftwareUpgradeCost18MonthsEBS + this.HardwareCostYearEBS + this.SupportFTEHeadcountCostYearEBS +
      this.LegacySupportPerYearDSEBS  //st missing one field

      SumSoftwareLicenseCostYearOracle16: number;
      SupportFTEHeadcountCostYear1K14: number;
      SupportFTEHeadcountCostYear1M14:  number;
      TotalYear4O16: number;
      EBSCUMULATIVESPENDP17:number;
      CUMULATIVESPENDQ17: number;

      TOTAL5YEARSPENDCloud: number;
      TOTAL5YEARSPENDEBS = this.EBSCUMULATIVESPENDP17;
      
      // EBSYear3Cumulativespend = this.EBSYear2Cumulativespend + this.EBSYear3TOTAL
    //   EBSYear4Cumulativespend = this.EBSYear3Cumulativespend + this.EBSYear4TOTAL;
      TotalYear4_5B17 = this.SumSoftwareLicenseCostYearOracle16;
    //   EBSYear5Cumulativespend = this.EBSYear4Cumulativespend + this.EBSYear5TOTAL
      EBS = this.Heading;
    //   TOTAL5YEARSPENDEBS = this.EBSYear5Cumulativespend;

    EBSYear1LegacySoftwareSupportPerYearOracle: number;
    EBSYear1ImplementationCostYearDS:number;
    EBSYear1SoftwareUpgradeCost18Months = this.SoftwareUpgradeCost18MonthsEBS;
    EBSYear1HardwareCostYear = this.HardwareCostYearEBS;
    SoftwareLicenseCostYearOracleCloud = this.erpCurrentSpend.CloudLicenseCostsperyear;
    HeadingCloud:string;
    TOTAL5YEARSAVINGSEBS = this.TOTAL5YEARSPENDEBS + this.TOTAL5YEARSPENDCloud;
    SoftwareSupportPerYearCloud = this.erpCurrentSpend.CloudSupportCostsperyear;
    LegacySoftwareSupportPerYearOracleCloud = this.erpCurrentSpend.EstimatedOngoingPeopleSoftEBSSupportCosts;
    ImplementationCostYearDSCloud = this.erpCurrentSpend.CloudImplementationCostsperyear;
    SoftwareUpgradeCost18MonthsCloud:number;
    HardwareCostYearCloud = this.erpCurrentSpend.EstimatedHardwareCostsincludingHosting;
    SupportFTEHeadcountCostYearCloud = "$ 7,02,000"; //st
    LegacySupportPerYearDSCloud =  "$ 2,00,000"; //st
    CurrentSpendSoftwareSupportPerYear = 	 "$ 7,00,000"; //st
    currentSoftwareUpgradeCostPerYer  =  "$ 7,20,000"; 	//st
    currentHardwareCostPerYear =  "$ 12,00,000"; //st
    SupportFTEHeadcountCostYear		=  "$ 17,64,000"; //st 	
    TotalCurrentSpendPerYear = "$ 43,84,000"; //st
    IncludedText = "Included";




}