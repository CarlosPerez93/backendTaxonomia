const knex = require("../../database");

const getUsers = async () => {
  const query = await knex.selct().from("usuarios");

  return query;
};

const insertUser = async ({ name, lastname, email }) => {
  return knex
    .insert({ Name: name, LastName: lastname, Email: email })
    .into("usuarios");
};

const updateUser = ({ name, lastname, email, id }) => {
  return knex("usuarios")
    .where({ idUsuario: id })
    .update({ Name: name, LastName: lastname, Email: email });
};

module.exports = { getUsers, insertUser, updateUser };
