export class moneyView {
  showCoinFace() {
    const elementos = document.querySelectorAll('.moneyFace');
    elementos.forEach(element => {
      element.style.opacity = '1';
    });
  }
  showCoinSeal() {
    const elementos = document.querySelectorAll('.moneySeal');
    elementos.forEach(element => {
      element.style.opacity = '1';
    });
  }
  hideCoinFace() {
    const elementos = document.querySelectorAll('.moneyFace');
    elementos.forEach(element => {
      element.style.opacity = '0';
    });
  }
  hidenCoinSeal() {
    const elementos = document.querySelectorAll('.moneySeal');
    elementos.forEach(element => {
      element.style.opacity = '0';
    });
  }
}
