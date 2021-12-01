const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;

  throw Error(`Please double check your class names, there is no ${selector} class`);
};

const navLinksBtn = getElement('.nav__btn');
const navLinks = getElement('.nav__links');

navLinksBtn.addEventListener('click', () => {
  navLinks.classList.toggle('show-links');
});
