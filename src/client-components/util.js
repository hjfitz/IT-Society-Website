import marked from 'marked';
import htmlToReact from 'html-to-react';

const markdownToReact = md => {
  const parsedMarkdown = marked(md);
  return htmlToReact(parsedMarkdown);
};

module.exports = {
  markdownToReact,
};
