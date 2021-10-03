using accounting from '../db/data-model';

service AccountingService {
    entity Invoices as projection on accounting.Invoices;
    entity Customers as projection on accounting.Customers;
}