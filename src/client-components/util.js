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

/**
 * Changes a string to a Number - and prepends with '£'
 * If the value's '0', return free
 * @param {String} num A string to convers to a 2dp number
 */
const intToMoney = num => {
  const cost = parseInt(num, 10);
  if (cost === 0) {
    return 'Free!';
  }
  return `£${cost.toFixed(2)}`;
};


const updateNav = () => {
  
  const navTexts = document.querySelectorAll('.nav-link');
  const navLogo = document.querySelector('.brand-logo');
  const navButton = document.querySelector('.button-collapse');
  const textDarkColor = 'blue-grey-text text-darken-4';

  const nav = document.querySelector('nav');
  const navBot = nav.getBoundingClientRect().bottom;
  const content = document.querySelector('.opening-content');
  const scrollPos = content.getBoundingClientRect().top;
  if (scrollPos <= navBot) {
    nav.classList = 'center grey lighten-5';
    navButton.classList = `button-collapse ${textDarkColor}`;
    navLogo.classList = `brand-logo center ${textDarkColor}`;
    navTexts.forEach(text => {
      text.classList = `nav-link ${textDarkColor}`;
    });
  } else {
    nav.classList = 'center transparent';
    navLogo.classList = 'brand-logo center';
    navButton.classList = 'button-collapse';
    navTexts.forEach(text => {
      text.classList = 'nav-link';
    });
  }
}

module.exports = {
  markdownToReact,
  intToMoney,
  updateNav,
};
