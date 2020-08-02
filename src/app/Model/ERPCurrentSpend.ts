import { ClientInput } from './ClientInput';
import { LocationData } from './LocationData';
import { JDAInput } from './JDAInput';
import {ERP} from './ERP';
import {TCO} from './TCO';


export class ERPCurrentSpend{
    clientInput: ClientInput = new ClientInput();    
     locationData: LocationData = new LocationData();
    jdaInput: JDAInput = new JDAInput();
    erp: ERP = new ERP();
   

    TotalContractPeriodYears = 5;
    NumberofFinancialUsers = this.clientInput.TotalNumberofFinancialUsers;
    
    InfrastructureUpgradeCostsperyear: number;
    NumberofCountries = this.clientInput.NumberofCountriesinScope;
    Financials:number;
    GeneralLedger:number;
    Payables:number;
    Receivables:number;
    FixedAssets:number;
    CashManagement:number;
    Expenses:number;
    Procurement:number;
    SelfServiceProcurement:number;
    ProjectCosting:number;
    ProjectManagement:number;
    ResourceManagement:number;
    PlanningBudgetingCloudServices:number;
    FusionAccountingHub:number;
    PercentageSavingsRangePerYearYearsI45 = 44/ 100; //st
    PercentageSavingsRangePerYearYearsI50 = 34/100; //st
    PercentageSavingsPerYearYearsI45 = 39/100; //st
    PercentageSavingsPerYearFirst3YearsI48 =  20; //st
    PercentageSavingsPerYearFirst3YearsJ48 =  30; //st
    Upgradefrequencyinmonths = 0; //st
    Numberofmonthssincelastupgrade = 51; //st
    TotalPeopleSoftOrEBSSupportFee = this.clientInput.TotalAnnualApplicationSupport;
    HardwareHostingCosts = this.clientInput.annualhostingfee + this.clientInput.annualspend;
    
    Projectednumberofupgrades = Math.floor((this.Numberofmonthssincelastupgrade + (this.TotalContractPeriodYears * 12)) / this.Upgradefrequencyinmonths)
    TotalNumberofServers = this.clientInput.TotalNumberofPhysicalServers;
    TotalROIOver5Years =  6782000;//st
    PercentageSavingsPerYearFirstThreeYears = 27; //st
    TotalAnnualCostSavingsYears4_5 =  1723000; //st
    EstimatedOraclePrice = this.locationData.SumOfSCM;
    Discount = 0 //st;
    TotalEstimatesCostsCloudImplementationCost = this.erp.Implemetation;
    TotalEstimatesCostsCloudSupportCost = this.erp.CloudSupport;
    FunctionalFTEs =  180000;

    CloudSupportCostsperyear = this.TotalEstimatesCostsCloudSupportCost / this.TotalContractPeriodYears

    CloudImplementationCostsperyear = this.erp.Implemetation / this.TotalContractPeriodYears
    Modules = 16;
    NumberofCountriesI9 = this.NumberofCountries;
    NumberofEmployees = this.NumberofFinancialUsers;
    DeveloperFTes = this.locationData.CostperfunctionalFTEsTier3k8; //st
    SystemAdminDBAFtes = this.locationData.CostperfunctionalFTEsTier3k10; //st
    ConsultantsContractor = this.locationData.CostperfunctionalFTEsTier3k11;
    NumberofITorTechnologyDeveloperFTEs =  162000;

    CloudLicenseCostsperyear: number =  1200000.00  //st

    

    EstimatedOngoingPeopleSoftEBSMaintenanceCosts = this.erp.LegacySupport / this.TotalContractPeriodYears;

    //   = this.NumberofSystemAdminDBAFTEs * this.SystemAdminDBAFtes
    
    //TotalAnnualCostSavingsperyearfirst3years = this.TotalCurrentPeopleSoftEBSAnnualSpend - this.TotalProjectedAnnualSpendPeryear
    
   // FunctionalFTesCal = this.clientInput.NumberofBusinessFTEs * this.FunctionalFTEs
    DeveloperFTesCal = this.DeveloperFTes * this.NumberofITorTechnologyDeveloperFTEs
 
  //  TotalCurrentPeopleSoftEBSAnnualSpend = this.CustomerPeopleSoftEBSMaintenanceTeamCosts + this.PeopleSoftEBSHardwareCosts + this.TotalPeopleSoftOrEBSSupportFee + this.PeopleSoftEBSUpgradeCostsperyear
  EstimatedOngoingPeopleSoftEBSSupportCosts = 350000; //st

    EstimatedCurrentHardwareCosts =  function getEstimatedCurrentHardwareCosts()
    {
        if (this.ClientInput.ANNUALcosttomaintainthephysicalhardware)
        {
           return this.TotalNumberofServers * 35000
        }
        else
        {
            return this.ClientInput.ANNUALcosttomaintainthephysicalhardware
        }
    }

        PeopleSoftEBSHardwareCosts  = 120000; // stthis.EstimatedCurrentHardwareCosts + this.HardwareHostingCosts;

        EstimatedHardwareCostsincludingHosting = this.PeopleSoftEBSHardwareCosts * 0.1;

    Mostrecentupgrade =  function getMostRecentUpgrade()
    {
        if (this.clientInput.ApplicationUpgradeDate1 > this.clientInput.ApplicationUpgradeDate2)
        {
            return this.clientInput.ApplicationUpgradeDate1;
        }
        else
        {
            return this.clientInput.ApplicationUpgradeDate2;
        }
    }

   
    Priorupgrade =  function getPriorupgrade()
    {
        if (this.clientInput.ApplicationUpgradeDate1 < this.clientInput.ApplicationUpgradeDate2)
        {
            return this.clientInput.ApplicationUpgradeDate1;
        }
        else
        {
            return this.clientInput.ApplicationUpgradeDate2;
        }
    }
  
    TotalEstimatesCostsperyear = function getTotalEstimationCostsPerYear()
    {
            if (this.jdaInput.SumJDA == 0)
            {
                return this.Financials + this.GeneralLedger + this.Payables + this.Receivables + this.FixedAssets + this.CashManagement + this.Expenses + this.Procurement
                    + this.SelfServiceProcurement + this.ProjectCosting + this.ProjectManagement + this.ResourceManagement + this.PlanningBudgetingCloudServices
                    + this.FusionAccountingHub
            }
            else
            {
                return this.jdaInput.SumJDA
            }
    }

    TotalEstimatesCostPerUpgrade = function getTotalEstimationCostPerUpgrade() 
    {
       return (this.clientInput.Upgrade1Cost  +  this.clientInput.Upgrade2Cost) / 2;
    }

    PeopleSoftEBSUpgradeCostsperyear = function getPeopleSoftUpgradeCostPerYear()
    {
        if (this.Projectednumberofupgrades == null)
        {
            this.PeopleSoftEBSUpgradeCostsperyear =  this.TotalEstimatesCostPerUpgrade
        }
        else
        {
            this.PeopleSoftEBSUpgradeCostsperyear = (((this.TotalEstimatesCostPerUpgrade * this.Projectednumberofupgrades) / (this.TotalContractPeriodInYears)) * this.ComplexityFactor);
            
            if (this.InfrastructureUpgradeCostsperyear == null)
            {
                this.InfrastructureUpgradeCostsperyear = 0
            }
            else
            {
            
                this.PeopleSoftEBSUpgradeCostsperyear  = this.PeopleSoftEBSUpgradeCostsperyear + this.InfrastructureUpgradeCostsperyear
            }		
        }
    }

    TierBasedonEmployees = function getTierBasedOnEmployees() {
        if (this.ClientInput.TotalNumberofFinancialUsers >= this.locationData.ERPSmallQ10 
            && this.clientInput.TotalNumberofFinancialUsers <= this.locationData.ERPSmallR10)
        {
            return "Small";
        }
        else if (this.ClientInput.TotalNumberofFinancialUsers >= this.locationData.ERPSmallQ9 
            && this.clientInput.TotalNumberofFinancialUsers <= this.locationData.ERPSmallR9)
        {
            return "Medium";
        }
        else if (this.ClientInput.TotalNumberofFinancialUsers >= this.locationData.ERPSmallQ10
            && this.clientInput.TotalNumberofFinancialUsers <= this.locationData.ERPSmallR10)
        {
            return "Large";
        }
    }

  

    ComplexityFactor = function getComplexityFactor(){
        if (this.TierBasedonEmployees = "Large")
		{
			return 1.3
		}
		else if (this.TierBasedonEmployees = "Medium")
		{
			return 1.15
		}
		else
		{
			return 1
		}
    }
    CustomerPeopleSoftEBSMaintenanceTeamCosts: any;



}