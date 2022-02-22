const { response } = require("express");
const repo = require("./repository");

const getClass = async (req, res) => {
  try {
    const data = await repo.getClass();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const updateClass = async (req, res) => {
  try {
    const { id_Class } = req.params;
    const { name_Class, id_edge_or_division } = req.body;

    await repo.updateClass({ name_Class, id_Class, id_edge_or_division });
    return res.status(200).send(req.body);
  } catch (error) {
    return res.send(error);
  }
};

const insertClass = async (req, res) => {
  try {
    const { name_Class, id_edge_or_division } = req.body;

    await respo.insertClass({ name_Class, id_edge_or_division });
    res.status(200).send(req.body);
  } catch {}
};

module.exports = { getClass, insertClass, updateClass };
