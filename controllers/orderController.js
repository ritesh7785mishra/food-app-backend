const orderModel = require("../models/orderModel");

module.exports.addOrderData = async function addOrderData(req, res) {
  try {
    // console.log(req.body);
    const { order_data, email, order_date } = req.body;
    const newOrderData = [
      {
        order_date: order_date,
      },
      ...order_data,
    ];

    let eId = await orderModel.findOne({
      email: email,
    });

    if (eId === null) {
      try {
        await orderModel
          .create({
            email: email,
            order_data: [newOrderData],
          })
          .then(() => {
            res.json({
              success: true,
            });
          });
      } catch (error) {
        res.json({
          success: false,
          message: error.message,
        });
      }
    } else {
      try {
        await orderModel
          .findOneAndUpdate(
            { email: email },
            {
              $push: { order_data: newOrderData },
            }
          )
          .then(() => {
            res.json({ success: true });
          });
      } catch (error) {
        res.json({
          message: error.message,
          success: false,
        });
      }
    }
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};

module.exports.getUserOrders = async function getUserOrders(req, res) {
  try {
    const { email } = req.body;
    let myData = await orderModel.findOne({ email: email });
    res.json({
      message: "Data retreived successfuly",
      orderData: myData,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
};
