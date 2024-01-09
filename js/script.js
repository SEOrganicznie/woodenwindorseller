window.onload = function()
{
  includeHTML();
  console.log("run ciasteczka");
  if (!localStorage.getItem('cookies-read'))
  {
    document.getElementById('cookies-container').style.display = 'flex';
  }
}

function closeCookieInfo()
{
  console.log("run close ciasteczka");
  localStorage.setItem('cookies-read', 'true');
  document.getElementById('cookies-container').style.display = 'none';
}

function includeHTML()
{
  console.log("run code");
  var code = "get-html";
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
          if (this.status == 200) {element.innerHTML = this.responseText;}
          if (this.status == 404) {element.innerHTML = error404;}
          element.removeAttribute(code);
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
};