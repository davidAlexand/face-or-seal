import { coin } from './coin.js';//Import class coin
import { coinRotate } from './coinRotate.js';//Import class coinRotate
import { blockTimeoOut } from './blockTimeOut.js';//IMport class blockTimeOut
import { moneyView } from './moneyView.js';
let launch = () => Math.random() >= 0.5;//Variable that have the object for tha obtain a value true:boolean
let additionface = 0;
let additionseal = 0;
const face = new coin();//object
const seal = new coin();//object
const again = new coin();//object
const counterFace = new coin();//object
const counterSeal = new coin();//object
const coinRotateFace = new coinRotate();//object
const coinRotateSeal = new coinRotate();//object
const coinRotateEmpty = new coinRotate();//object
const blockCheck = new blockTimeoOut();//object
const showCoinFace = new moneyView();//object
const showCoinSeal = new moneyView();//object
const hidenCoinFace = new moneyView();//object
const hidenCoinSeal = new moneyView();//object

blockCheck.blockBotton();
document.querySelector('.check').addEventListener('click', function () {
  coinRotateFace.coinRotateFace();//object that call the method
  coinRotateSeal.coinRotateSeal();//object that call the method
  coinRotateEmpty.coinRotateEmpty();//object that call the method
  if (launch()) {
    additionface++;
    showCoinFace.showCoinFace();
    if (additionface == 1) {
      hidenCoinSeal.hidenCoinSeal();
      additionseal = 0;
      again.messageAgain();
    } else if (additionface == 3) {
      face.messageFace();
    } else if (additionface == 4) {
      again.messageAgain();
    }
    counterFace.messageCounterFace();
  } else {
    showCoinSeal.showCoinSeal();
    additionseal++;
    if (additionseal == 1) {
      hidenCoinFace.hideCoinFace();
      additionface = 0;
      again.messageAgain();
    } else if (additionseal == 3) {
      seal.messageSeal();
    } else if (additionseal == 4) {
      again.messageAgain();
    }
    counterSeal.messageCounterSeal();
  }
});
