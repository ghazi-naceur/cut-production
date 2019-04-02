export class Order {
    constructor(public id: string, public client: string, public model: string,
         public article: string, public minConfection: Number,
         public minCut: Number) { 
    }
 } 