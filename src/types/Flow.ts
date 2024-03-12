interface Styles {
    lightColor: string,
    lightBackground: string,
    darkColor: string,
    darkBackground: string,
    btnBackground: string,
    btnColor: string,
}

export interface Flow {
    title: string;
    type: string;
    maxCycles: number;    
    styles: Styles
}