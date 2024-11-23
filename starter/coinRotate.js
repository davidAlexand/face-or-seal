//Clas that have the class coinRotate that have the methods of rorate image
export class coinRotate {
  coinRotateFace() {
    //method of rotate the image moneyFace
    this.movent = document.querySelector('.moneyFace');
    const rollingKeyframes = new KeyframeEffect(
      this.movent,
      [
        { transform: 'translateY(-150%) rotateY(9.0turn)'},
        { transform: 'translateX(0%) rotateX(turn)' },
        { transform: 'translateZ(0%) rotateZ(0turn)' },
       
      ],
      {
        duration: 400,
        direction: 'alternate',
        easing: 'ease-in-out',
        iterations: '4',
      }
    );
    const rollingAnimation = new Animation(rollingKeyframes, document.timeline);
    rollingAnimation.play();
  }
  coinRotateSeal() {
    //method of rotate the image moneyFace
    this.movent = document.querySelector('.moneySeal');
    const rollingKeyframes = new KeyframeEffect(
      this.movent,
      [
        { transform: 'translateY(-150%) rotateY(9.0turn)' },
        { transform: 'translateX(0%) rotateX(turn)' },
        { transform: 'translateZ(0%) rotateZ(0turn)' },
      ],
      {
        duration: 400,
        direction: 'alternate',
        easing: 'ease-in-out',
        iterations: '4',
      }
    );
    const rollingAnimation = new Animation(rollingKeyframes, document.timeline);
    rollingAnimation.play();
  }
  coinRotateEmpty() {
    //method of rotate the image moneyAgain
    this.movent = document.querySelector('.moneyAgain');
    const rollingKeyframes = new KeyframeEffect(
      this.movent,
      [
        { transform: 'translateY(-150%) rotateY(9.0turn)' },
        { transform: 'translateX(0%) rotateX(turn)' },
        { transform: 'translateZ(0%) rotateZ(0turn)' },
        { opacity: '10' },
      ],
      {
        duration: 400,
        direction: 'alternate',
        easing: 'ease-in-out',
        iterations: '4',
        opacity: '0',
      }
    );
    const rollingAnimation = new Animation(rollingKeyframes, document.timeline);
    rollingAnimation.play();
  }
}
