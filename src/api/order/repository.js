const knex = require("../../database");

const getOrder = async () => {
  const query = await knex.selct().from("orden");

  return query;
};

const insertOrder = async ({ name_Order, id_Class }) => {
  return knex
    .insert({ Name_Order: name_Order, id_Class: id_Class })
    .into("clases");
};

const updateOrder = ({ name_Order, id_Order, id_Class }) => {
  return knex("clases")
    .where({ idOrder: id_Order })
    .update({ Name_Order: name_Order, id_Class: id_Class });
};

module.exports = { getOrder, insertOrder, updateOrder };
