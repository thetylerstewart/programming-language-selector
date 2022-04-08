$(document).ready(function () {
  $('form#form-one').submit(function (event) {
    event.preventDefault();
    $('input:radio').each(function () {
      if ($(this).is(':checked')) {
        const formOne = $(this).val();
        if (formOne === 'a') {
          $('.language-one').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-one').hide();
          $('.jumbo-two').show();
        } else if (formOne === 'b') {
          $('.language-two').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-one').hide();
          $('.jumbo-two').show();
        } else if (formOne === 'c') {
          $('.language-three').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-one').hide();
          $('.jumbo-two').show();
        } else if (formOne === 'd') {
          $('.language-four').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-one').hide();
          $('.jumbo-two').show();
        }
      }

    })

  })
})
$(document).ready(function () {
  $('form#form-two').submit(function (event) {
    event.preventDefault();
    $('input:radio').each(function () {
      if ($(this).is(':checked')) {
        const formTwo = $(this).val();
        if (formTwo === 'a') {
          $('.language-one').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-two').hide();
          $('.jumbo-three').show();
        } else if (formTwo === 'b') {
          $('.language-two').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-two').hide();
          $('.jumbo-three').show();
        } else if (formTwo === 'c') {
          $('.language-three').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-two').hide();
          $('.jumbo-three').show();
        } else if (formTwo === 'd') {
          $('.language-four').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-two').hide();
          $('.jumbo-three').show();
        }
      }

    })

  })

})

$(document).ready(function () {
  $('form#form-three').submit(function (event) {
    event.preventDefault();
    $('input:radio').each(function () {
      if ($(this).is(':checked')) {
        const formThree = $(this).val();
        if (formThree === 'a') {
          $('.language-one').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-three').hide();
          $('.jumbo-four').show();
        } else if (formThree === 'b') {
          $('.language-two').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-three').hide();
          $('.jumbo-four').show();
        } else if (formThree === 'c') {
          $('.language-three').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-three').hide();
          $('.jumbo-four').show();
        } else if (formThree === 'd') {
          $('.language-four').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-three').hide();
          $('.jumbo-four').show();
        }
      }

    })

  })

})