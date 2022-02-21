export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  intervalId: 0,
  startTimer() {
    this.intervalId = setInterval(() => {
      this.secondsPassed += 1;
      if (this.secondsPassed === 60) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {
    const time = Number(this.secondsPassed / 100).toFixed(2);
    const fractionaryPart = (time + "").split(".")[1];
    return `${this.minsPassed}:${fractionaryPart}`;
  },
  stopTimer() {
    clearInterval(this.intervalId);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  },
};
timer.startTimer();
console.log(timer.getTime());
