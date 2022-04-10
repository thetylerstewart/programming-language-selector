$(function () {
  $('form').on('submit', function (submitEvent) {
    submitEvent.preventDefault()

    const jqForm = $(submitEvent.target) //target of the submit event is the form
    const selectedRadioValue = $('input:radio:checked', jqForm).val()

    if (selectedRadioValue === 'a') {
      $('.language-one').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
    } else if (selectedRadioValue === 'b') {
      $('.language-two').css('color', 'red').css('border', '1px solid red').fadeOut(1200)

    } else if (selectedRadioValue === 'c') {
      $('.language-three').css('color', 'red').css('border', '1px solid red').fadeOut(1200)

    } else if (selectedRadioValue === 'd') {
      $('.language-four').css('color', 'red').css('border', '1px solid red').fadeOut(1200)
    }


    if (selectedRadioValue) {
      const currentStep = jqForm.parents('.jumbotron').data('step')


      if (currentStep === 5) {
        $('.jumbo-five').hide();;
        $('.language-one').css('color', 'red').css('border', '1px solid red').fadeOut(1200);
        $('.language-two').css('color', 'red').css('border', '1px solid red').fadeOut(1200);
        $('.language-three').css('color', 'red').css('border', '1px solid red').fadeOut(1200);
        $('.language-four').css('color', 'red').css('border', '1px solid red').fadeOut(1200);
        $('.jumbo-five').hide();
        $('.success').show();
        $('.navbar').css('color', 'green').css('border', '3px solid green').show();
        $('.email-collection').show();
        $('.header-question').hide();
      }
      else {
        const nextStep = currentStep + 1
        $(`.jumbotron[data-step="${currentStep}"]`).hide()
        $(`.jumbotron[data-step="${nextStep}"]`).show()
      }
    }
  })
})