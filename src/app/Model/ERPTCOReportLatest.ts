import {BeginPage} from '../Model/BeginPage';
import {ClientInput} from '../Model/ClientInput';
import {ERPCurrentSpend} from '../Model/ERPCurrentSpend';

export class ERPTCOReportLatest{
    beginPage: BeginPage = new BeginPage();
    clientInput: ClientInput = new ClientInput();
    erpCurrentSpend: ERPCurrentSpend = new ERPCurrentSpend();

    Heading   = this.clientInput.CurrentOnpremiseApplication;
    SoftwareLicenseCostYearOracleEBS = this.erpCurrentSpend.TotalPeopleSoftOrEBSSupportFee;
    SoftwareSupportPerYearEBS:number;
    LegacySoftwareSupportPerYearOracleEBS: number;
    ImplementationCostYearDSEBS: number;
    SoftwareUpgradeCost18MonthsEBS = this.erpCurrentSpend.PeopleSoftEBSUpgradeCostsperyear;
    HardwareCostYearEBS= this.erpCurrentSpend.PeopleSoftEBSHardwareCosts;
    SupportFTEHeadcountCostYearEBS = this.erpCurrentSpend.CustomerPeopleSoftEBSMaintenanceTeamCosts;
    LegacySupportPerYearDSEBS: number;
    CustomerPeopleSoftEBSMaintenanceTeamCosts = this.erpCurrentSpend.CustomerPeopleSoftEBSMaintenanceTeamCosts;

    TOTALFor3YearsEBS = this.SoftwareLicenseCostYearOracleEBS + this.SoftwareSupportPerYearEBS + this.LegacySoftwareSupportPerYearOracleEBS +
    this.ImplementationCostYearDSEBS + this.SoftwareUpgradeCost18MonthsEBS + this.HardwareCostYearEBS + this.SupportFTEHeadcountCostYearEBS +
    this.CustomerPeopleSoftEBSMaintenanceTeamCosts + this.LegacySupportPerYearDSEBS

    SupportFTEHeadcountCostYear1K14: number;
    SupportFTEHeadcountCostYear1M14: number;
    SumSoftwareLicenseCostYearOracle16: number;
    TotalYear4O16: number;
    EBSCUMULATIVESPENDP17: number;
    CUMULATIVESPENDQ17: number;
    EBSYear4LegacySoftwareSupportPerYearOracle: number;
    EBSYear4ImplementationCostYearDS: number;
    EBSYear1SoftwareSupportPerYear = this.SoftwareSupportPerYearEBS;
    EBSYear1LegacySoftwareSupportPerYearOracle: number;
    EBSYear1SoftwareLicenseCostYearOracle: number;
    EBSYear1ImplementationCostYearDS: number;
    HeadingCloud: string;
    SoftwareLicenseCostYearOracleCloud = this.erpCurrentSpend.CloudLicenseCostsperyear;
    SoftwareSupportPerYearCloud = this.erpCurrentSpend.CloudSupportCostsperyear;
    LegacySoftwareSupportPerYearOracleCloud = this.erpCurrentSpend.EstimatedOngoingPeopleSoftEBSSupportCosts;
    ImplementationCostYearDSCloud = this.erpCurrentSpend.CloudImplementationCostsperyear;
    SoftwareUpgradeCost18MonthsCloud: number;
    HardwareCostYearCloud = this.erpCurrentSpend.EstimatedHardwareCostsincludingHosting;

    LegacySupportPerYearDSCloud = this.erpCurrentSpend.EstimatedOngoingPeopleSoftEBSMaintenanceCosts;
    CloudYear4SoftwareLicenseCostYearOracle = this.SoftwareLicenseCostYearOracleCloud;

    CloudYear4SoftwareSupportPerYear = this.SoftwareSupportPerYearCloud;
    CloudYear4LegacySoftwareSupportPerYearOracle = this.LegacySoftwareSupportPerYearOracleCloud;

    CloudYear4ImplementationCostYearDS = this.ImplementationCostYearDSCloud;
    CloudYear4SoftwareUpgradeCost18Months: number;
    CloudYear4HardwareCostYear = this.HardwareCostYearCloud;

    TotalYear4_5B17 = this.SumSoftwareLicenseCostYearOracle16;
    EBS = this.Heading;
    SupportFTEHeadcountCostYear1I14 = 0; //st

    TOTAL5YEARSPENDCloud  = this.CUMULATIVESPENDQ17;
    TOTAL5YEARSPENDEBS = this.EBSCUMULATIVESPENDP17;
    TOTAL5YEARSAVINGSEBS = this.TOTAL5YEARSPENDEBS - this.TOTAL5YEARSPENDCloud
    SupportFTEHeadcountCostYearCloud = this.SupportFTEHeadcountCostYear1I14 +  this.SupportFTEHeadcountCostYear1K14 + this.SupportFTEHeadcountCostYear1M14

    TOTALFor3YearsCloud = this.SoftwareLicenseCostYearOracleCloud + this.SoftwareSupportPerYearCloud + this.LegacySoftwareSupportPerYearOracleCloud 
    + this.ImplementationCostYearDSCloud + this.HardwareCostYearCloud + this.SupportFTEHeadcountCostYearCloud + this.LegacySupportPerYearDSCloud
    
    TotalYear4_5C17 = this.TotalYear4O16;
    Cloud: number;
    Heading1 = this.Heading;

    SoftwareB27= this.SoftwareLicenseCostYearOracleEBS + this.SoftwareSupportPerYearEBS + this.SoftwareUpgradeCost18MonthsEBS
    HardwareB28 = this.HardwareCostYearEBS;
    WagesServicesB29 = this.SupportFTEHeadcountCostYearEBS;
  TotalB30 = this.SoftwareB27 + this.HardwareB28 + this.WagesServicesB29;

    SoftwareC27 = (Number(this.SoftwareB27) / Number(this.TotalB30)) * 100

    // CloudYear4SupportFTEHeadcountCostYear = this.SupportFTEHeadcountCostYearCloud; //st
}