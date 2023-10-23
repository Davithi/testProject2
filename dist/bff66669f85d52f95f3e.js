import indexHTML from './index.html';

var searchText = document.getElementById("searchText");
if (searchText) {
  searchText.addEventListener("click", function (e) {
    // Please sync "Results Page" to the project
  });
}

var hotelsText = document.getElementById("hotelsText");
if (hotelsText) {
  hotelsText.addEventListener("click", function (e) {
    // Please sync "Hotels Page" to the project
  });
}

var searchFlightsButton = document.getElementById("searchFlightsButton");
if (searchFlightsButton) {
  searchFlightsButton.addEventListener("click", function (e) {
    // Please sync "Results Page" to the project
  });
}

var hotel = document.getElementById("hotel");
if (hotel) {
  hotel.addEventListener("click", function (e) {
    // Please sync "Hotels Page" to the project
  });
}

var viewAllStaysButton = document.getElementById("viewAllStaysButton");
if (viewAllStaysButton) {
  viewAllStaysButton.addEventListener("click", function (e) {
    // Please sync "Hotels Page" to the project
  });
}

var videoIcon = document.getElementById("videoIcon");
if (videoIcon) {
  videoIcon.addEventListener("click", function () {
    var popup = document.getElementById("matterhornPopup");
    if (!popup) return;
    var popupStyle = popup.style;
    if (popupStyle) {
      popupStyle.display = "flex";
      popupStyle.zIndex = 100;
      popupStyle.backgroundColor = "rgba(0, 0, 0, 0.3)";
      popupStyle.alignItems = "center";
      popupStyle.justifyContent = "center";
    }
    popup.setAttribute("closable", "");

    var onClick =
      popup.onClick ||
      function (e) {
        if (e.target === popup && popup.hasAttribute("closable")) {
          popupStyle.display = "none";
        }
      };
    popup.addEventListener("click", onClick);
  });
}

var videoIcon1 = document.getElementById("videoIcon1");
if (videoIcon1) {
  videoIcon1.addEventListener("click", function () {
    var popup = document.getElementById("matterhornPopup");
    if (!popup) return;
    var popupStyle = popup.style;
    if (popupStyle) {
      popupStyle.display = "flex";
      popupStyle.zIndex = 100;
      popupStyle.backgroundColor = "rgba(0, 0, 0, 0.3)";
      popupStyle.alignItems = "center";
      popupStyle.justifyContent = "center";
    }
    popup.setAttribute("closable", "");

    var onClick =
      popup.onClick ||
      function (e) {
        if (e.target === popup && popup.hasAttribute("closable")) {
          popupStyle.display = "none";
        }
      };
    popup.addEventListener("click", onClick);
  });
}

var videoIcon2 = document.getElementById("videoIcon2");
if (videoIcon2) {
  videoIcon2.addEventListener("click", function () {
    var popup = document.getElementById("matterhornPopup");
    if (!popup) return;
    var popupStyle = popup.style;
    if (popupStyle) {
      popupStyle.display = "flex";
      popupStyle.zIndex = 100;
      popupStyle.backgroundColor = "rgba(0, 0, 0, 0.3)";
      popupStyle.alignItems = "center";
      popupStyle.justifyContent = "center";
    }
    popup.setAttribute("closable", "");

    var onClick =
      popup.onClick ||
      function (e) {
        if (e.target === popup && popup.hasAttribute("closable")) {
          popupStyle.display = "none";
        }
      };
    popup.addEventListener("click", onClick);
  });
}

var videoIcon3 = document.getElementById("videoIcon3");
if (videoIcon3) {
  videoIcon3.addEventListener("click", function () {
    var popup = document.getElementById("matterhornPopup");
    if (!popup) return;
    var popupStyle = popup.style;
    if (popupStyle) {
      popupStyle.display = "flex";
      popupStyle.zIndex = 100;
      popupStyle.backgroundColor = "rgba(0, 0, 0, 0.3)";
      popupStyle.alignItems = "center";
      popupStyle.justifyContent = "center";
    }
    popup.setAttribute("closable", "");

    var onClick =
      popup.onClick ||
      function (e) {
        if (e.target === popup && popup.hasAttribute("closable")) {
          popupStyle.display = "none";
        }
      };
    popup.addEventListener("click", onClick);
  });
}
