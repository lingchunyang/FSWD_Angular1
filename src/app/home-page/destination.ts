export class Destination {
    private id: number;
    private name: string;
    private price: number;
    private city: string;
    private numOfNights : number;
    private img?: string;

    public constructor(id: number, name: string, price: number, city: string,numOfNights : number, img?: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.city = city;
        this.img = img;
        this.numOfNights = numOfNights;
    }

    public getId(): number {
        return this.id;
    }

    public getName() : string {
        return this.name;
    }

    public getPrice() : number {
        return this.price;
    } 

    public getCity() : string {
        return this.city;
    }

    public getImage() : string | undefined {
        return this.img;
    } 

    public getNumOfNights() : number {
        return this.numOfNights;
    }

   
}