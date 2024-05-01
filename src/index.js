class Timer {
  constructor(workTime, breakTime, rounds) {
    this.workTime = workTime;
    this.breakTime = breakTime;
    this.rounds = rounds;
    this.timer;
    this.time = this.workTime * 60;
    this.currentTime = {
      minutes: workTime,
      seconds: 0,
      rounds: this.rounds,
      status: "stop",
      timeRaw: this.time,
      settings: { workTime, breakTime, rounds },
    };
    this.listener = null;
  }
  start() {
    if (
      this.currentTime.status == "stop" ||
      this.currentTime.status == "finished"
    ) {
      this.currentTime.status = "work";
    }
    this.timer = setInterval(() => {
      this.currentTime.minutes = Math.floor(this.time / 60);
      this.currentTime.seconds = this.time % 60;
      this.currentTime.timeRaw = this.time;
      console.log(this.time);
      this.time--;

      if (this.time < 0) {
        if (this.currentTime.rounds <= 0) {
          clearInterval(this.timer);
          this.currentTime.status = "finished";
        } else if (this.currentTime.status == "work") {
          this.currentTime.status = "break";
          this.time = this.breakTime * 60;
        } else if (this.currentTime.status == "break") {
          this.currentTime.status = "work";
          this.time = this.workTime * 60;
          this.currentTime.rounds--;
        }
      }
      console.log(this.currentTime);
      if (this.listener) {
        this.listener(this.currentTime);
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.timer);
    this.time = 0;
    this.currentTime.status = "stop";
  }
  next() {
    this.time = 0;
  }
  pause() {
    clearInterval(this.timer);
  }
  subscribe(listener) {
    this.listener = listener;
  }
}

module.exports = Timer;
