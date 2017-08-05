import marked from 'marked';
import htmlToReact from 'html-to-react';

const markdownToReact = md => {
  const parsedMarkdown = marked(md);
  return htmlToReact(parsedMarkdown);
};

const intToMoney = num => {
  const cost = parseInt(num, 10);
  if (cost === 0) {
    return 'Free!';
  }
  return `£${cost.toFixed(2)}`;
};

module.exports = {
  markdownToReact,
  intToMoney,
};
