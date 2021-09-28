function Entra() {
    const usuario = document.getElementById("usuario")
    const senha = document.getElementById("senha")
    
    

    if (usuario.value   == "" || senha.value == "") {
        window.alert("Campo de usuário ou senha vazio(s)")
       
    
    }else{
        window.alert("Logado com sucesso")
    }
}