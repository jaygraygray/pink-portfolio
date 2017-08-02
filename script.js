function scrollToGenerateNums() {
  let scrollDistance = $(window).scrollTop()
  let margins = 120 - (scrollDistance / 2)
  if (margins > 28) {
    return margins
  } else {
    return 28
  }
}

function profileOpacity() {
  let d = $(window).scrollTop()

}

$(document).ready(
  
  $(window).scroll(() => {

    $('.box').css('margin-top', scrollToGenerateNums())
    $('.box').css('margin-left', scrollToGenerateNums())
    //$('.profile').css('opacity', 0)
    $('.profile').css('top', scrollToGenerateNums())
  })


)