// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $('.eat').on('click', function(event) {
    var id = $(this).data('id');

    $.ajax('/burger/' + id, {
      type: 'PUT',
      data: true
    }).then(function() {
      console.log('akuna');
      location.reload();
    });
  });

  $('.form').on('submit', function(event) {
    event.preventDefault();
    var newBurger = $('#name')
      .val()
      .trim();
    var radioValue = $('.radio:checked').val();
    console.log(radioValue);

    $.ajax('/burger', {
      type: 'POST',
      data: {
        burger_name: newBurger,
        devoured: radioValue
      }
    }).then(function() {
      console.log('matata');
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
