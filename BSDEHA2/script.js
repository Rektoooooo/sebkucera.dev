function convertBinaryToDecimal() {
    const input = document.getElementById('binaryInput').value;

    if (!input) {
        document.getElementById('decimalResult').textContent = '-';
        return;
    }

    let output = 0;
    const binaryList = input.split('').map(Number).reverse();

    for (let index = 0; index < binaryList.length; index++) {
        output += binaryList[index] * Math.pow(2, index);
    }

    document.getElementById('decimalResult').textContent = output;
}

function convertDecimalToBinary() {
    let input = parseInt(document.getElementById('decimalInput').value);

    if (!input || isNaN(input)) {
        document.getElementById('binaryResult').textContent = '-';
        return;
    }

    if (input === 0) {
        document.getElementById('binaryResult').textContent = '0';
        return;
    }

    let outputList = [];

    while (input !== 0) {
        if (input % 2 === 0) {
            outputList.push('0');
        } else {
            outputList.push('1');
        }
        input = Math.floor(input / 2);
    }

    document.getElementById('binaryResult').textContent = outputList.reverse().join('');
}