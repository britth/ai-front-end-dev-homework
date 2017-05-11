$(function() {

  var $form = $('.my-form-class');

  var validateForm = function() {
    var actualValue = $('input[name="some-text-field"]').val();
    var isChecked = $('input[name="some-checkbox"]').is(':checked');
    var selectedValue = $('input[name="some-radio-flyers"]:checked').val();
    var dropdownValue = $('select[name="the-select"]').val()

    var validText = actualValue === "5"
    var validDropdown = dropdownValue != "default"
    var selectedFrogs = selectedValue === "Frogs"

    if (validText && isChecked && selectedFrogs && validDropdown) {
        console.log('VALID');
    } else {
      console.log('ERROR');
      if (validText && isChecked && selectedFrogs) {
        alert('Plese make a selection in the dropdown')
      } else if (validText && isChecked && validDropdown) {
        alert('Please select the value "Frogs" (You selected "'
          + selectedValue+'")')
      } else if (validText && selectedFrogs && validDropdown) {
        alert('Please check "Have you entered everything?"')
      } else if (selectedFrogs && validDropdown && isChecked){
        alert('Please enter "5" in the text box (You entered "'
          + actualValue + '")')
      } else if (validText && isChecked) {
        alert('Please select the value "Frogs" (You selected "'
          + selectedValue+'"). Select a value in the dropdown')
      } else if (validText && selectedFrogs) {
        alert('Please select a value in the dropdown. '
          + 'Check "Have you entered everything?"')
      } else if (isChecked && selectedFrogs) {
        alert('Please enter "5" in the text box (You entered "'
          + actualValue + '"). Select a value in the dropdown')
      } else if (validText && validDropdown){
        alert('Please select the value "Frogs" (You selected "'
          + selectedValue+'"). Check "Have you entered everything?"')
      } else if (selectedFrogs && validDropdown){
        alert('Please enter "5" in the text box (You entered "'
          + actualValue + '"). Check "Have you entered everything?"')
      } else if (isChecked && validDropdown){
        alert('Please enter "5" in the text box (You entered "'
          + actualValue + '"). Select the value "Frogs" (You selected "'
            + selectedValue+'"). Select a value in the dropdown')
      } else if (validText){
        alert('Please select the value "Frogs" (You selected "'
          + selectedValue + '"). Select a value in the dropdown. '
          + 'Check "Have you entered everything?"')
      } else if (isChecked){
        alert('Please enter "5" in the text box (You entered "'
          + actualValue + '"). Select the value "Frogs" (You selected "'
          + selectedValue + '"). Select a value in the dropdown')
      } else if (selectedFrogs){
        alert('Please enter "5" in the text box (You entered "'
          + actualValue + '"). Select a value in the dropdown. '
          + 'Check "Have you entered everything?"')
      } else if (validDropdown) {
        alert('Please enter "5" in the text box (You entered "'
          + actualValue + '"). Select the value "Frogs" (You selected '
            + selectedValue + '). Check "Have you entered everything?"')
      } else {
        alert('There was a problem with your request. Type "5" in the text box,'
          + ' select "Frogs", select a value in the dropdown, '
          + 'and check "Have you entered everything?"');
      }
    }
  };

  $form.on('submit', function(event) {
    event.preventDefault();
    validateForm();
  });


});
