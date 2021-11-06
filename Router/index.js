const express = require('express');

const route = express.Router();

const locationControlller = require('../Controllers/locations');
const mealTypeController = require('../Controllers/mealTypes');
const restaurantControler = require('../Controllers/restaurant');
const menuItemsController = require('../Controllers/items');
const userController = require('../Controllers/users');
var paymentGatewayController = require('../Controllers/PaymentGateway');
//const orders = require.apply('../Controllers/order');

route.get('/locations', locationControlller.getLocations);
route.get('/mealtypes', mealTypeController.getMealTypes);
route.get('/restaurants/:locId', restaurantControler.getRestaurantByLocation);
route.post('/filter', restaurantControler.restaurantFilter);
route.get('/restaurant/:resId', restaurantControler.getRestaurantDetailsById);
route.get('/menuitems/:resId', menuItemsController.getMenuItemsByResId);
route.post('/usersignup', userController.userSignUp);
route.post('/login', userController.login);
route.post('/payment', paymentGatewayController.payment);
route.post('/callback', paymentGatewayController.callback);
//route.post('/orders', orders.saveOrderDetails);
// save order details 
// get orders by user Id

module.exports = route;