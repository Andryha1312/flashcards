criarCartao(
    "Pierce the veil",    
    "quam a musica mais famosa do ptv?",  
    "King for a day" 
);

criarCartao(
    "My chemical romance",    
    "em que ano o mcr foi formado?",  
    "2001" 
);

criarCartao(
    "Paramore",    
    "Qual foi a primeira musica lançada pelo paramore?",  
    "Conspiracy" 
);

criarCartao(
    "Evanescence",    
    "Quem é a vocalista do Evanescence?",  
    "Amy Lee" 
);

criarCartao(
    "She wants revenge",    
    "em que cidade/estado o she wants revenge foi formado?",  
    "Los Angeles, califórnia" 
);

criarCartao(
    "Get Scared",    
    "Qual o genero Musical do Get Scared?",  
    "post-hardcore, mas com influências de outros estilos como emo, rock alternativo e metalcore." 
);

criarCartao(
    "sleeping with sirens",    
    "Quantas albuns tem o sleeping with sirens?",  
    "7 albuns"
);

criarCartao(
    "Chase Atlantic",    
    "Quem é o membro mais novo do chase atlantic?",  
    "Christian Anthony" 
);

document.querySelectorAll('#container .cartao').forEach(cartao => {
    if (!cartao.innerHTML.trim()) {
        cartao.remove();
    }
});