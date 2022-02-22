const knex = require("../../database");

const getCaracteristicas_species = async () => {
  const query = await knex.selct().from("caracteristicas_especies");

  return query;
};

const insertCaracteristicas_species = async ({
  name_Caracteristicas_species,
  id_Caracteristicas_species,
  head_shape,
  head_coloring,
  trunk_shape,
  limb_shape,
  limb_coloration,
  specific_traits,
  id_Species,
}) => {
  return knex
    .insert({
      name_Caracteristicas_species: name_Caracteristicas_species,
      id_Caracteristicas_species: id_Caracteristicas_species,
      head_shape: head_shape,
      head_coloring: head_coloring,
      trunk_shape: trunk_shape,
      limb_shape: limb_shape,
      limb_coloration: limb_coloration,
      specific_traits: specific_traits,
      id_Species: id_Species,
    })
    .into("caracteristicas_especies");
};

const updateCaracteristicas_species = ({
  name_Caracteristicas_species,
  head_shape,
  head_coloring,
  trunk_shape,
  limb_shape,
  limb_coloration,
  specific_traits,
  id_Caracteristicas_species,
  id_Species,
}) => {
  return knex("caracteristicas_especies")
    .where({ idCaracteristicas_species: id_Caracteristicas_species })
    .update({
      name_Caracteristicas_species: name_Caracteristicas_species,
      id_Caracteristicas_species: id_Caracteristicas_species,
      head_shape: head_shape,
      head_coloring: head_coloring,
      trunk_shape: trunk_shape,
      limb_shape: limb_shape,
      limb_coloration: limb_coloration,
      specific_traits: specific_traits,
      id_Species: id_Species,
    });
};

module.exports = {
  getCaracteristicas_species,
  insertCaracteristicas_species,
  updateCaracteristicas_species,
};
