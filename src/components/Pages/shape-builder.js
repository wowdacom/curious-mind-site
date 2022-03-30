export const getPolygonsPostion = (x, y, num, size, arc) => {
  if (!x || !y || !num || !size) {
    return;
  }
  let polygonPoints = [];
  // 先清Canvas畫布,w為Canvas寬度,h為Canvas高度
  let angle = ((360 / num) * (0 + 1) * Math.PI) / 180;
  let actAngle = angle - Math.PI / 2;
  let moveX = Math.cos(actAngle) * size;
  let moveY = Math.sin(actAngle) * size;

  //起點
  //x + moveX, y + moveY

  for (var i = 0; i < num; i++) {
    angle = ((360 / num) * (i + 1) * Math.PI) / 180;
    actAngle = angle - Math.PI / 2;
    moveX = Math.cos(actAngle) * size;
    moveY = Math.sin(actAngle) * size;
    // ctx.lineTo(x + moveX, y + moveY);

    polygonPoints.push({ x: x + moveX, y: y + moveY });
  }

  return polygonPoints;

  // 畫外接圓
  // if (arc) {
  //   vw.ctx.beginPath();
  //   vw.ctx.arc(x, y, size, 0, 2 * Math.PI, true);
  //   vw.ctx.stroke();
  // }
};
