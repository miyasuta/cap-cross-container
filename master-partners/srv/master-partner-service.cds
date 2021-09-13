using master.partners as db from '../db/data-model';

service MasterPartnerService {
    entity Customers as projection on db.Customers;
}