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
 * Función activando btn Signup
 *
 */
$('#signUp').click(function() {
  $('#form').show();
  $('#mainfull').hide();
})

/**
 * Función para ir a la sección anterior
 */
$('#volver').click(function() {
  $('#mainfull').show();
  $('#form').hide();
});
/**
 * Función activando btn Login
 *
 */
$('#logIn').click(function() {
  $('#formLog').show();
  $('#mainfull').hide();
})
/**
 * Función para ir a la sección anterior
 */
$('#volver2').click(function() {
  $('#mainfull').show();
  $('#formLog').hide();
});



});

