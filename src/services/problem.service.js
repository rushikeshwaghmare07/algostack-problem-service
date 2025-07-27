const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      // Sanitize the markdown and description
      problemData.description = sanitizeMarkdownContent(
        problemData.description
      );

      const problem = this.problemRepository.createProblem(problemData);

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemService;
