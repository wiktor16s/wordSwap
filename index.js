window.onload = () => {

    const textArea = document.getElementById('textArea');
    const mixButton = document.getElementById('mixButton');
    const output = document.getElementById('output');
    let textArray = [];

    mixButton.onclick = () => {
        if (textArea.value.length > 1) {
            output.innerHTML = "";
            textArray = textArea.value.split(" ");

            for (let i = 0; i < textArray.length; i++) {
                let word = textArray[i].split('');

                if (word.length > 1) {
                    let first = word.shift();
                    let second;
                    let penultimate;
                    let last = word.pop();

                    if (textArray[i].length > 4) {
                        second = word.shift();
                    }
                    if (textArray[i].length > 6) {
                        penultimate = word.pop();
                    }

                    for (let j = word.length - 1; j > 0; j--) {

                        let k = Math.floor(Math.random() * (j + 1));
                        [word[j], word[k]] = [word[k], word[j]];
                    }
                    if (textArray[i].length > 4 && textArray[i].length < 6) {
                        printData(first + second + word.join("") + last);
                    } else if (textArray[i].length > 6) {
                        printData(first + second + word.join("") + penultimate + last);

                    } else {
                        printData(first + word.join("") + last);
                    }
                } else {
                    printData(word);
                }
            }
        }
    }

    printData = (data) => {
        output.innerHTML = output.innerHTML + " " + data;
    }

};