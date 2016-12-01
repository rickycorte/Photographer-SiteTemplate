var AImagesToResize = [];

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

function removeHover(sender)
{
  if(!is_touch_device()) return;

  var title = sender.getElementsByClassName("pic-title")[0];
  var desc = sender.getElementsByClassName("pic-desc")[0];

  //inverti titolo e descrizion
  var string = desc.innerHTML;
  desc.innerHTML = title.innerHTML;
  title.innerHTML = string;

  desc.className = "pic-title pic-desc-s";
  title.className = "pic-desc pic-title-s";
  title.style.display = "none";
  sender.className = "col-xs-12 col-sm-6 col-md-3 nopadding nooverflow";
}

function centerImg(target)
{
  target.style.position= "relative";
  target.style.left= -target.width/2 +target.parentElement.clientWidth/2 +"px";
}

function ResizeImage(sender)
{
  AImagesToResize.push(sender);
  centerImg(sender);
  removeHover(sender.parentElement);
}

function centerAllImages()
{
  var i;
  for(i=0;i<AImagesToResize.length;i++)
  {
    centerImg(AImagesToResize[i]);
  }
}

window.onload = function() {
  var els = document.getElementsByClassName('image-box-fill');
  var i;
  for(i=0; i< els.length;i++)
  {
    ResizeImage(els[i]);
  }
}

window.onresize = centerAllImages;
