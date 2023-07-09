"use strict";

function bottlesSong(bottles) {
    if (!Number.isInteger(bottles)) {
        return "";
    }

    let counter = bottles;

    while (counter > 0) {
        const firstCounter = counter;
        const secondCounter = --counter;

        let text1 = `${firstCounter} `;
        text1 = text1.concat(firstCounter > 1 ? "bottles" : "bottle");

        const text2 =
            secondCounter > 1
                ? `${secondCounter} bottles`
                : secondCounter > 0
                ? `${secondCounter} bottle`
                : "no more bottles";

        const song = `${text1} of beer on the wall, ${text1} of beer.\nTake one down and pass it around, ${text2} of beer on the wall.\n`;
        console.log(song);
    }

    console.log(
        `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, ${bottles} bottles of beer on the wall.`
    );
}

bottlesSong(10);
