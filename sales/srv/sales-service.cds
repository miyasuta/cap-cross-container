using sales from '../db/data-model';

service SalesService {
    entity Orders as projection on sales.Orders;
    entity Customers as projection on sales.Customers;
    entity Suppliers as projection on sales.Suppliers;
}