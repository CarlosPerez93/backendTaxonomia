const knex = require("../../database");

const getSpecies = async () => {
  const query = await knex.selct().from("orden");

  return query;
};

const insertSpecies = async ({
  name_Species,
  common_name,
  registration_date,
  photo,
  cantidad,
  id_Species,
}) => {
  return knex
    .insert({
      Name_Species: name_Species,
      common_name: common_name,
      registration_date: registration_date,
      photo: photo,
      cantidad: cantidad,
      id_Species: id_Species,
    })
    .into("clases");
};

const updateSpecies = ({
  name_Species,
  id_Species,
  common_name,
  registration_date,
  photo,
  cantidad,
  id_Species,
}) => {
  return knex("clases")
    .where({ idSpecies: id_Species })
    .update({
      Name_Species: name_Species,
      common_name: common_name,
      registration_date: registration_date,
      photo: photo,
      cantidad: cantidad,
      id_Species: id_Species,
    });
};

module.exports = { getSpecies, insertSpecies, updateSpecies };
