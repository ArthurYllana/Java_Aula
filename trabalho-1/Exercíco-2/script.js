let num = prompt("Digite um número inteiro positivo: " , "");

if (num === 1) {
    num = false; // 1 não é primo
} else {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            num = false;
        }
    }
}