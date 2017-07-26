/**
 * Created by lele on 2017/7/26.
 */
/**
 * Created by lele on 2017/7/26.
 */
$(document).ready(function () {
  animate();
  var mobile = window.isDevice
  if (mobile) {
    $('.love_wrapper').css({
      width: '100%'
    })
  }
});

function animate() {
  $('.square').each(function () {
    var wait = Math.floor((Math.random() * 3000) + 1);
    $(this).delay(wait).animate({
      top: '0px',
      opacity: 1
    }, 2000, function () {
      $(this).delay(wait).animate({
        top: '50px',
        opacity: 0
      }, 1000, function () {
        $(this).delay(wait).animate({
          top: '0px',
          opacity: 1
        }, 500);


      });
    });
  });
  $('.word').each(function () {
    $(this).css({
      position: 'relative',
      top: '-200px',
      opacity: 0
    });
    var wait = Math.floor((Math.random() * 3000) + 1);
    $(this).delay(wait).animate({
      top: '0px',
      opacity: 1
    }, 2000, function () {
      $(this).delay(wait).animate({
        top: '50px',
        opacity: 0
      }, 1000, function () {
        $(this).delay(wait).animate({
          top: '0px',
          opacity: 1
        }, 500);
      });
    });
  });
}

setTimeout(function () {
  $(".btn").css({
    position: 'relative',
    left: '-400px',
    opacity: 0
  });
  $(".btn").animate({
    left: '0px',
    opacity: 1
  }, 2000);
}, 5000)

$("#bofang").click(function () {
  animate();
  console.log(11111)
});

$("#audio").click(function () {
  console.log(999999)
  var music = document.getElementById("music");
  if (music.paused) {
    music.play();
    $("#audio").html("关闭背景音乐");
  } else {
    music.pause();
    $("#audio").html("播放背景音乐");
  }
});
