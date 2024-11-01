var appended = false, bookmark = document.createElement("div");
bookmark.id = "arrowUp";
bookmark.innerHTML = "<a href=\"#\" title=\"Top of the page.\"> <i class=\"fa fa-angle-up\"></i></a>";

onscroll = function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop > 500) {
    if (!appended) {
      document.body.appendChild(bookmark);
      appended = true;
    }
  } else {
    if (appended) {
      document.body.removeChild(bookmark);
      appended = false;
    }
  }
};