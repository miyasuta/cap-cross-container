const cds = require('@sap/cds')

module.exports = class SalesService extends cds.ApplicationService { init() {

  const { Orders, Customers } = cds.entities('SalesService')

  this.on ('getCustomerNumber', async (req) => {
    console.log('On getCustomerNumber', req.data)
    const db = await cds.connect.to('db')
    const q = `SELECT "CUSTOMER_ID".NEXTVAL FROM DUMMY`
    const result = await db.run(q)
    console.log('Result', result)
    return result[0]['CUSTOMER_ID.NEXTVAL'].toString()
  })

  return super.init()
}}
