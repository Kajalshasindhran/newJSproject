function message() {
    let num = Math.floor(Math.random() * 6);

    if (num === 1) {
        console.log("Believe you can, and you're halfway there.");
    }

    else if (num === 2) {
        return "You are never too old to set another goal or to dream a new dreams"
    }

    else if (num === 3) {
        return "The only way to do great work is to love what you do."
    }


     else if (num === 4) {
        return "In the middle of every difficulty lies opportunity."
    }


    else if (num === 5) {
        return "Your time is limited, don't waste it living someone else's life."
    }

    else {
        return "The future depends on what you do today."
    }
}

console.log(message());