//粒子类
function CanvasPar(
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
  // 速度量
  this.speed = o.speed + o.variantSpeed * Math.random();
  // 角度
  this.direction = Math.floor(Math.random() * 360);
  // 颜色
  const a = Array.from(o.color);
  this.color = a[Math.floor(Math.random() * a.length + 1) - 1];
  // 半径
  this.radius = o.radius + o.variantRadius * Math.random();
  // x坐标
  this.x = Math.floor((Math.random() * (o.w - this.radius)) + this.radius);
  // y坐标
  this.y = Math.floor((Math.random() * (o.h - this.radius)) + this.radius);
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
    if (this.x + this.radius >= o.w || this.x - this.radius <= 0) {
      this.vector.x *= -1;
    };
    if (this.y + this.radius >= o.h || this.y - this.radius <= 0) {
      this.vector.y *= -1;
    };
    if (this.x > o.w) {
      this.x = o.w;
    };
    if (this.y > o.h) {
      this.y = o.h;
    };
    if (this.x < 0) {
      this.x = 0;
    };
    if (this.y < 0) {
      this.y = 0;
    };
  };
  // 绘制
  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
};

// 计算两个粒子的距离
function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}
function linePoint(point, hub, o, ctx) {
  for (let i = 0; i < hub.length; i++) {
    const d = getDistance(point, hub[i]);
    const opacity = 1 - d / o.minDistance;
    if (opacity > 0 && o.lineWidth > 0) {
      ctx.lineWidth = o.lineWidth;
      ctx.strokeStyle = colorRgb(o.lineColor, opacity) || o.lineColor;
      ctx.beginPath();
      ctx.moveTo(point.x, point.y);
      ctx.lineTo(hub[i].x, hub[i].y);
      ctx.closePath();
      ctx.stroke();
    }
  }
};

const colorRgb = (s, o) => {
  // 16进制颜色值的正则
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 把颜色值变成小写
  var color = s.toLowerCase();
  if (reg.test(color)) {
    // 如果只有三位的值，需变成六位，如：#fff => #ffffff
    if (color.length === 4) {
      var colorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }
      color = colorNew;
    }
    // 处理六位的颜色值，转为RGB
    var colorChange = [];
    for (let i = 1; i < 7; i += 2) {
      colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
    }
    return "RGB(" + colorChange.join(",") + "," + o +")";
  } else {
    return color;
  }
};

export { CanvasPar, linePoint };