// get back the class if want custom extend from class
// otherwise use instances of class for emitting and handling events

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of order of events
// additional arguments
// built-in modules utilize it

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here`)
})

customEmitter.emit('response', 'john', 34)

customEmitter.on('response', (customerId, customerName, orderId, productId, productName , productQuantity) => {
    console.log(`The order No. ${orderId} of product name ${productName} with the id of ${productId} has been delivered in the quantity of ${productQuantity} to the customer No. ${customerId} bearing name of ${customerName}`)    
})

customEmitter.emit('response', 5, 'John', 6, 7, 'Laptop', 8)