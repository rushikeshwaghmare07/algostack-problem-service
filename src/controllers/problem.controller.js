const NotImplemented = require("../errors/notImplemented.error");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repositories");
const { StatusCodes } = require("http-status-codes");

const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: {},
      data: newProblem,
    });
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res, next) {
  try {
    throw new NotImplemented("Get Problem");
  } catch (error) {
    next(error);
  }
}

function getProblems(req, res, next) {
  try {
    throw new NotImplemented("Get Problems");
  } catch (error) {
    next(error);
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("Delete Problem");
  } catch (error) {
    next(error);
  }
}

function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("Update Problem");
  } catch (error) {
    next(error);
  }
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
};
