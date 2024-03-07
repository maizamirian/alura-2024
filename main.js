const botoes = document. querySelectorAll('.botao'); 

for(let i= 0;<botoes.length;i++){
    botoes{i}.onclink= function(){

        for(let j=0;j<botoes.length;j++){
            botoes{j}.classlist.remove("ativo");
        }
        
        botoes{i}.classlist.add('ativo');
    }


}