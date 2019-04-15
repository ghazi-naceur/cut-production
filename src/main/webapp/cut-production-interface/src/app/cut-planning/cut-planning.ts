export class CutPlanning {
    constructor(public id: string, public exportDate: Date, public planningWeek: Number, public client: string,
        public model: string, public article: string, public quantity: Number, public efficiency: Number,
        public effective: Number, public presenceTime: Number, public absenteeismRate: Number) { 
    }
 }