window.onload = function()
{
  loadHTML();
  if (!localStorage.getItem('cookies-read'))
  {
    document.getElementById('cookies-container').style.display = 'flex';
  }
}

document.querySelector('.header-dropdownmenu').style.display = 'none';
function dropDownmenu()
{
  var dropdownMenu = document.querySelector('.header-dropdownmenu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
}

function closeCookieInfo()
{
  localStorage.setItem('cookies-read', 'true');
  document.getElementById('cookies-container').style.display = 'none';
}

function loadHTML()
{
  var code = "data-get-html";
  var error404 = "Nie znaleziono takiej strony";
  var elements, i, element, file, xhttp;
  elements = document.getElementsByTagName("*");
  for (i = 0; i < elements.length; i++)
  {
    element = elements[i];
    file = element.getAttribute(code);
    if (file)
    {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function()
      {
        if (this.readyState == 4)
        {
          if (this.status == 200) element.innerHTML = this.responseText;
          if (this.status == 404) element.innerHTML = error404;
          element.removeAttribute(code);
          loadHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};