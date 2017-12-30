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


/*
Funcionalidad botones next/back,
tanto en Log In como en Sign Out
*/
$("#phone-back").click(function(){
  $("#mainfull").fadeIn(1000);
  });

$("#phone-back2").click(function(){
  $("#mainfull").fadeIn(1000);
  });

$(".phonee").keyup(function(){
    if($(this).val().length == 10){
      $("#phone-back").removeAttr("disabled");
    }else{
      $("#phone-back").attr("disabled", true);
    }
  });

/**
*activa el botón NEXT solo si se ingresaron 10 dígitos(la siguiente función se
*asegura de que estos 10 digitos sean solo números)
*/
  $('#phonee').keyup(function(){
    if($(this).val().length > 9){
      $('#submitBtn').removeAttr('disabled');
    } else {
      $('#submitBtn').attr('disabled','disabled');
    }
  }).trigger('keyup');

});

