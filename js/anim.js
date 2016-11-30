$.fn.scrollView = function () {
    return this.each(function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top
        }, 500);
    });
}

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

function scrollTo(target)
{
    $(target).scrollView();
}

function closeAllCollapsable()
{
  $(document.body).find('.collapse').each(function(index) { $(this).collapse('hide');})
}

//use only on navbar!
function scrollToCollapsed(target, mTarget)
{
  $(target).collapse('show');
  if(mTarget != '')
    $(mTarget).scrollView();
   else $(target).scrollView();
  if($('.navbar-toggle').is(':visible'))
    $('.navbar-toggle').click()
}

function scrollToCollapsedToggle(target)
{
  $(target).collapse('toggle');
  if(!$(target).hasClass('in'))
    {$(target).scrollView();
    }
}

function scrollHandler()
{
  var arrow = $('#backToTop');
  if($(document).scrollTop()>200)
      arrow.fadeIn();
   else arrow.fadeOut();
}

function overlayAnimation()
{
  var $overlay = $('#img-over');
  $overlay.css('top', '-'+$overlay.css('height'));
  $overlay.fadeIn(100);
  $overlay.animate({top:'0px'},'normal');
}

function OpenFullScreenImage(sender)
{
  //prepare overlay
  var overlay = document.getElementById('img-over');
  overlay.getElementsByTagName('img')[0].src = sender.getElementsByTagName('img')[0].src;
  overlay.getElementsByClassName("o-title")[0].innerHTML = sender.getElementsByClassName("pic-title")[0].innerHTML;
  overlay.getElementsByClassName("o-desc")[0].innerHTML = sender.getElementsByClassName("pic-desc")[0].innerHTML;

  var $overlay = $('#img-over');
  //animate
  $overlay.css('top', '-'+$overlay.css('height'));
  $overlay.fadeIn(100);
  $overlay.animate({top:'0px'},'normal');
  document.body.style.overflow = "hidden";
}

function closeFullScreenImage()
{
  var $overlay = $('#img-over');
  $overlay.animate({top:'-'+$overlay.css('height')},'normal');
  $overlay.fadeOut(100);
  document.body.style.overflow = "visible";
}

//function bind
window.onscroll = scrollHandler;
$('#backToTop').click(function(){ scrollTo('#top'); closeAllCollapsable();});
$('#overlay-close').click(function(){closeFullScreenImage(); return false;});
$('#contact-close').click(function(){scrollToCollapsedToggle('#contacts');})
$('.pic').each( function(){ $(this).click( function() { OpenFullScreenImage(this); } ); } );
$('#bio-navlink').click( function(){ scrollToCollapsed('#contacts',''); } );
$('#contact-navlink').click( function() { scrollToCollapsed('#contacts','#mSend'); } );
