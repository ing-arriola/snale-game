import Snake from './Snake.js'
export default class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene')
  }
  create(){
    this.Snake=new Snake(this);
  }

  update(time){
    console.log('update');
  }
}
