function Entra() {
    const usuario = document.getElementById("usuario")
    const senha = document.getElementById("senha")
    
    

    if (usuario.value  == "" || senha.value == "") {
        window.alert("Campo de usuário ou senha vazio(s)")
       
    
    }
    
}

function Cadastra() {
    const nome = document.getElementById("nomec")
    const data = document.getElementById("datanac")
    const usuarioc = document.getElementById("usuarioc")
    const senhac = document.getElementById("senhac")
    
    if (nome.value  == "" || data.value == "" || usuarioc.value   == "" || senhac.value == "") {
        window.alert("Algum campo vazio")
        
        
    }
}
