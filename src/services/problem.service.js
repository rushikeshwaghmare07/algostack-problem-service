const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    // Sanitize the markdown and description
    problemData.description = sanitizeMarkdownContent(problemData.description);

    const problem = this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = this.problemRepository.getAllProblems();
    return problems;
  }
}

module.exports = ProblemService;
