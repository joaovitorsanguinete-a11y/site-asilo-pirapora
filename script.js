// FUNÇÃO PARA COPIAR A CHAVE PIX AUTOMATICAMENTE
function copiarPix() {
    const chaveElemento = document.getElementById("chavePix");
    const textoChave = chaveElemento.innerText;
    
    navigator.clipboard.writeText(textoChave).then(() => {
        const botao = document.getElementById("btnCopiar");
        const textoOriginal = botao.innerText;
        
        botao.innerText = "✓ Chave CNPJ Copiada!";
        botao.style.backgroundColor = "#2e7d32"; 
        
        setTimeout(() => {
            botao.innerText = textoOriginal;
            botao.style.backgroundColor = ""; 
        }, 3000);
        
    }).catch(err => {
        console.error("Erro ao copiar texto: ", err);
        alert("Não foi possível copiar automaticamente. Selecione o texto e copie manualmente.");
    });
}

document.getElementById("anoAtual").innerText = new Date().getFullYear();