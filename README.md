# cap-cross-container
CAP Cross container examples 

This project is for the following blog post:
https://blogs.sap.com/2021/10/03/how-to-share-tables-across-different-cap-projects/

# How to run this project
## 1. Deploy each application
```
git clone https://github.com/miyasuta/cap-cross-container.git
cd cap-cross-container
```

### 1.1. master-partners
```
cd master-partners
npm install
cds up
```

### 1.2. master-partners-vendors
```
cd master-partners-vendors
npm install
cds up
```

### 1.3. master-orgs
```
cd master-orgs
npm install
cds up
```

### 1.4. sales
```
cd sales
npm install
cds up
```

### 1.5. accounting (Prerequisites required)

**Note:** The accounting service requires cross-container access to master data. Complete the following prerequisites before deploying:

**Assumption:** A Cloud Foundry space named "dev2" exists.

#### Prerequisites for Cloud Foundry deployment:
1. **Create service key for master-db:**
   ```
   cf create-service-key master-db grantor-key
   ```

2. **Export and modify service key:**
   ```
   cf service-key master-db grantor-key > grantor-key.json
   ```
   Edit `grantor-key.json`:
   - Remove lines before the first curly bracket
   - Remove the outer `{"credentials": ...}` wrapper
   - Add `"tags": "hana"` property

3. **Switch to dev2 space and create user-provided service:**
   ```
   cf target -s dev2
   cf create-user-provided-service ups-master-db -p grantor-key.json
   ```

#### Deploy to Cloud Foundry:
```
cd accounting
npm install
cds up
``` 

## 2. Verify Services are Running
### 2.1. master-partners-vendors 
```
<path-to-service>/odata/v4/master-partner-vendor/Vendors?$expand=customer
```

### 2.2. master-orgs
```
<path-to-service>/odata/v4/master-orgs/Plants?$expand=customer
```

### 2.3. sales
```
<path-to-service>/odata/v4/sales/Orders?$expand=customer
```

### 2.4. accounting
```
<path-to-service>/odata/v4/accounting/Invoices?$expand=customer
```



