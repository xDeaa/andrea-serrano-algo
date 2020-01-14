const Colors = {
    BLUE: "blue",
    RED: "red",
    GREEN: "green",
    GREY: "grey"
}

const Symbol = {
    WATER: "water",
    FIRE: "fire",
    EARTH: "earth",
    WIND: "wind"
}

const Value = {
    ONE: "one",
    TWO: "two",
    THREE: "three",
    FOUR: "four",
    FIVE: "five",
    SIX: "six",
    SEVEN: "seven",
    QUEEN: "queen",
    KING: "king"
}


class Card {
    constructor(color, symbol, value) {
        this.color  = color;
        this.symbol = symbol;
        this.value  = value
    }
}

const cardQueenWater = new Card(Colors.BLUE, Symbol.WATER, Value.QUEEN)
const cardKingEarth = new Card(Colors.GREEN, Symbol.EARTH, Value.KING)
