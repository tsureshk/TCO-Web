export class BeginPage {
    public clientName = 'Amway';
    clientUrl: string;
    clientFirstName: string;
    clientLastName: string;
    clientEmail: string;
    clientPhone: string;

    customerName: string;
    customerUrl: string;
    customerFirstName: string;
    customerLastName: string;
    customerEmail: string;
    customerPhone: string;

    public getClientName() : string
    {
        return this.clientName;
    }
}
