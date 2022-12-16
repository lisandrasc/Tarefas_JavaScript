function valor(){  
    var usuario = parseInt(prompt("Informe seu usuário: "));
    var senha = parseInt(prompt("Informe sua senha: "));
    
    if (usuario == 1234) {
        if (senha == 9999) {
            alert("Acesso permitido!")
        } else {
            alert("Senha incorreta!");
        }
    } else {
        alert("Usuário inválido!");
    }
    }