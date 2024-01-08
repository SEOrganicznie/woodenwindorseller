window.onload = function() {
    if (!localStorage.getItem('cookies-read')) {
      document.getElementById('cookies-container').style.display = 'flex';
    }
  }

  function closeCookieInfo() {
    localStorage.setItem('cookies-read', 'true');
    document.getElementById('cookies-container').style.display = 'none';
  }