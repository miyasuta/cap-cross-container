namespace sales;

entity Orders {
    key ID: Integer;
    amount: Integer;
    customer: Association to Customers;
}

// @cds.persistence.exists
@cds.persistence.skip
entity Customers {
    key ID: Integer;
    name: String;
}