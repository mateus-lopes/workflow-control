import { defineStore } from 'pinia';


export const useTimer = defineStore('timer', {
    state: () => ({
        time: 0,
        interval: 0,
        timerType: 'pomodoro',
        isRunning: false,
        cycles: 0,
        maxCycles: 4,
    }),
    actions: {
        startTimer() {
            this.isRunning = true;
            this.interval = setInterval(() => {
                this.time--;
                if (this.time <= 0) {
                    this.isRunning = false;
                    this.cycles++;
                    clearInterval(this.interval);
                }
            }, 1000);
        },
        resetTimer() {
            this.isRunning = false;
            this.cycles = 0;
            clearInterval(this.interval);
            // this.time = this[this.timerType] * 60;
        },
        changeTimerType(type: string) {
            this.timerType = type;
            // this.time = this[type] * 60;
        },
        
    },
    getters: {
        timeString(): string {
            const minutes = Math.floor(this.time / 60);
            const seconds = this.time % 60;
            return `${minutes}:${seconds.toString().padStart(2, '0')}`;
        },
        progress(): number {
            // return (this.time / (this[this.timerType] * 60)) * 100;
            return 0;
        },
        isPomodoro(): boolean {
            return this.timerType === 'pomodoro';
        },
        isShortBreak(): boolean {
            return this.timerType === 'shortBreak';
        },
        isLongBreak(): boolean {
            return this.timerType === 'longBreak';
        },
        isCyclesComplete(): boolean {
            return this.cycles >= this.maxCycles;
        },
    }
});