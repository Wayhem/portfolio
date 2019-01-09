(function() {

  document.getElementById('postForm').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    document.querySelector('.ld-spinner').style.display = 'inline-block';
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
        document.querySelector('.ld-spinner').style.display = 'none';
      }
      if (data.success == true) {
        swal(
          'Done!',
          'Message submitted successfully!',
          'success'
        )
        document.querySelector('#postForm').style.display = "none";
        document.querySelector('.i-huge').style.display = "block";
      }
    });
  }
})();