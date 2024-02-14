const express = require('express')
const router = express.Router()
const stockCtrl = require('../../controllers/api/stocks')

// Index
router.get('/', stockCtrl.index, stockCtrl.jsonStocks)
// Delete
router.delete('/:id', stockCtrl.destroy, stockCtrl.jsonStock)
// Update
router.put('/:id', stockCtrl.update, stockCtrl.jsonStock)
// Create
router.post('/', stockCtrl.create, stockCtrl.jsonStock)
// Show
router.get('/:id', stockCtrl.show, stockCtrl.jsonStock)

module.exports = router
