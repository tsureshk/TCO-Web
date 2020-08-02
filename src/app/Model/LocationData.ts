export class LocationData{
    ERPLargeQ8 = 1000;
    ERPMediumQ9 = 300;

    ERPSmallQ10 = 0;
    ERPLargeR8 = 100000;
    ERPMediumR9= 999;

    ERPSmallR10 =299;
    ERPLargeText = "Large";

    ERPLargeMedium = "Medium";
    ERPLargeSmall = "Small";
    CostperfunctionalFTEsTier1I2 = 150000;
    CostperDeveloperFTEsTier1I3 = 135000;
    CostperSystemAdminDBAFTEsTierI4 = 135000;
    CostperConsultantsContractorsTierI5 = 225000;
    CostperfunctionalFTEsTier1J2 = 135000;
    CostperDeveloperFTEsTier1J3 = 115000;
    CostperSystemAdminDBAFTEsTierJ4 = 115000;
    CostperConsultantsContractorsTierJ5 = 205000;
    CostperfunctionalFTEsTier1K2 = 115000;
    CostperDeveloperFTEsTier1K3 = 100000;
    CostperSystemAdminDBAFTEsTierK4 = 100000;
    CostperConsultantsContractorsTierK5 = 195000;
    Tier1N2 = 20;
    Tier2N3 = 16;
    Tier3N4 = 12;

    Tier2N4 = 16;
    Tier3N5 = 12;
    CostperSystemAdminDBAFTEsTier1I4 = 135000;
    CostperConsultantsContractorsTier1I5 =  225000;
    CostperfunctionalFTEsTier2j2 =  115000;	
    CostperDeveloperFTEsTier2j3 = 115000;
    CostperSystemAdminDBAFTEsTier2j4 = 115000;
    CostperConsultantsContractorsTier2j5 = 205000;
    CostperfunctionalFTEsTier3k2 = 115000;
    CostperDeveloperFTEsTier3k3 =  100000;
    CostperSystemAdminDBAFTEsTier3k4 = 100000;
    CostperConsultantsContractorsTier3k5 =  195000 

    CostperfunctionalFTEsTier1I8 = this.CostperfunctionalFTEsTier1I2 * (this.Tier1N2 / 100);
    CostperDeveloperFTEsTier1I9 = this.CostperDeveloperFTEsTier1I3 * (this.Tier1N2 / 100);
    CostperSystemAdminDBAFTEsTierI10 = this.CostperSystemAdminDBAFTEsTier1I4 * (this.Tier1N2 / 100);

    CostperConsultantsContractorsTierI11 = this.CostperConsultantsContractorsTier1I5 * (this.Tier1N2 / 100);
    CostperfunctionalFTEsTier2I8 = this.CostperfunctionalFTEsTier2j2 * (this.Tier2N4 / 100);

    CostperDeveloperFTEsTier2I9 = this.CostperDeveloperFTEsTier2j3 * (this.Tier2N4 / 100);

    CostperSystemAdminDBAFTEsTier2I10 = this.CostperSystemAdminDBAFTEsTier2j4 * (this.Tier2N4 / 100);

    CostperConsultantsContractorsTier2j11 = this.CostperConsultantsContractorsTier2j5 * (this.Tier2N4 / 100);

    CostperfunctionalFTEsTier3k8 = this.CostperfunctionalFTEsTier3k2 * (this.Tier3N5 / 100);
    CostperDeveloperFTEsTier3k9 = this.CostperDeveloperFTEsTier3k3 * (this.Tier3N5 / 100);

    CostperSystemAdminDBAFTEsTier3k10 = this.CostperSystemAdminDBAFTEsTier3k4 * (this.Tier3N5 / 100);
    CostperConsultantsContractorsTier3k11 = this.CostperConsultantsContractorsTier3k5 * (this.Tier3N5 / 100);
    SumOfSCM = 15956700.00 ;
    FieldDiscountPercentage = -5;
    FieldAddedPercentage = 5;
    CostperfunctionalFTEsTier3k10: any;
    CostperfunctionalFTEsTier3k11: any;

}