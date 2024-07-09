function placeOrder(userId, cartItems) {
    fetchUserInfo(userId, function(userData) {
      validateCart(cartItems, function(valid) {
        if (valid) {
          calculateShippingCost(userData.address, cartItems, function(shippingCost) {
            processPayment(userData.paymentInfo, shippingCost, function(paymentStatus) {
              if (paymentStatus === 'success') {
                createOrder(userData, cartItems, shippingCost, function(orderId) {
                  sendOrderConfirmationEmail(userData.email, orderId, function(emailSent) {
                    if (emailSent) {
                      console.log("Order placed successfully!");
                    } else {
                      console.error("Failed to send confirmation email.");
                    }
                  });
                });
              } else {
                console.error("Payment failed.");
              }
            });
          });
        } else {
          console.error("Cart validation failed.");
        }
      });
    });
  }
  

  function placeOrder(userId, cartItems) {
    return fetchUserInfo(userId)
      .then((userData) => validateCart(cartItems))
      .then((valid) => {
        if (valid) {
          return calculateShippingCost(userData.address, cartItems)
            .then((shippingCost) => processPayment(userData.paymentInfo, shippingCost))
            .then((paymentStatus) => {
              if (paymentStatus === 'success') {
                return createOrder(userData, cartItems, shippingCost)
                  .then((orderId) => sendOrderConfirmationEmail(userData.email, orderId));
              } else {
                throw new Error("Payment failed.");
              }
            });
        } else {
          throw new Error("Cart validation failed.");
        }
      })
      .then(() => console.log("Order placed successfully!"))
      .catch((error) => console.error("Error placing order:", error));
  }

  
  async function placeOrder(userId, cartItems) {
    try {
      const userData = await fetchUserInfo(userId);
      const valid = await validateCart(cartItems);
      if (!valid) {
        throw new Error("Cart validation failed.");
      }
  
      const shippingCost = await calculateShippingCost(userData.address, cartItems);
      const paymentStatus = await processPayment(userData.paymentInfo, shippingCost);
      if (paymentStatus !== 'success') {
        throw new Error("Payment failed.");
      }
  
      const orderId = await createOrder(userData, cartItems, shippingCost);
      await sendOrderConfirmationEmail(userData.email, orderId);
      console.log("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
    }
  }
  