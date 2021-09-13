namespace accounting;
using { MasterPartnersService } from '../srv/external/MasterPartnersService';

entity Invoices {
    key ID: Integer;
    amount: Integer;
    customer: Association to MasterPartnersService.Customers    
}

