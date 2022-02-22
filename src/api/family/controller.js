const { response } = require("express");
const repo = require("./repository");

const getFamily = async (req, res) => {
  try {
    const data = await repo.getFamily();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const updateFamily = async (req, res) => {
  try {
    const { id_Family } = req.params;
    const { name_Family, id_Order } = req.body;

    await repo.updateFamily({ name_Family, id_Family, id_Order });
    return res.status(200).send(req.body);
  } catch (error) {
    return res.send(error);
  }
};

const insertFamily = async (req, res) => {
  try {
    const { name_Family, id_Order } = req.body;

    await respo.insertFamily({ name_Family, id_Order });
    res.status(200).send(req.body);
  } catch {}
};

module.exports = { getFamily, insertFamily, updateFamily };
