export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}
//  ShortCut Trick in TS to do the same
// export class Ingredient {
//     constructor(public name: string, public amount: number) {
//         }
// }
