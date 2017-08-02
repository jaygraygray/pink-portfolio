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
  return ($(window).scrollTop() * .003)
}

function profileH1Margin() {
 let d = $(window).scrollTop() / 2
 if (d > 30) {
   return d
 } else {
   return 30
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
  

  })

)