# Razorpay Payment Gateway
This project is used to showcase Razorpay payment gateway integration.

## Prerequisites
* Node.js >= 4.3.x/NPM
* [Razorpay Account](https://dashboard.razorpay.com/#/access/signin)

### How razorpay payment gateway works for checkout feature?
* Get an access key/secret from razorpay after creating an account.
* Pass amount, key etc neccessary details directly form frontend to razorpay library.
* It opens the popup for payment/user authentication.
* After successfull authentication it calls the handler callback along with `payment_id` representing the payment. So user does not need to send their payment details like card number, cvv etc to backend. They just need to send `payment_id`
* After getting `payment_id` backend should execute/capture that payment. by invoking `capture` api with `payment_id` and `amount`.  Amount must be same as authenticated amount. Otherwise razorpay will throw an error.
* You can check the status of payments in razorpay dashboard too.


### Setup

Clone project

```
git clone ssh://git@192.168.1.5:2222/malik_lakhani/Razorpay-payment-gateway.git
```
Install all dependencies

```
npm install
```

Start an application

```
npm start
```