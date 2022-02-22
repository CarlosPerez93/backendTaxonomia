const knex = require("../../database");

const getclass = async () => {
  const query = await knex.selct().from("clases");

  return query;
};

const insertclass = async ({ name_class, id_edge_or_division }) => {
  return knex
    .insert({
      Name_class: name_class,
      id_edge_or_division: id_edge_or_division,
    })
    .into("clases");
};

const updateclass = ({ name_class, id_class, id_edge_or_division }) => {
  return knex("clases")
    .where({ idclass: id_class })
    .update({
      Name_class: name_class,
      id_edge_or_division: id_edge_or_division,
    });
};

module.exports = { getclass, insertclass, updateclass };
