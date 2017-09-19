import marked from 'marked';
import htmlToReact from 'html-to-react';

/**
 * Used so that the response from contentful - in md
 * can be changed in to HTML
 * @param  {String} md Markdown string
 * @return {ReactDOM}  React Element with parsed md
 */
const markdownToReact = md => {
  if (md !== undefined) {
    const parsedMarkdown = marked(md);
    const parser = new htmlToReact.Parser();
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
  return cost === 0 ? 'Free!' : `£${cost.toFixed(2)}`;
};

/**
 * Given a HTMLElement, add any number of classes to it
 * @param {HTMLElement} obj DOM elem to add class to
 * @param {Array<String>} classes Classes to add to obj
 */
const addClasses = (obj, ...classes) => {
  classes.forEach(cls => obj.classList.add(cls));
}

/**
 * Given a HTMLElement, remove any given number of classes from it
 * @param {HTMLElement} obj Element to remove classes from
 * @param {Array<String>} classes Classes to remove from obj
 */
const removeClasses = (obj, ...classes) => {
  classes.forEach(cls => obj.classList.remove(cls));
}

/**
 * Change the nav color based on whether it overlaps the main 'opening-content' object
 */
const updateNav = () => {
  // get the items we want to change
  const navTexts = document.querySelectorAll('.nav-link');
  const navLogo = document.querySelector('.brand-logo');
  const navButton = document.querySelector('.button-collapse');
  const textDarkColor = 'blue-grey-text text-darken-4';

  // put those in to an Array
  const navItems = [navButton, navLogo, ...navTexts];

  // get the points on the DOM to compare
  const nav = document.querySelector('nav')
  const navBot = nav.getBoundingClientRect().bottom;
  const scrollPos = document.querySelector('.opening-content').getBoundingClientRect().top;

  // if they're overlapping, darken them
  if (scrollPos <= navBot) {
    nav.classList = 'center grey lighten-5';
    navItems.map(navItem => addClasses(navItem, 'blue-grey-text', 'text-darken-4'));
  } else {
    nav.classList = 'center transparent';
    navItems.map(navItem => removeClasses(navItem, 'blue-grey-text', 'text-darken-4'));
  }
}

module.exports = {
  markdownToReact,
  intToMoney,
  updateNav,
};
