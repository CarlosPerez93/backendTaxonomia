const { response } = require("express");
const repo = require("./repository");

const getCaracteristicas_species = async (req, res) => {
  try {
    const data = await repo.getCaracteristicas_species();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const updateCaracteristicas_species = async (req, res) => {
  try {
    const { id_Caracteristicas_species } = req.params;
    const {
      name_Caracteristicas_species,
      head_shape,
      head_coloring,
      trunk_shape,
      limb_shape,
      limb_coloration,
      specific_traits,
      id_Species,
    } = req.body;

    await repo.updateCaracteristicas_species({
      name_Caracteristicas_species,
      head_shape,
      head_coloring,
      trunk_shape,
      limb_shape,
      limb_coloration,
      specific_traits,
      id_Caracteristicas_species,
      id_Species,
    });
    return res.status(200).send(req.body);
  } catch (error) {
    return res.send(error);
  }
};

const insertCaracteristicas_species = async (req, res) => {
  try {
    const {
      name_Caracteristicas_species,
      head_shape,
      head_coloring,
      trunk_shape,
      limb_shape,
      limb_coloration,
      specific_traits,
      id_Caracteristicas_species,
      id_Species,
    } = req.body;

    await respo.insertCaracteristicas_species({
      name_Caracteristicas_species,
      head_shape,
      head_coloring,
      trunk_shape,
      limb_shape,
      limb_coloration,
      specific_traits,
      id_Caracteristicas_species,
      id_Species,
    });
    res.status(200).send(req.body);
  } catch {}
};

module.exports = {
  getCaracteristicas_species,
  insertCaracteristicas_species,
  updateCaracteristicas_species,
};
