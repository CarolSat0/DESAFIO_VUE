<template>
    <div class="container">
        <h3>Listagem de Item Pedido</h3>
        <div class="col-7 box">
            <hr/>
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Pedido Id</th>
                    <th scope="col">Serviço Id</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="(itempedido, index) in itempedido" :key ="index">
                        <td>{{ itempedido.id }}</td>
                        <td>{{ itempedido.pedidoId }}</td>
                        <td>{{ itempedido.servicoId }}</td>
                        <td>{{ itempedido.quantidade }}</td>
                        <td>R${{ itempedido.valor }}</td>
                        <td>
                            <button class=" btn btn-editar btn-outline-success" @click="editarItemPedido(itempedido.id)">Editar</button>
                            <button class=" btn btn-excluir btn-outline-danger" @click="excluirItemPedido(itempedido)">Excluir</button>
                            <button class=" btn btn-servico btn-outline-info" @click="obterServico(itempedido.servicoId)">Serviço</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import ItemPedidoDataServices from '../../services/ItemPedidoDataServices';
    export default {
        data() {
            return {
                itempedido: []
            }
        },
        methods: {
            obterItemPedido() {
                ItemPedidoDataServices.listar()
                                    .then(response =>
                                    {
                                        this.itempedido = response.data;
                                    })
            },
            editarItemPedido(id) {
                this.$router.push('/itempedido/' + id);
            },
            async excluirItemPedido(itempedido) {
                if(confirm(`Tem certeza que deseja excluir o Item Pedido ${itempedido.id}?`)) {
                    await ItemPedidoDataServices.deletar(itempedido.id);
                    this.obterItemPedido();
                }
            },
            obterServico(id){
                ItemPedidoDataServices.obterPorIdServico(id)
                    this.$router.push('/itempedido/Listarservico/' + id); //rota que ta no router
            }
        },
        mounted() {
            this.obterItemPedido();
        }
    }
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    border: 0;
}

h3{
    background-color: #F4EEFF;
    display: flex;
    justify-content: center;
}

.container{
    width: 100%;
    border: 1px solid #A6B1E1;
    margin: 10% auto;
    padding: 2%;
}

.box{
    margin: 0 auto;
}

.btn-editar{
    border: 1px solid #28a745;
    padding: 2%;
}

.btn-excluir{
    border: 1px solid #dc3545;
    padding: 2%;
    margin-left: 5px;
}

.btn-servico{
    border: 1px solid #17a2b8;
    padding: 2%;
    margin-left: 5px;
}

.btn-servico:hover{
    color: #fff;
}
</style>