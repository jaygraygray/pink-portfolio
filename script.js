function profileMargins() {
  let scrollDistance = $(window).scrollTop()
  let margins = 120 - (scrollDistance / 2)
  if (margins > 28) {
    return margins
  } else {
    return 28
  }
}

function profileOpacity() {
  return 1 - ($(window).scrollTop() * .007)
}

function reverseProfileOpacity() {
  return ($(window).scrollTop() * .007)
}

function profileH1Margin() {
 let d = $(window).scrollTop() / 2
 if (d > 135) {
   return 135
 } else {
   return d
 }
}

function bioOpacity() {
  return ($(window).scrollTop() * .007)
}

function bioPosition() {
  let d = $(window).scrollTop() - 296
  if (d > 10) {
    return 10
  } else {
    return d
  }
}

$(document).ready(
  
  $(window).scroll(() => {

    $('.box').css('margin-top', profileMargins())
    $('.box').css('margin-left', profileMargins())

    $('.profile').css('opacity', profileOpacity())
    $('.profile').css('top', profileMargins())

    $('.box-title > h1').css('margin-right', profileH1Margin())

    $('.profile-box-img').css('opacity', reverseProfileOpacity())
  
    $('.bio').css('opacity', bioOpacity())
    $('.bio').css('bottom', bioPosition())

  })

)