const repo = require("./repository");

const getUsers = async (req, res) => {
  try {
    const data = await repo.getUsers();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, lastname, email } = req.body;

    await repo.updateUser({ name, lastname, email, id });
    return res.status(200).send(req.body);
  } catch (error) {
    return res.send(error);
  }
};

const insertUser = async (req, res) => {
  try {
    const { name, lastname, email } = req.body;

    await respo.insertUser({ name, lastname, email });
    res.status(200).send(req.body);
  } catch { }
};

module.exports = { getUsers, insertUser, updateUser };
