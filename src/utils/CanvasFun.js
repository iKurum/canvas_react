//粒子类
function CanvasPar(
  w,
  h,
  canvas,
  o = {
    color: [],
    number: 0,
    radius: 0,
    variantRadius: 0,
    speed: 0,
    variantSpeed: 0
  }) {
  if (!canvas.getContext) {
    return
  };
  const ctx = canvas.getContext("2d");
  // x坐标
  this.x = Math.floor((Math.random() * (w - o.radius)) + o.radius);
  // y坐标
  this.y = Math.floor((Math.random() * (h * 0.9 - h * 0.1)) + h * 0.1);
  // 速度量
  this.speed = o.speed + o.variantSpeed * Math.random();
  // 角度
  this.direction = Math.floor(Math.random() * 360);
  // 颜色
  const a = Array.from(o.color);
  this.color = a[Math.floor(Math.random() * a.length + 1) - 1];
  // 半径
  this.radius = o.radius + o.variantRadius * Math.random();
  this.vector = {
    x: this.speed * Math.cos(this.direction),
    y: this.speed * Math.sin(this.direction)
  };
  // 更新坐标
  this.update = () => {
    this.border();
    this.x += this.vector.x;
    this.y += this.vector.y;
  };
  // 边径检查
  this.border = () => {
    if (this.x + this.radius >= w || this.x - this.radius <= 0) {
      this.vector.x *= -1;
    };
    if (this.y + this.radius >= h || this.y - this.radius <= 0) {
      this.vector.y *= -1;
    };
    if (this.x > w) {
      this.x = w;
    };
    if (this.y > h) {
      this.y = h;
    };
    if (this.x < 0) {
      this.x = 0;
    };
    if (this.y < 0) {
      this.y = 0;
    };
  };
  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
};

export default CanvasPar;