export const getPolygonsPostion = (x, y, num, radius, arc) => {
  if (!x || !y || !num || !radius) {
    return;
  }
  let polygonPoints = [];
  // 先清Canvas畫布,w為Canvas寬度,h為Canvas高度
  let angle = ((360 / num) * (0 + 1) * Math.PI) / 180;
  let actAngle = angle - Math.PI / 2;
  let moveX = Math.cos(actAngle) * radius;
  let moveY = Math.sin(actAngle) * radius;

  //起點
  //x + moveX, y + moveY

  for (var i = 0; i < num; i++) {
    angle = ((360 / num) * (i + 1) * Math.PI) / 180;
    actAngle = angle - Math.PI / 2;
    moveX = Math.cos(actAngle) * radius;
    moveY = Math.sin(actAngle) * radius;
    // ctx.lineTo(x + moveX, y + moveY);

    polygonPoints.push({ x: x + moveX, y: y + moveY });
  }

  return polygonPoints;

  // 畫外接圓
  // if (arc) {
  //   vw.ctx.beginPath();
  //   vw.ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
  //   vw.ctx.stroke();
  // }
};
