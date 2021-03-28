function conversao() {

    var euro = 6.49;
    var dolar = 5.51;
    var libra = 7.61;

    var valor = parseFloat(document.getElementById("valor").value);
    var result=document.getElementById("resultado");

    var opcao = document.getElementById("res").value;
   

    switch (opcao) {
        case "€":
                result.value = (valor / euro).toFixed(2);
            break;
        case "US$":
                result.value = (valor / dolar).toFixed(2);
            break;
        case "£":
                result.value = (valor / libra).toFixed(2);
            break;
        default:
                result.value = "Opção não reconhecida";
            break;
    }               
    
}

