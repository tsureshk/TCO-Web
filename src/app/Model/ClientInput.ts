import { BeginPage } from './BeginPage';
import { concat } from 'rxjs';

export class ClientInput {
    beginPage: BeginPage = new BeginPage();

    UpgradeType1 = 'Transformation'; // Required
    Duration1 = 52;  // Required
    UpgradePerformedInternallyOrUsed1 = 1; // Required
    ApplicationUpgradeDate1: Date; // required
    UpgradeCost1 = '10000'; // Required
    SelectedTier = '';

    UpgradeType2 = 'Transformation'; // Required
    Duration2 = 1; // Required
    UpgradePerformedInternallyOrUsed2 = 0; // Required
    ApplicationUpgradeDate2: Date; // Required
    UpgradeCost2 = '10000'; // Required

    NoOfSiteImpYear1 = 2; // Required
    NoOfSiteImpYear2 = 1; // Required
    NoOfSiteImpYear3 = 1; // Required

    annualSpendHostingFee = 0;
    applicationHostingFee = 0;

    annualInhouseCost = 1200000;
    totalInhouseServer = 2;

    TotalAnnualApplicationSupport: string;
    CurrentOnpremiseApplication = 'WMS';
    CurrentOnpremiseApplicationVersion = '2018.1';
    PrimaryLocation = 'Oregen';
    LevelofCustomizationEstimated = 'Low';
    TotalNumberofEmployeesFTEs = '780';

    CurrentOnpremiseApplicationDetail: string;
    TotalNumberofFinancialUsers = 100;
    overYear = '0';
    CorporateMarginalTaxRate = '0';
    TotalNumberofManagedResources = '0';
    NumberofCountriesinScope = '8';
    TotalNumberofInvoiceLineItemsperYear = '$ 1,30,035';
    TotalNumberofExpenseReportsperYear = '0';
    TotalAnnualApplicationSupportFeesPayabletoJDA = 700000; // Required
    annualCosttomaintainthephysicalhardware: string;
    NumberofBusinessFTEs = '4';
    NumberofITorTechnologyDeveloperFTEs = '1';
    NumberofSystemAdminDBAFTEs = '1';
    NumberofConsultantsContractors = '11';
    sporadicallyhireconsultantscontractors = 'Yes';
    TotalconsultantContractorcostperyear = '120000';
    annualspend: string;
    annualhostingfee: string;
    UpgradeType = 'Transformation';
    DurationInWeeks = '12';
    UpgradePerformedInternallyOrUsed = 'Partner';

    ApplicationUpgrade1Date = '10-Feb-18';
    ApplicationUpgrade2Date = '';
    Upgrade1Cost = '120000';
    Upgrade2Cost = 0;


    TotalNumberofPhysicalServers: Int16Array;
    Financials: string;
    InfrastructureUpgradeType1: 'Technical';
    InfrastructureDurationInWeek: 12;
    Upgradeperformedinternally: 'Partner';

    InfrastructureUpgrade1Cost = '$ 6,00,000';
    InfrastructureUpgrade2Cost: Int32Array;
    InfrastructureUpgrade1Date = '05-Jan-16';
    InfrastructureUpgrade2Date: Date;

    Licenced = [];
    CurrentlyBeingUsed = [];
    ftes = [];
    LevelofCustomization = [];

    public getCurrentOnpremiseApplicationDetail() {
        return concat(this.CurrentOnpremiseApplication, this.Financials);
    }

    public primaryLocation() {

        if (this.beginPage.clientName == null) {
            return 'Primary Location (HQ State)';
        } else {
            return concat(this.beginPage.clientName, '\'s', ' Primary Location (HQ State)');
        }
    }

    public getOnPermisesCostString() {
        if (this.beginPage.customerName != null) {
            return concat('Section B: ', this.beginPage.customerName, '\'s', 'On-Premise Costs');
        } else {
            concat('Section B: ', ' On-Premise Costs');
        }
    }

    public getFinicialUpgrade1CostString() {
        if (this.beginPage.customerName != null) {
            return concat(this.beginPage.customerName, '\'s', this.CurrentOnpremiseApplication, 'On-Premise Costs');

        } else {
            return concat('Financial Upgrade Costs');
        }
    }

    public getFinicialUpgrade2CostString() {
        if (this.beginPage.customerName != null) {
            return concat(this.beginPage.customerName, '\'s', this.CurrentOnpremiseApplication, 'Last 2 Upgrade Costs');
        } else {
            return concat('Financial Upgrade Costs');
        }
    }
}
