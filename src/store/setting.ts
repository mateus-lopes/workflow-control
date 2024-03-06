import { defineStore } from 'pinia';


export const useSetting = defineStore('setting', {
    state: () => ({
        darkmode: false,
        isThereFlow: false,
        sound: true,
        notification: true,
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,
    }),
    actions: {
        toggleDarkmode() {
            this.darkmode = !this.darkmode;
        },
        toggleSound() {
            this.sound = !this.sound;
        },
        toggleNotification() {
            this.notification = !this.notification;
        },
        setPomodoro(value: number) {
            this.pomodoro = value;
        },
        setShortBreak(value: number) {
            this.shortBreak = value;
        },
        setLongBreak(value: number) {
            this.longBreak = value;
        },
        startFlow() {
            this.isThereFlow = true;
        },
        stopFlow() {
            this.isThereFlow = false;
        }
    }
});