export class Chip {
    id: number;
    name: string;
    values: string [];
    custom: boolean;

    constructor(id: number, name: string, values: string[], custom: boolean) {
        this.id = id;
        this.name = name;
        this.values = values;
        this.custom = custom;
    }
}
