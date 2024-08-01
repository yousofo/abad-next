
function setCookie(name, value, days) {
  let maxAge = "";
  if (days) {
    maxAge = "; max-age=" + (days * 24 * 60 * 60);
  }
  document.cookie = name + "=" + (value || "") + maxAge + "; path=/; Secure; HttpOnly";
}

function setObjectToCookies(){}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}


function deleteCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
}


export { setCookie, getCookie, deleteCookie }