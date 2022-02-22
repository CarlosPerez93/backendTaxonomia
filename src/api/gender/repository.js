const knex = require("../../database");

const getGender = async () => {
  const query = await knex.selct().from("orden");

  return query;
};

const insertGender = async ({ name_Gender, id_Family }) => {
  return knex
    .insert({ Name_Gender: name_Gender, id_Family: id_Family })
    .into("clases");
};

const updateGender = ({ name_Gender, id_Gender, id_Family }) => {
  return knex("clases")
    .where({ idGender: id_Gender })
    .update({ Name_Gender: name_Gender, id_Family: id_Family });
};

module.exports = { getGender, insertGender, updateGender };
