namespace master.orgs;

entity Plants {
    key ID: Integer;
    name: String;
    customer: Association to Customers
}

@cds.persistence.exists
entity Customers {
    key ID: Integer;
    name: String
}

