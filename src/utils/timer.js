export function startTimer(duration, callback) {
  let start = Date.now();
  let timer = setInterval(() => {
    let elapsed = (Date.now() - start) / 1000;
    if (elapsed >= duration) {
      clearInterval(timer);
      callback(duration);
    } else {
      callback(elapsed);
    }
  }, 100);
  return timer;
}

export function pauseTimer(timer) {
  clearInterval(timer);
}

export function resetTimer(timer, callback) {
  clearInterval(timer);
  callback(0);
}

export function reverseTimer(duration, callback) {
  let start = Date.now();
  let timer = setInterval(() => {
    let elapsed = (Date.now() - start) / 1000;
    if (elapsed >= duration) {
      clearInterval(timer);
      callback(0);
    } else {
      callback(duration - elapsed);
    }
  }, 100);
  return timer;
}

