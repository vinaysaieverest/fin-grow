export class Budget {
    private category: string;
    private budget: number;

    constructor(category: string, budget: number) {
        this.category = category;
        this.budget = budget;
    }

    public spend(spent: number): string | number {
        if (this.budget < spent) {
            return `${this.category} budget limit exceeds`;
        }
        this.budget -= spent;
        return this.budget;
    }
}

