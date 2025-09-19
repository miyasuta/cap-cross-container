// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../_')
// service
const MasterPartnerService = { name: 'MasterPartnerService' }
module.exports = MasterPartnerService
module.exports.MasterPartnerService = MasterPartnerService
// Customers
module.exports.Customer = createEntityProxy(['MasterPartnerService', 'Customers'], { target: { is_singular: true } })
module.exports.Customers = createEntityProxy(['MasterPartnerService', 'Customers'], { target: { is_singular: false }})
// events
// actions
// enums
