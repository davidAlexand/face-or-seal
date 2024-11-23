//Class that have the method(blockBotton) that block the botton (clas="btn check") for a 2.5 seconds.
export class blockTimeoOut {
  blockBotton() {
    //method blockBotton
    const botton = document.querySelector('.check');
    const check = document.querySelector('.check');
    check.addEventListener('click', function () {
      botton.disabled = true;
      setTimeout(function () {
        botton.disabled = false;
      }, 2500);
    });
  }
}
