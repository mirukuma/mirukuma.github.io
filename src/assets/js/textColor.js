const nowTextColor = () => {
  const textColorList = ['#DDD', '#DDD', '#222', '#222', '#222', '222', '#222',' #DDD'];
  const time = new Date();
  const colorIndex = Math.round(time.getHours() / 3) % 8;
  return textColorList[colorIndex];
}

export default nowTextColor