using accounting from '../db/data-model';
using { MasterPartnersService } from './external/MasterPartnersService';

service AccountingService {
    entity Invoices as projection on accounting.Invoices;
    entity Customers as projection on MasterPartnersService.Customers;
}