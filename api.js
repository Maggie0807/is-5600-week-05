@@ -17,9 +17,9 @@ function handleRoot(req, res) {
  * @param {object} res
  */
 async function listProducts(req, res) {
   // Extract the limit and offset query parameters
   // Extracting the limit and offset query parameters
   const { offset = 0, limit = 25, tag } = req.query
   // Pass the limit and offset to the Products service
   // Passing the limit and offset to the Products service
   res.json(await Products.list({
     offset: Number(offset),
     limit: Number(limit),
 @@ -45,34 +45,78 @@ async function getProduct(req, res, next) {
 }
 
 /**
  * Create a product
  * @param {object} req 
  * @param {object} res 
  * Create a new product
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 async function createProduct(req, res) {
   console.log('request body:', req.body)
   res.json(req.body)
 async function createProduct (req, res, next) {
   const product = await Products.create(req.body)
   res.json(product)
 }
 
 /**
  * Edit a product
  * @param {object} req
  * @param {object} res
  * @param {function} next
  * Update a product
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 async function editProduct(req, res, next) {
   console.log(req.body)
   res.json(req.body)
 async function editProduct (req, res, next) {
   const change = req.body
   const product = await Products.edit(req.params.id, change)
   res.json(product)
 }
 
 /**
  * Delete a product
  * @param {*} req 
  * @param {*} res 
  * @param {*} next 
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 async function deleteProduct(req, res, next) {
   res.json({ success: true })
 async function deleteProduct (req, res, next) {
   const response = await Products.destroy(req.params.id)
   res.json(response)
 }
 
 /**
  * Create an order
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 async function createOrder (req, res, next) {
   const order = await Orders.create(req.body)
   res.json(orders)
 }
 
 /**
  * List orders
  * @param {Request} req
  * @param {Response} res
  * @param {NextFunction} next
  */
 async function listOrders (req, res, next) {
   const { offset = 0, limit = 25, productId, status } = req.query
 
   const orders = await Orders.list({ 
     offset: Number(offset), 
     limit: Number(limit),
     productId, 
     status 
   })
 
   res.json(orders)
 }
 
 async function editOrder (req, res, next) {
   const change = req.body
   const order = await Orders.edit(req.params.id, change)
   res.json(order) 
 }
 
 async function deleteOrder (req, res, next) {
   const response = await Orders.destroy(req.params.id)
   res.json(response)
 }
 
 module.exports = autoCatch({
 @@ -81,5 +125,9 @@ module.exports = autoCatch({
   getProduct,
   createProduct,
   editProduct,
   deleteProduct
 });
   deleteProduct,
   createOrder,
   listOrders,
   editOrder,
   deleteOrder
 });
 