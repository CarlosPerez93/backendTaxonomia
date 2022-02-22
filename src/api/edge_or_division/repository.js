const knex = require("../../database");

const getEdge_or_division = async () => {
  const query = await knex.selct().from("Filo-Division");

  return query;
};

const insertEdge_or_division = async ({
  name_Edge_or_division,
  id_Kingdom,
}) => {
  return knex
    .insert({
      Name_Edge_or_division: name_Edge_or_division,
      id_Kingdom: id_Kingdom,
    })
    .into("filos-divisiones");
};

const updateEdge_or_division = ({
  name_Edge_or_division,
  id_Edge_or_division,
  id_Kingdom,
}) => {
  return knex("filos-divisiones")
    .where({ idEdge_or_division: id_Edge_or_division })
    .update({
      Name_Edge_or_division: name_Edge_or_division,
      id_Kingdom: id_Kingdom,
    });
};

module.exports = {
  getEdge_or_division,
  insertEdge_or_division,
  updateEdge_or_division,
};
