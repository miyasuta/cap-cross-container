namespace master.partners;

entity Vendors {
    key ID: Integer;
    name: String;
    customer: Association to Customers
}

@cds.persistence.exists
entity Customers {
    key ID: Integer;
    name: String
}