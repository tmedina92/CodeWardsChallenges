function bouncingBall(h, bounce, window) {
  if (bounce <= 0 || bounce >= 1 || window >= h || h <= 0) {
    return -1;
  } else {
    totalBounce = 1;
    while ((h *= bounce) > window) {
      totalBounce += 2;
    }
    return totalBounce;
  }
}
console.log(bouncingBall(30, 0.66, 1.5));
