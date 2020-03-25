function Star(){
  this.x = random(-width,width);
  this.y = random(-height,height);
  this.z = random(width);
  this.pz = this.z;

  this.update = function(){
      this.z = this.z - speed;
      if(this.z<1){
          this.z = random(width);
          this.x = random(-width,width);
          this.y = random(-height,height);
          this.pz = this.z;
      }
  }

  this.show = function(){
      fill(255);
      noStroke();

      let sx = map(this.x / this.z,0,1,0,width);
      let sy = map(this.y / this.z,0,1,0,height);

      let r = map(this.z,0,width,16,0);
      ellipse(sx,sy,r,r);

      let px = map(this.sx / this.pz,0,1,0,width);
      let py = map(this.py / this.pz,0,1,0,height);

      this.pz = this.z;     
      
      stroke(255);
      line(px,py,sx,sy);
  }
}