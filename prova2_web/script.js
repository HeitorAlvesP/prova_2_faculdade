document.getElementById('adicionarProduto').addEventListener('click', function () {
    let produto = document.getElementById('produtoInput').value;

    if (produto) {
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        let leftDiv = document.createElement('div');
        leftDiv.classList.add('d-flex', 'align-items-center');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('me-2');
        checkbox.addEventListener('change', moverItem);

        let nomeSpan = document.createElement('span');
        nomeSpan.classList.add('nome-produto');
        nomeSpan.textContent = produto;

        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(nomeSpan);

        let buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons-container', 'd-flex');

        let editarBtn = document.createElement('button');
        editarBtn.classList.add('btn', 'btn-warning', 'btn-sm', 'me-2');
        editarBtn.textContent = 'Editar';

        editarBtn.addEventListener('click', function () {
            editarProduto(nomeSpan);
        });

        let excluirBtn = document.createElement('button');
        excluirBtn.classList.add('btn', 'btn-danger', 'btn-sm');
        excluirBtn.textContent = 'Excluir';

        excluirBtn.addEventListener('click', function () {
            excluirProduto(li);
        });

        buttonsContainer.appendChild(editarBtn);
        buttonsContainer.appendChild(excluirBtn);

        li.appendChild(leftDiv);
        li.appendChild(buttonsContainer);

        document.getElementById('listaCompras').appendChild(li);
        document.getElementById('produtoInput').value = '';

        Swal.fire({
            title: 'Adicionado!',
            text: 'O produto foi adicionado à sua lista.',
            icon: 'success',
            confirmButtonText: 'Fechar'
        });

    } else {
        Swal.fire({
            title: 'Nome em Branco',
            text: 'Digite o nome do produto',
            icon: 'info',
            confirmButtonText: 'Fechar'
        });
    }

    function moverItem(event) {
        let item = event.target.closest('li');
        let lista = document.getElementById('listaCompras');

        if (event.target.checked) {
            lista.appendChild(item);
        } else {
            lista.insertBefore(item, lista.firstChild);
        }
    }

    function editarProduto(nomeSpan) {
        let novoNome = prompt('Digite o novo nome para o produto:', nomeSpan.textContent.trim());
        if (novoNome) {
            nomeSpan.textContent = novoNome;

            Swal.fire({
                title: 'Alteração concluída',
                text: `O nome foi alterado para ${novoNome}`,
                icon: 'success',
                confirmButtonText: 'Fechar'
            });
        }
    }

    function excluirProduto(item) {
        item.remove();

        Swal.fire({
            title: 'Produto excluído',
            text: 'O produto foi removido com sucesso.',
            icon: 'error',
            confirmButtonText: 'Fechar'
        });
    }
});