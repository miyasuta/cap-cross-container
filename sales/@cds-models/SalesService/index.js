// This is an automatically generated file. Please do not change its contents manually!
const { createEntityProxy } = require('./../_')
// service
const SalesService = { name: 'SalesService' }
module.exports = SalesService
module.exports.SalesService = SalesService
// Orders
module.exports.Order = createEntityProxy(['SalesService', 'Orders'], { target: { is_singular: true } })
module.exports.Orders = createEntityProxy(['SalesService', 'Orders'], { target: { is_singular: false }})
// Customers
module.exports.Customer = createEntityProxy(['SalesService', 'Customers'], { target: { is_singular: true } })
module.exports.Customers = createEntityProxy(['SalesService', 'Customers'], { target: { is_singular: false }})
// events
// actions
// enums
