var x = 0;
$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault();
    x = x + 1;
    $('input:radio').each(function () {
      if ($(this).is(':checked')) {

        if ($(this).val() === 'a') {
          $('.language-one').css('color', 'red').css('border', '1px solid red').fadeOut(1200);
        } else if ($(this).val() === 'b') {
          $('.language-two').css('color', 'red').css('border', '1px solid red').fadeOut(1200);
        } else if ($(this).val() === 'c') {
          $('.language-three').css('color', 'red').css('border', '1px solid red').fadeOut(1200);

        } else if ($(this).val() === 'd') {
          $('.language-four').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
        }
      }
      if (x === 1) {
        $('.jumbo-one').hide();
        $('.jumbo-two').show();
      } else if (x === 2) {
        $('.jumbo-two').hide();
        $('.jumbo-three').show();
      }
      else if (x === 3) {
        $('.jumbo-three').hide();
        $('.jumbo-four').show();
      }
      else if (x === 4) {
        $('.jumbo-four').hide();
        $('.jumbo-five').show();
      }
      else if (x === 5) {
        $('.jumbo-five').hide();;
        $('.language-one').css('color', 'red').css('border', '1px solid red').fadeOut(1200);
        $('.language-two').css('color', 'red').css('border', '1px solid red').fadeOut(1200);
        $('.language-three').css('color', 'red').css('border', '1px solid red').fadeOut(1200);
        $('.language-four').css('color', 'red').css('border', '1px solid red').fadeOut(1200);
        $('.jumbo-five').hide();
        $('.success').show();
        $('.navbar').css('color', 'green').css('border', '1px solid green').show();
        $('.email-collection').show();
        $('.header-question').hide();
      }
    })
  })
})