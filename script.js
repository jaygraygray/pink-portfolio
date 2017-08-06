
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


function projectTransform(heightTrigger, stop, start) {
  let d = $(window).scrollTop()
  if (d > heightTrigger) {
    return stop
  } else {
    return start
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
      housing = $('.housing')
      medium = $('.medium')
      sample = $('.sample')
      snippets = $('.snippets')
      github = $('.github')
      li = $('.li')
      gmail = $('.gmail')

$(document).ready( function() {


  $(window).scroll(() => {
    if ($(window).scrollTop() > 1) {
      $('.scroll').css({
        'animation': 'none',
        'opacity': 0
      })
    }
    

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

    // trigger skills display
    if (window.pageYOffset >= 490) {
      
      console.log('triggs')
        $('.skills-content').children()
          .each( function(i) {
            delay = (i) * 100;
            setTimeout(function(div) {
              div.addClass('icon-end')
            }, delay, $(this))
        })
    }

    // trigger skills disappearance
    if (window.pageYOffset <= 600) {
      
      $('.skills-content').children()
        .each( function(i) {
          let delay = (i) * 100;
          setTimeout(function(div) {
            div.removeClass('icon-end')
            div.addClass('icon-start')
          }, delay, $(this))
      })
    }
    console.log($(window).scrollTop())
    // display projects
    housing.css({
      'top' : projectTransform(1178, 60, 183),
      'right' : projectTransform(1178, 48, 181),
      'width' : projectTransform(1178, 657, 400)
    })                              
     medium.css({
       'top' : projectTransform(1268, 189, 312),
       'right' : projectTransform(1268, 48, 181),
       'width' : projectTransform(1268, 657, 400)
     })                    
    sample.css( {
      'top': projectTransform(1358, 318, 441),
      'right': projectTransform(1358, 48, 181),
      'width' : projectTransform(1358, 657, 400)
    })                    
    snippets.css( {
      'top': projectTransform(1458, 447, 570),
      'right': projectTransform(1458, 48, 181),
      'width' : projectTransform(1458, 657, 400)
    }) 

  })

})