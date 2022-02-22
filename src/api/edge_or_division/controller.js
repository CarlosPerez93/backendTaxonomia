const { response } = require("express");
const repo = require("./repository");

const getEdge_or_division = async (req, res) => {
  try {
    const data = await repo.getEdge_or_division();
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
  }
};

const updateEdge_or_division = async (req, res) => {
  try {
    const { id_edge_or_division } = req.params;
    const { name_edge_or_division, id_kingdonm_fk } = req.body;

    await repo.updateEdge_or_division({
      name_edge_or_division,
      id_edge_or_division,
      id_kingdonm_fk,
    });
    return res.status(200).send(req.body);
  } catch (error) {
    return res.send(error);
  }
};

const insertEdge_or_division = async (req, res) => {
  try {
    const { name_edge_or_division, id_kingdonm_fk } = req.body;

    await respo.insertEdge_or_division({
      name_edge_or_division,
      id_kingdonm_fk,
    });
    res.status(200).send(req.body);
  } catch {}
};

module.exports = {
  getEdge_or_division,
  insertEdge_or_division,
  updateEdge_or_division,
};
