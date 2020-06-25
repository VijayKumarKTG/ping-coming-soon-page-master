const email = document.querySelector(`.email`);
const button = document.querySelector(`.button`);
const error = document.querySelector('.error');

button.addEventListener('click', () => {
  let regex = /[A-Z][a-z][0-9]@(gmail|hotmail|outlook).com/g;
  if (!ValidateEmail(email.value)) {
    console.log('invalid');
    email.classList.add('emailErr');
    error.style.display = 'block';
  } else {
    console.log('valid');
    email.classList.remove('emailErr');
    error.style.display = 'none';
  }
});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
