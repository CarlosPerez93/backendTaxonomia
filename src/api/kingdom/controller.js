const { response } = require("express");
const repo = require("./repository");

const getKingdoms = async (req, res) => {
  try {
    const data = await repo.getKingdoms();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const updateKingdom = async (req, res) => {
  try {
    const { id_Kingdom } = req.params;
    const { name_Kingdom } = req.body;

    await repo.updateKingdom({ name_Kingdom, id_Kingdom });
    return res.status(200).send(req.body);
  } catch (error) {
    return res.send(error);
  }
};

const insertKingdom = async (req, res) => {
  try {
    const { name_Kingdom } = req.body;

    await respo.insertKingdom({ name_Kingdom });
    res.status(200).send(req.body);
  } catch {}
};

module.exports = { getKingdoms, insertKingdom, updateKingdom };
