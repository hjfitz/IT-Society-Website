import marked from 'marked';
import htmlToReact from 'html-to-react';

const parser = new htmlToReact.Parser();

/**
 * Used so that the response from contentful - in md
 * can be changed in to HTML
 * @param  {String} md Markdown string
 * @return {ReactDOM}  React Element with parsed md
 */
const markdownToReact = md => {
  if (md !== undefined) {
    const parsedMarkdown = marked(md);
    return parser.parse(parsedMarkdown);
  }
  console.warn('undefined passed to markdownToReact');
  return 'error';
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
