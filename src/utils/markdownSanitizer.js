const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();

  // Convert markdown to html
  const convertedHtml = marked.parse(markdownContent);

  // Sanitize html
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });

  // Convert the sanitized html back to backup
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
