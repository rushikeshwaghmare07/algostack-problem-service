const logger = require("../config/logger.config");
const NotFound = require("../errors/notFound.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFound("Problem", id);
      }

      return problem;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async updateProblem(id, updatedData) {
    try {
      const updatedProblem = await Problem.findByIdAndUpdate(id,  updatedData, {new: true});
      if (!updatedProblem) {
        throw new NotFound("Problem", id);
      }

      return updatedProblem;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(id);
      if (!deletedProblem) {
        throw new NotFound("Problem", id);
      }
  
      return deletedProblem;
    } catch (error) {
      logger.error(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
