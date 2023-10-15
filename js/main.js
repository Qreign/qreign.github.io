(function() {
 
  let str = document.querySelector('.typed').getAttribute('type').split(',')
  new Typed('.typed', {
    strings: str,
    loop: true,
  });

  let time = new Date().getHours();
  if (time >= 6 && time < 12) {
    document.body.id = "morning";
  }

  else if (time >= 12 && time < 18) {
    document.body.id = "afternoon";
  }

  else if (time >= 18 && time <= 23) {
    document.body.id = "evening";
  }

 else {
    document.body.id = "night";
  }

})()