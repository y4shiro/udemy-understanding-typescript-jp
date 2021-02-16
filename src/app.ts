const button = document.querySelector('button')!;

function clickHandler(message: string) {
  // let userName = 'John';
  console.log('Clicked! ' + message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, "Your're welcome!"));
}
