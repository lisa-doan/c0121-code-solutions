
function logSubmit(event) {
  var messageData = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log('MessageData: ', messageData);
  event.preventDefault();
}

const $form = document.getElementById('contact-form');
$form.addEventListener('submit', logSubmit);
