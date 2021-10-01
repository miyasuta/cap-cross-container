const cds = require("@sap/cds");

module.exports = async function () {
    const MasterPartnersService = await cds.connect.to('MasterPartnersService')

    this.on('READ', 'Customers', async(req) => {
        return await MasterPartnersService.tx(req).run(req.query);
    })

    this.on('READ', 'Invoices', async (req, next) => {
        var data = await next();
        const expand = req.req.query['$expand']
        if(expand && expand === 'customer') {
            data = await _getCustomers(data)
        }
        return data
    }) 

}

const _getCustomers = async function (data) {
    const MasterPartnersService = await cds.connect.to('MasterPartnersService')
    const ids = data.reduce((curr, d) => {
        curr.push(d.customer_ID)
        return curr
    }, []).filter(d => !!d)

    const qry = SELECT.from('MasterPartnersService.Customers').where('ID in ', ids);
    const res = await MasterPartnersService.tx().run(qry)

    data.map(d => {
        d.customer = res.filter(r => r.ID === d.customer_ID)[0]
    })
    return data
} 

