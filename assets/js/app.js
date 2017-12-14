$(document).ready(function() {
/**
 * Función de la vista splash inicial
 *
 */
$().ready(function() {
  $('.mainfull').hide();
  $(".splash").fadeIn(500).fadeOut(5000, show);

  function show() {
    $('.mainfull').show();
  }
});


/**
 * Función pasando a ste screen
 *
 */
$('#signUp').click(function() {
  $('#form').show();
  $('#mainfull').hide();
})

/**
 * Función para ir a la sección anterior
 */

});

