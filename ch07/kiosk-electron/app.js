const remote = require('electron').remote;

function toggleKiosk() {
  const button = document.getElementById('kiosk');
  const win = remote.getCurrentWindow();
  if (win.isKiosk()) {
    win.setKiosk(false);
    button.innerText = 'Enter kiosk mode';
  } else {
    win.setKiosk(true);
    button.innerText = 'Exit kiosk mode';
  }
}
