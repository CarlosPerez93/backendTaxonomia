const knex = require("../../database");

const getKingdoms = async () => {
  const query = await knex.selct().from("reinos");

  return query;
};

const insertKingdom = async ({ name_Kingdom }) => {
  return knex.insert({ Name_Kingdom: name_Kingdom }).into("reinos");
};

const updateKingdom = ({ name_Kingdom, id_Kingdom }) => {
  return knex("reinos")
    .where({ idKingdom: id_Kingdom })
    .update({ Name_Kingdom: name_Kingdom });
};

module.exports = { getKingdoms, insertKingdom, updateKingdom };
