    function main(){
        var nome = " "
        var sobrenome = " "
        var nota1, nota2, nota3, nota4, media;
    
        window.alert("Qual seu nome");
        nome = window.prompt('digite seu nome');
        window.alert("Qual seu sobrenome?:");
        sobrenome = window.prompt('escreva o sobrenome');
    
        nota1 = Number(window.prompt ("Digite o numero", "0"));
        nota2 = Number(window.prompt ("Digite o numero", "0")); 
        nota3 = Number(window.prompt ("Digite o numero", "0"));
        nota4 = Number(window.prompt ("Digite o numero", "0"));
        media = (nota1+nota2+nota3+nota4) / 4;
        window.alert(media);
    
        window.alert("O seu nome é: " + nome +
         " e o seu sobrenome:" + sobrenome + " \n e sua media foi: "+ media)
    
         if(media >=6){
             window.alert("Parabens voce esta aprovado!");
         }else{
             window.alert("Voce esta reprovado");
         }
    
    
    }

    