document.addEventListener('DOMContentLoaded', function () {
  // Wait for the DOM to be fully loaded

  // Get the display element
  var display = document.querySelector('input[name="display"]');

  var buttons = document.querySelectorAll('input[type="button"]');


  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      handleButtonClick(button.value);
    });
  });

  function handleButtonClick(value) {
    switch (value) {
      case 'AC':
        display.value = '';
        break;
      case 'DE':
        display.value = display.value.slice(0, -1);
        break;
      case '%':
        display.value = (parseFloat(display.value) / 100).toString();
        break;
      case '=':
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = 'Error';
        }
        break;
      default:
        display.value += value;
        break;
    }
  }
});
