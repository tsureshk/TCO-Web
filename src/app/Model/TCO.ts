import { Analysis } from './Analysis';
import { BeginPage } from './BeginPage';
import { ClientInput } from './ClientInput';
import { ERP } from './ERP';
import {ERPCurrentSpend} from './ERPCurrentSpend';
import {ERPTCOOutput } from './ERPTCOOutput';
import {JDAInput} from './JDAInput';
import {LocationData} from './LocationData';
import { ERPTCOReport } from './ERPTCOReport';
import { TShirtSizing } from './TShirtSizing';
import { TShirtSizingWMS } from './TShirtSizingWMS';
// import { TCOLogin } from './'
export class TCO {
    analysis: Analysis = new Analysis();
    beginPage: BeginPage = new BeginPage();
    clientInput: ClientInput = new ClientInput();
    erp: ERP = new ERP();
    erpCurrentSpend: ERPCurrentSpend = new ERPCurrentSpend();
    erpTCOOutput: ERPTCOOutput = new ERPTCOOutput();
    jdaInput: JDAInput = new JDAInput();
    locationData: LocationData = new LocationData();
    tShirtSizing: TShirtSizing = new TShirtSizing();
    erpTCOReport: ERPTCOReport = new ERPTCOReport();
    tShirtSizingWMS: TShirtSizingWMS = new TShirtSizingWMS();

    licenced = [];
    // amount = [];
}
