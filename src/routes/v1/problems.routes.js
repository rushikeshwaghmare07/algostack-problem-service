const express = require("express");

const { problemController } = require("../../controllers");

const problemRouter = express.Router();

problemRouter.get("/ping", problemController.pingProblemController);
problemRouter.post("/", problemController.addProblem);
problemRouter.get("/:id", problemController.getProblem);
problemRouter.get("/", problemController.getProblems);
problemRouter.put("/:id", problemController.updateProblem);
problemRouter.delete("/:id", problemController.deleteProblem);

module.exports = problemRouter;
