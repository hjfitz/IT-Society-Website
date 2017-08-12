import marked from 'marked';
import htmlToReact from 'html-to-react';

const parser = new htmlToReact.Parser();

const markdownToReact = md => {
  console.log(md);
  if (md !== undefined) {
    const parsedMarkdown = marked(md);
    console.log(parsedMarkdown);
    return parser.parse(parsedMarkdown);
  }
  console.warn('undefined passed to markdownToReact');
  return 'a';
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
