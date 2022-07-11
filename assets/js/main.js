function googleSearch() {
    const val = document.getElementById('search').value
    window.open(
      (isURL(val) ? '' :
        'https://google.com/search?q=') + val,
        "_self")
  }

  
  document.onkeypress = function (e) {
    var key = e.charCode || e.keyCode
  
    if(key == '13'){
      const val = document.getElementById('search').value
      window.open(
        (isURL(val) ? '' :
          'https://google.com/search?q=') + val,
          "_self")          
   }
  };
  
  function isURL(url) {
    try {
      new URL(url)
      return true
    } catch (e) {
      return false
    }
  }

function luckySearch(){
    const val2 = document.getElementById('search').value;
    if(val2 == ''){
        window.open('https://www.google.com/doodles',"_self");
    }else if (val2 != ''){
        window.open('https://google.com/search?q=' + val2,"_self");
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menu1() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function menu2() {
    document.getElementById("myDropdown2").classList.toggle("show2");
  }
  
  // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
        }
        if (!event.target.matches('.dropbtn2')) {
            var dropdowns2 = document.getElementsByClassName("dropdown2-content");
            var e;
            for (e = 0; e < dropdowns2.length; e++) {
                var openDropdown2 = dropdowns2[e];
                if (openDropdown2.classList.contains('show2')) {
                openDropdown2.classList.remove('show2');
                }
            }
            }
    } 

    function setStyleSheet(url){
      var stylesheet = document.getElementById("stylesheet");
      stylesheet.setAttribute('href', url);
   }


   const changeLang = (languageCode) => {
    document.documentElement.setAttribute("lang", languageCode);
    lang = document.documentElement.setAttribute("lang", languageCode);
   };

    
