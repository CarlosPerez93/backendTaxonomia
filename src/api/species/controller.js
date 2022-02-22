const { response } = require("express");
const repo = require("./repository");

const getSpecies = async (req, res) => {
  try {
    const data = await repo.getSpecies();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const updateSpecies = async (req, res) => {
  try {
    const { id_Species } = req.params;
    const {
      name_Species,
      common_name,
      registration_date,
      photo,
      cantidad,
      id_Gender,
    } = req.body;

    await repo.updateSpecies({
      name_Species,
      id_Species,
      common_name,
      registration_date,
      photo,
      cantidad,
      id_Gender,
    });
    return res.status(200).send(req.body);
  } catch (error) {
    return res.send(error);
  }
};

const insertSpecies = async (req, res) => {
  try {
    const {
      name_Species,
      common_name,
      registration_date,
      photo,
      cantidad,
      id_Gender,
    } = req.body;

    await respo.insertSpecies({
      name_Species,
      common_name,
      registration_date,
      photo,
      cantidad,
      id_Gender,
    });
    res.status(200).send(req.body);
  } catch {}
};

module.exports = { getSpecies, insertSpecies, updateSpecies };
