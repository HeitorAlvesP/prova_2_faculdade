document.getElementById('adicionarProduto').addEventListener('click', function() {
    let produto = document.getElementById('produtoInput').value;

    if (produto) {
        let li = document.createElement('li');
        li.classList.add('list-group-item');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('me-2');
        checkbox.addEventListener('change', moverItem);


        let editarBtn = document.createElement('button');
        editarBtn.classList.add('btn', 'btn-warning', 'btn-sm', 'me-2');
        editarBtn.textContent = 'Editar';

        editarBtn.addEventListener('click', function() {
            editarProduto(li);
        });        

        let excluirBtn = document.createElement('button');
        excluirBtn.classList.add('btn', 'btn-danger', 'btn-sm');
        excluirBtn.textContent = 'Excluir';

        excluirBtn.addEventListener('click', function() {
            excluirProduto(li);
        });

        

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(produto));
        li.appendChild(editarBtn);
        li.appendChild(excluirBtn);

        document.getElementById('listaCompras').appendChild(li);
        document.getElementById('produtoInput').value = '';

        Swal.fire({
            title: 'Adicionado!',
            text: 'O produto foi adicionado à sua lista.',
            icon: 'success',
            confirmButtonText: 'Fechar'
        });

    } else{
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

    function editarProduto(item) {
        let novoNome = prompt('Digite o novo nome para o produto:', item.firstChild.textContent.trim());
        if (novoNome) {
            item.firstChild.textContent = novoNome;

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