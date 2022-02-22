const knex = require("../../database");

const getFamily = async () => {
  const query = await knex.selct().from("orden");

  return query;
};

const insertFamily = async ({ name_Family, id_Order }) => {
  return knex
    .insert({ Name_Family: name_Family, id_Order: id_Order })
    .into("clases");
};

const updateFamily = ({ name_Family, id_Family, id_Order }) => {
  return knex("clases")
    .where({ idFamily: id_Family })
    .update({ Name_Family: name_Family, id_Order: id_Order });
};

module.exports = { getFamily, insertFamily, updateFamily };
