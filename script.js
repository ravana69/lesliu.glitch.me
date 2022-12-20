var i = 0;
$(document).ready(function(){
  
// TO DO: 
// reconsider sunset v. blue sky thing
// "Extension"/take away: a button to print the current state of the website. maybe 50.
// check out html features (https://404-notfound.glitch.me/ respawn and guestbook)
  
// (theoretical) good to haves: fix .iteminfo so that if background is dark, text is light
  
// bugs:
// cant click down on 5 after 27? no grabbing motion. i think its an overflow thing; set it and certain other items to overflow: visible, others to scroll. hm
  
  // 1 - 10: intra; css transitions
  // 11 - 24: inter; js transformations; affects vicinity
  // 25 - 30: inter; js transformations; affects all
  // 31 - 50: misc/go nuts
  
  
  
  // 11. extend items in vicinity
  $("#i11").click(function(){
    // 10, 12, 13
    $('#i10').css('width','50%');
    $('#i13').css('width','45%');
    $('#i12').css('width','15%');
  });
  // 12. shrink items in vicinity to regular size (wonky in narrower windows)
  $("#i12").click(function(){
    // 10, 12, 13
    $('#i10').css('width','10%');
    $('#i13').css('width','10%');
    $('#i12').css('width','10%');
  });
  
  // 13. apocalyptic: shake and 
// >>> fly around; best: any div it overlaps with turns black/border turns red
  $('#i13').click(function(){
    $(this).css({
      // 'border':'1px red solid',
      'color':'rgba(0,0,0,0)',
    });
    // >>> wish color could come back (black again) when not clicking
    $(this).toggleClass('shake');
    $('body').toggleClass('shakebackground');
  });
  
  // 14. draggable
// >>> add more: if overlapping, overlapping items turn transparent
  $('#i14').mouseenter(function(){
    $(".draggable").draggable();
    $(this).css({
      'background-color':'rgba(0,0,0,0)',
      'transition':'0.2s',
    })
  });
  $('#i14').mouseleave(function(){
    $(this).css({
      'background-color':'rgba(0,0,0,0.1)'
    });
  });
  
  // 15 + 16. squash and stretch; infinite animation
  $('#i15').mouseenter(function(){
    $('#i15').css('width','15%');
    $('#i16').css('width','5%');
  })
  $('#i16').mouseenter(function(){
    $('#i15').css('width','5%');
    $('#i16').css('width','15%');
  })
  
  // 17 + 24. slight mirroring
// >>> maybe add some calming color animations
  $('#i17,#i24').mouseenter(function(){
    $(this).toggleClass('relax');
    $('#i24').toggleClass('relax');
    $('#i24').css('border','1px dashed black');
  })
  $('#i17').mouseleave(function(){
    $(this).toggleClass('relax');
    $('#i24').toggleClass('relax');
    $('#i24').css('border','1px solid black');
  })
  
  // 18 + 23. 23 stays still, 18 animates
// >>> weird flash — do animations stagger? — yes they should
  $('#i23').click(function(){
    $('#i18').animate({width: "300px"},600);
    $('#i18').animate({height: "200px"},300);
    $('#i18').animate({width: "50px"},200);
    $('#i18').animate({height: "100px"},600);
    $('#i18').animate({borderRadius:"50%"},900);
  });
  
  $('#i19').click(function(){
    // make text viewable
    $('#monologue').css({
      'color':'rgba(0,0,0,1)'
    })
  })
  
  // PAST IDEA: 19 + 22. when mouse enters 19, 22's bg color determined by mouse coordinates
  // REF: https://stackoverflow.com/questions/4517198/how-to-get-mouse-position-in-jquery-without-mouse-events#4517215
// MISSING 19 — 19 through 22 a bit whack  
  
  // 20. lights out
  $('#i20').click(function(){
    $('body').toggleClass('bodylightsout');
    $('.item').toggleClass('itemlightsout');
    // $('.iteminfo').css('color','black');
    // >>> wish i could hover and have .iteminfo be white
  });
  $('#i20').mouseenter(function(){
    $(this).css('cursor','crosshair');
  })
  $('#i20').mouseleave(function(){
    $(this).css('cursor','default');
  })
  
  // 21. sky
  $('#i21').click(function(){
    $('body').toggleClass('bodybluesky');
    $('.item').toggleClass('itembluesky');
    $('.iteminfo').toggleClass('iteminfobluesky');
    // $('#i26').click(function(){
    //   // special edition of cloudify
    //   $('.item').toggleClass('cloudify');
    //   $('.item').toggleClass('cloudifybluesky');
    // })
  })
  
  // 22. sunset
  // >>> weird — can't click other items (21 e.g.) to change? must reclick to toggle :/
  $('#i22').click(function(){
    $('body').toggleClass('bodysunset');
    $('.item').toggleClass('itemsunset');
    $('.iteminfo').toggleClass('iteminfotransparent');
    // $('#i26').click(function(){
    //   // special edition of cloudify
    //   $('.item').toggleClass('cloudify');
    //   $('.item').toggleClass('cloudifysunset');
    // })
  });
  
  // 25. space out
  $('#i25').click(function(){
    $('.item').css('margin','1em');
  })
  
  // 26. round out all borders
  $('#i26').click(function(){
    // >>> I want to let it change back to a 0% border radius, but toggleClass doesnt seem to work
    for (i=1; i<51; i++) {
      $('#i'+i).css({
        'border-radius': Math.round(Math.random()*100+3)+'%',
        'transition':'2s'
      });
    }
  });
  
  // 27. funky colors
  $('#i27').click(function(){
    $('body').css({
      backgroundColor:"rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")",
      'transition':'1s'
    });
    
    // iterate over all .item's and assign random color
    for (i = 1; i < 51; i++) {
      $('#i'+i).css({
        backgroundColor:"rgba("+ Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + Math.random() + ")"
      });
    };
    
 
  });
  
// >>> WEIRD CLICKING IX WITH 20-22: you have to click 22 to toggle manually; they keep stacking/adding
  
  // 28. cluster
  $('#i28').click(function(){
    $('.item').css({
      'margin':'0 -2em 0 1em',
      'transition':'2s'
    });
    $('body').css({
      'margin':'6em 5em 4em 5em',
    })
  })
  
  // 29. make all before & including 29 draggable to reorganize
  $('#i29').click(function(){
    $('.draggable').draggable()
  })
  
  // 30. dance
  $('#i30').click(function(){
    // lil animations
    $('.item').toggleClass('boogie');
    $('.item').click(function(){
      $(this).toggleClass('spinaround');
    });
  })
  
  // 31. blur
  $('#i31').click(function(){
    $('.item').toggleClass('blurredvision');
  });

// some music thing? https://youtu.be/_4XYKQvJkZU
  // 32. hover: to make small
  $('#i32').click(function(){
    $('.item').mouseenter(function(){
      $(this).toggleClass('i32mouseenter');
    })
    $('.item').mouseleave(function(){
      $(this).toggleClass('i32mouseleave');
    });
  });
  
  // 33. USA to the max
// >>> INCOMPLETE
  $('#i33').click(function(){
    $('.item').css('border','rgba(0,0,0,0)');
    
    var textShadowWhite = true;
    
    if (Math.random()<0.25){
      $('#usatext').css('color','red');
      // $('body').css('background-image','linear-gradient(red,white,blue)');
    }
    else if (Math.random()<0.5){
      $('#usatext').css('color','blue');
      // $('body').css('background-image','linear-gradient(red,blue,white)');
    }
    else if (Math.random()<0.75) {
      $('#usatext').css('color','black');
      // $('body').css('background-image','linear-gradient(white,blue,red)');
    }
    else {
      textShadowWhite = false;
      $('#usatext').css('color','white');
      // $('body').css('background-image','linear-gradient(blue,red,white)');
    };
    
    if (textShadowWhite) {
      $('#usatext').css('text-shadow','0px 0px 3px white, 1px -1px 4px white, 2px 3px 10px white')
    }
    else {
      if (Math.random()<0.33) {
        $('#usatext').css('text-shadow','0px 0px 3px black, 1px -1px 4px black, 2px 3px 10px black')
      }
      else if (Math.random()<0.67) {
        $('#usatext').css('text-shadow','0px 0px 3px red, 1px -1px 4px red, 2px 3px 10px red')
      }
      else {
        $('#usatext').css('text-shadow','0px 0px 3px blue, 1px -1px 4px blue, 2px 3px 10px blue')
      };
      
    };
    
    // red white blue first
    for (i = 1; i < 51; i++) {
      if (Math.random()<0.33) {
        // red
        $('#i'+i).css('background-color','red')
      }
      else if (Math.random() < 0.67) {
        // blue
        $('#i'+i).css('background-color','blue')
      }
      else {
        // white
        $('#i'+i).css('background-color','white')
      };
    };
    
    // // play audio
    $('#anthem').play();
// >>> bug: audio loading issues
    
    // red - blue - white borders?
    
    // good to have: eagle follows cursor around
  // >>> ON CLICK: eagle flies around, anthem plays
  });
  
  // 34. pseudorandom hori stretch
  $('#i34').click(function(){
    // everything flies around 
    // var i = 0;
    for (i = 1; i < 51; i++) {
      $('#i'+i).animate({width: ((Math.random()*500)+30)},600);
    }
  });
  
  // 35. pseudorandom vert stretch
  $('#i35').click(function(){
    // ups the ante from 34
    // var i = 0;
    for (i = 1; i < 51; i++) {
      $('#i'+i).animate({left: ((Math.random()*100)+30)},300);
      $('#i'+i).animate({height: ((Math.random()*300)+50)},600);
    }
  });
  
  // 36. pseudorandom background gradient
  $('#i36').click(function(){
    var col1r = Math.round(Math.random()*255);
    var col1g = Math.round(Math.random()*255);
    var col1b = Math.round(Math.random()*255);
    
    var col2r = Math.round(Math.random()*255);
    var col2g = Math.round(Math.random()*255);
    var col2b = Math.round(Math.random()*255);
    
    $('body').css({
      backgroundImage:'linear-gradient(rgb('+col1r+','+col1g+','+col1b+'),rgb('+ col2r+','+ col2g + ',' + col2b +'))'
    });
  });
  
  // 37. scatter
  $('#i37').click(function(){
    // scatter
    for (i=1; i<51; i++) {
      $('#i'+i).css({
        'width':''+Math.round(Math.random()*30+10)+'%',
        'height':''+Math.round(Math.random()*300+50)+'px',
        'transform':'rotateX('+Math.round(Math.random()*360+10)+'deg)',
        'transform':'rotateY('+Math.round(Math.random()*360+10)+'deg)',
        'transform':'rotateZ('+Math.round(Math.random()*360+10)+'deg)',
      });
    };
  });
  
  
  // 38. skew
  $('#i38').click(function(){
    //blah
    for (i=1; i<51; i++) {
      $('#i'+i).css({
        'transform':'skew('+Math.round(Math.random()*90+(-30))+'deg,'+Math.round(Math.random()*90+(-30))+'deg)',
        'transition':'2s'
      });
    };
  });
  
  // 39. ghost
  $('#i39').click(function(){
    for (i=1;i<51;i++){
      $('#i'+i).css({
        'background-color':'rgba(0,0,0,0)',
        'box-shadow': ''+(Math.random()*3-3)+' '+(Math.random()*3-3)+' '+(Math.random()*3-3) +' '+ Math.random()+'',
        'filter':'blur('+Math.round(Math.random()*10+1)+'px)'
      })
    };
  });
  
  
  // 40. spotlight
  $('#i40').click(function(){
    for (i=1;i<51;i++){
      if (i != 40) {
        $('#i'+i).css({
          'background-color':'rgba(0,0,0,0.01)',
          'border':'rgba(0,0,0,0.01)'
        })
      }
      else {
        // highlight i40
        $(this).css({
          'background-color':'gold',
          'box-shadow':'0px 0px 30px 3px gold'
        })
      }
    }
    $('body').css({
      'background-color':'rgba(0,0,0,0.75)'
    })
    
  });
  
  
  // 41. leaf mode
  $('#i41').click(function(){
    //x
    for (i=1; i<51; i++) {
      $('#i'+i).css({
        'width':(Math.random()*100+30)+'px',
        'border-radius': Math.round(Math.random()*100+30)+'%',
        'border':'1px black solid',
        'background-color':'rgba('+(Math.random()*30)+','+(Math.round(Math.random()*255+123))+','+(Math.random()*30)+','+(Math.random()+0.45)+')',
        'transition':'2s'
      });
    };
    $('body').css('background-color','rgba(0,0,0,0.05)')
  });
  
  // 42. subtly funky
  $('#i42').click(function(){
    // iterate over all .item's and assign random color
    for (i = 1; i < 51; i++) {
      $('#i'+i).css({
        border:''+Math.round(Math.random()*30+1)+"px solid rgba("+ Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + Math.round(Math.random()*255) + "," + Math.random() + ")"
      });
    };
  });
  
  // 43. play audio
  $('#i43').click(function(){
    $(this).css({
      'background-color':'pink',
      'box-shadow':'1px 0px 2px 2px pink, 2px -2px 3px 1px pink, -1px -2px 10px 3px pink, 0px 3px 6px 2px pink',
      'border':'rgba(0,0,0,0)'
    })
    $('#playbutton').css('opacity','1');
    $('#somemusic').trigger('play');
    // THANK YOU https://www.geeksforgeeks.org/how-to-play-pause-video-using-jquery/ 
  });
  
  // 44. cursed emoji stares back
  $('#i44').click(function(){
    $('.item').css({
      'background-image':'url(https://cdn.glitch.com/ef1b52c1-7daf-4142-886b-850c9ac17fbf%2Femoji.png?v=1631165009754)',
      'background-size':'cover',
      'background-image-repeat':'no-repeat',
      'border':'rgba(0,0,0,0)',
      'color':'rgba(0,0,0,0)',
      'background-color':'rgba(0,0,0,0)'
    })
    $('.item').toggleClass('tremble');
    $('body').css({
      'background-image':'url(https://i.redd.it/motrqkh1lge51.jpg)'
    });
  });
  
  // 45. careless funky — building on 27 and 42.
  $('#i45').click(function(){
    $('.item').mouseenter(function(){
      $(this).css({
        backgroundColor:"rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")",
      'transition':'1.5s'
      });
    });
  });
  
  // 46. video
  $('#i46').click(function(){
    $('#videoplayer').toggleClass('hide'); 
// >>> the above doesnt work
    $('#videoplayer').trigger('play');
    $('#videoplayer').css({
      'opacity':'1',
      'width':'100vw',
      'height':'104vh',
      'position':'fixed',
      'z-index':'-10',
      'opacity':'0.5',
      
      'display':'block',
    });
  });
  
  // 47. mouse enters, changes 48 and 49 color
  $('#i47').mouseenter(function(){
    $('#i48,#i49').css({
      backgroundColor:"rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")",
    })
  });
  
  // 48. mouse enters, changes 47 and 49 border radius
  $('#i48').mouseenter(function(){
    $('#i47,#i49').css({
      'border-radius': Math.round(Math.random()*100+3)+'%',
    })
  });
  
  // 49. mouse enters, changes 47 and 48 width and height
  $('#i49').mouseenter(function(){
    $('#i47,#i48').css({
      'width':''+(Math.random()*50+20)+"vw",
      'height':''+(Math.random()*50+20)+"vh",
    })
  })
});


// thanks
// 14. https://api.jqueryui.com/draggable/#option-delay