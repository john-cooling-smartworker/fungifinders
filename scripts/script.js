console.log('Entered javascript');

const navToggle = document.querySelector('[aria-controls="primary-navigation');
const primaryNav = document.querySelector('#primary-navigation');

navToggle.addEventListener('click', () => {
  console.log("clicked")
  const navOpened = navToggle.getAttribute("aria-expanded");
  console.log(navOpened);

  if (navOpened === 'false') {
    navToggle.setAttribute('aria-expanded', "true");
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
  }

})


