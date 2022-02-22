const { response } = require("express");
const repo = require("./repository");

const getOrder = async (req, res) => {
  try {
    const data = await repo.getOrder();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const updateOrder = async (req, res) => {
  try {
    const { id_Order } = req.params;
    const { name_Order, id_Class } = req.body;

    await repo.updateOrder({ name_Order, id_Order, id_Class });
    return res.status(200).send(req.body);
  } catch (error) {
    return res.send(error);
  }
};

const insertOrder = async (req, res) => {
  try {
    const { name_Order, id_Class } = req.body;

    await respo.insertOrder({ name_Order, id_Class });
    res.status(200).send(req.body);
  } catch {}
};

module.exports = { getOrder, insertOrder, updateOrder };
