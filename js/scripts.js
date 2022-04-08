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
          $('.header-question').hide();
        } else if (formOne === 'b') {
          $('.language-two').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-one').hide();
          $('.jumbo-two').show();
          $('.header-question').hide();
        } else if (formOne === 'c') {
          $('.language-three').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-one').hide();
          $('.jumbo-two').show();
          $('.header-question').hide();
        } else if (formOne === 'd') {
          $('.language-four').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-one').hide();
          $('.jumbo-two').show();
          $('.header-question').hide();
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

$(document).ready(function () {
  $('form#form-four').submit(function (event) {
    event.preventDefault();
    $('input:radio').each(function () {
      if ($(this).is(':checked')) {
        const formFour = $(this).val();
        if (formFour === 'a') {
          $('.language-one').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-four').hide();
          $('.jumbo-five').show();
        } else if (formFour === 'b') {
          $('.language-two').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-four').hide();
          $('.jumbo-five').show();
        } else if (formFour === 'c') {
          $('.language-three').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-four').hide();
          $('.jumbo-five').show();
        } else if (formFour === 'd') {
          $('.language-four').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-four').hide();
          $('.jumbo-five').show();
        }
      }
    })
  })
})


$(document).ready(function () {
  $('form#form-five').submit(function (event) {
    event.preventDefault();
    $('input:radio').each(function () {
      if ($(this).is(':checked')) {
        const formFive = $(this).val();
        if ((formFive === 'a') || (formFive === 'b') || (formFive === 'c') || (formFive === 'd')) {
          $('.language-one').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.language-two').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.language-three').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.language-four').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
          $('.jumbo-Five').hide(800)
          $('.success').show(800)
          $('.navbar').css('color', 'green').css('border', '1px solid green').fadeIn(1200)
          $('.jumbo-five').hide();
          $('.email-collection').show();
        }
      }
    })
  })
})