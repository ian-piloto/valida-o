function validarFormulario() {
    const cpfRegex = /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/;
    const nomeRegex = /^[a-zA-Z\s]+$/;

    const cpf = document.getElementById("cpf").value;
    const nome = document.getElementById("nome").value;

    if (!cpfRegex.test(cpf)) {
        alert("CPF inválido. Insira um CPF válido.")
        return false;
    }
    if (!nomeRegex.test(nome)) {
        alert("Nome inválido. Use apenas letras e espaços.");
        return false;
    }
    return true
}