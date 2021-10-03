using master.partners as db from '../db/data-model';

service MasterPartnerVendorService {
    entity Vendors as projection on db.Vendors;
    entity Customers as projection on db.Customers;
}