import { reactive } from 'vue';
import { defineStore } from 'pinia';
import { Flow } from '../types/Flow';

export const useTimer = defineStore('timer', () =>  {
    const state = reactive({
        time: 0,
        interval: 0,
        flow: {
            title: '',
            type: '',
            maxCycles: 0,
            styles: {
                lightColor: '#fff',
                darkColor: '',
                lightBackground: '#000',
                darkBackground: '',
                btnColor: ''
            }
        },
        timer:{
            flow: '',
            state: '',
            isBreak: false,
            isLongBreak: false
        },
        isRunning: false,
        cycle: 0,
    });

    function setFlow(params: Flow) { 
        console.log('oioioioioio')
        console.log(params)
        state.flow = {
            title:  params.title,
            type: params.type,
            maxCycles: params.maxCycles,
            styles: {
                lightColor: params.styles.lightColor,
                darkColor: params.styles.darkColor,
                lightBackground: params.styles.lightBackground,
                darkBackground: params.styles.darkBackground,
                btnColor: params.styles.btnColor
            }
        }
    }

    return {
        state,
        setFlow
    }
})