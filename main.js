const form = document.getElementById('form-telefone');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += '<tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

});