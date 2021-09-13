using master.orgs as db from '../db/data-model';

service MasterOrgsService {
    entity Plants as projection on db.Plants;
    entity Customers as projection on db.Customers;
}