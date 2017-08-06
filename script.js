function profileMargins() {
  let scrollDistance = $(window).scrollTop()
  let margins = 120 - (scrollDistance / 2)
  if (margins > 56) {
    return margins
  } else {
    return 56
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
  let d = $(window).scrollTop() - 275
  if (d > -29) {
    return -29
  } else {
    return d
  }
}

function skillsPosition() {
  let d = $(window).scrollTop() - 140
  if (d > 150) {
    return 150
  } else {
    return d
  }
}

function projectsPosition() {
  let d = $(window).scrollTop() - 140
  if (d > 150) {
    return 150
  } else {
    return d
  }
}


function contactPosition() {
  let d = $(window).scrollTop() - 140
  if (d > 150) {
    return 150
  } else {
    return d
  }
}

const box = $('.box')
      profile = $('.profile')
      boxH1 = $('.box-title > h1')
      profileBoxImg = $('.profile-box-img')
      bio = $('.bio')
      projects = $('.projects')
      skills = $('.skills')
      contact = $('.contact')

$('.modal-trigger').click(function() {
  $('.ui basic modal').modal('show')
})



$(document).ready(
  

  $(window).scroll(() => {

    box.css('margin-top', profileMargins())
    box.css('margin-left', profileMargins())

    profile.css('opacity', profileOpacity())
    profile.css('top', profileMargins())

    boxH1.css('margin-right', profileH1Margin())

    profileBoxImg.css('opacity', reverseProfileOpacity())
  
    bio.css('opacity', bioOpacity()-.2)
    bio.css('bottom', bioPosition())

    projects.css('opacity', bioOpacity())
    projects.css('right', projectsPosition())

    skills.css('opacity', bioOpacity())
    skills.css('right', skillsPosition())

    contact.css('opacity', bioOpacity())
    contact.css('right', contactPosition())

  
  })

)