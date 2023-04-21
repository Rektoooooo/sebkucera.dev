class Country {
    private name: string;
    private capitalCity: string;
    private population: number;
    private area: number;
    private currency: string;
    private language: string;
    private president: string;

    constructor(
        name: string,
        capitalCity: string,
        population: string,
        area: string,
        currency: string,
        language: string,
        president: string
    ) {
        this.name = name;
        this.capitalCity = capitalCity;
        this.population = parseInt(population);
        this.area = parseFloat(area);
        this.currency = currency;
        this.language = language;
        this.president = president;
    }

    public getName(): string {
        return this.name;
    }

    public getCapitalCity(): string {
        return this.capitalCity;
    }

    public getPopulation(): number {
        return this.population;
    }

    public getArea(): number {
        return this.area;
    }

    public getCurrency(): string {
        return this.currency;
    }

    public getLanguage(): string {
        return this.language;
    }

    public getPresident(): string {
        return this.president;
    }
}
