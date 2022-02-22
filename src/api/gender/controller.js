const { response } = require("express");
const repo = require("./repository");

const getGender = async (req, res) => {
  try {
    const data = await repo.getGender();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const updateGender = async (req, res) => {
  try {
    const { id_Gender } = req.params;
    const { name_Gender, id_Family } = req.body;

    await repo.updateGender({ name_Gender, id_Gender, id_Family });
    return res.status(200).send(req.body);
  } catch (error) {
    return res.send(error);
  }
};

const insertGender = async (req, res) => {
  try {
    const { name_Gender, id_Family } = req.body;

    await respo.insertGender({ name_Gender, id_Family });
    res.status(200).send(req.body);
  } catch {}
};

module.exports = { getGender, insertGender, updateGender };
