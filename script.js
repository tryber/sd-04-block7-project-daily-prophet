const CURRENTDATE = document.getElementById('current-date');

function GetDate() {
  const MONTH = ['January', 'February', 'March', 'abril', 'May', 'junho', 'agosto', 'outubro', 'November', 'Dezember'];
  const DATE = new Date();
  return `${MONTH[DATE.getMonth()]}, ${DATE.getDate()}, ${DATE.getFullYear()}`;
}

CURRENTDATE.innerText = GetDate();
