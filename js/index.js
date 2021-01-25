// Close the dropdown menu//
window.onclick = function (event) {
  if (!event.target.matches("document")) {
    var dropdowns = document.getElementsByClassName("navbar-collapse");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//NavBar-Header-Changes//

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    let nav = document.getElementById("mainNav");
    nav.style.backgroundColor = "#ea9a96";
    nav.style.fontSize = "1.1rem";
  } else {
    document.getElementById("mainNav").style.backgroundColor = "";
    document.getElementById("mainNav").style.fontSize = "";
  }
}

// Scroll to top button //

var btn = $("#scrollToTopBtn");

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "100");
});

//Landing page typeout//

typeout(
  ".typeout",
  ["Design Thinker", "product designer", "hiker", "UI/UX Designer"],
  {
    numLoops: 3,
    callback: function (el) {
      console.log("Callback");
      el.innerHTML += ".";
    },
  }
);
