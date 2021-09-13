module.exports = async function () {
    const MasterPartnersService = await cds.connect.to('MasterPartnersService')

    this.on('READ', 'Customers', async(req) => {
        return await MasterPartnersService.tx(req).run(req.query);
    })

    this.after('READ', 'Invoices', async (data) => {
        console.log(data);
    })

}