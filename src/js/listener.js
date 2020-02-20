$(document).ready(function() {
  $('#expander').on('click', function(e) {
    $('#expander > svg').toggleClass('fa-rotate-180');
    $('#sidebar').toggleClass('active');
  });
});
