export default class Snake {
  constructor(scene) {
    this.scene = scene;
    this.lastMoveTime=0;
    this.moveInterval=1000
    this.direction = Phaser.Math.Vector2.LEFT;
    this.body=[]
    this.body.push(this.scene.add.rectangle(100,100,16,16,0xff0000).setOrigin(0));
    this.body.push(this.scene.add.rectangle(0,0,16,16,0x0000ff).setOrigin(0));
    scene.input.keyboard.on('keydown', e => {this.keydown(e);})
  }

  keydown(event){
    console.log(event);
    switch (event.keyCode) {
      case 37://izquierda
        this.direction = Phaser.Math.Vector2.LEFT;
        break;
      case 38://arriba
        this.direction = Phaser.Math.Vector2.UP;
        break;
      case 39://derecha
        this.direction = Phaser.Math.Vector2.RIGHT;
        break;
      case 40://abajo
        this.direction = Phaser.Math.Vector2.DOWN;
        break;
      default:

    }
  }

  update(time){
    //this.body[0].x +=this.direction.x;
    //this.body[0].y +=this.direction.y;
    if(time>=this.lastMoveTime + this.moveInterval){
      this.lastMoveTime = time
      this.move()
    }
  }

  move(){
    this.body[0].x +=this.direction.x * 16;
    this.body[0].y +=this.direction.y * 16;
  }
}
