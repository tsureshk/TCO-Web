export class TShirtSizingWMS {
    ShirtSize = 'Small'; // Required
    Purpose = 'Re-Implementation'; // Required
    LinesofBusiness = 'Direct'; // Required
    SCMNetworkReach = 'Country';
    NoOfDockDoors = 3;
    AverageTruckPerDay = 8;
    NoOfOrdersPerDay = 30000;
    NoOfProductHierarchy = 10;
    NumberofPalletssPerOrderLine  = 1500;
    NumberofManufacturingUnits = 4;
    NumberofWarehouses = 15;
    NumberofDCsFCs = 40;
    GlobalProcurementComplexity = 'Simple';
    GreenLogistics = 'Haz MaterialMgmt';
    DiverseSupplierLocation = 'No';
    ApproxNumberofProductMods = 10;
    ApproxNumberofCustomLogic = 15;
    NoofStandardInterfaces = 5;
    NumberofNonStandardInterfaces = 5;
    NumberOfSitesTobeImplemented = 2;

    Total: number;
    CurrentType: string;
    DurationOfImplementation: string;
}
