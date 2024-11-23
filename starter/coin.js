//Clas money that
let additionface = 0;
let additionseal = 0;
export class coin {
  messageFace() {
    setTimeout(() => {
      this.text = document.querySelector('.label-score').textContent =
        'Win face!!!!';
    }, 2000);
  }
  messageSeal() {
    setTimeout(() => {
      this.text = document.querySelector('.label-score').textContent =
        'Win seal!!!!';
    }, 2000);
  }
  messageAgain() {
    additionface = 0;
    additionseal = 0;
    this.text = document.querySelector('.label-score').textContent = '';
    var imageFace = document.createElement('img');
    this.name = document.querySelector('.moneyAgain').appendChild(imageFace);
  }
  messageCounterFace() {
    additionface++;
    setTimeout(() => {
      this.message = document.querySelector(
        '.message'
      ).textContent = `Face ${additionface}`;
      var imageFace = document.createElement('img');
      this.name = document.querySelector('.moneyFace').appendChild(imageFace);
    }, 2000);
  }
  messageCounterSeal() {
    additionseal++;
    setTimeout(() => {
      this.message = document.querySelector(
        '.message'
      ).textContent = `Seal ${additionseal}`;
      var imageSeal = document.createElement('img');
      this.name = document.querySelector('.moneySeal').appendChild(imageSeal);
    }, 2000);
  }
}
