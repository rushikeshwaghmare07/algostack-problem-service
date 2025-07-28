const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // Sanitize the markdown and description
    problemData.description = sanitizeMarkdownContent(problemData.description);

    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(problemId) {
    const problem = await this.problemRepository.getProblem(problemId);
    return problem;
  }

  async updateProblem(id, updatedData) {
    const updatedProblem = await this.problemRepository.updateProblem(id, updatedData);
    return updatedProblem;
  }

  async deleteProblem(id) {
    const deletedProblem = await this.problemRepository.deleteProblem(id);
    return deletedProblem;
  }
}

module.exports = ProblemService;
