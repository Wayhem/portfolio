document.getElementById('postForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const captcha = document.querySelector('#g-recaptcha-response').value;

  fetch('/', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body:JSON.stringify({name: name, email: email, message: message, captcha: captcha})
  })
  .then((res) => res.json())
  .then((data) => {
    if (data.success == false) {
      swal({
        type: 'error',
        title: 'Captcha Error',
        text: 'Something went wrong! '+data.msg+'!',
      })
    }
    if (data.success == true) {
      swal(
        'Done!',
        'Message submitted successfully!',
        'success'
      )
    }
  });
}
