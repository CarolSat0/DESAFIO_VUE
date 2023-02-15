<template>
    <div class="container">
        <h3>Listagem de Pedidos - Vendedor: {{ this.$route.params.id }}</h3>
        <div class="col-10 box">
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Data</th>
                    <th scope="col">Cliente ID</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="(pedido, index) in pedidos" :key ="index">
                        <td>{{ pedido.id }}</td>
                        <td>{{ pedido.data }}</td>
                        <td>{{ pedido.clienteId }}</td>
                        <td>
                            <button class="btn btn-editar btn-outline-success" @click="editarPedido(pedido.id)">Editar</button>
                            <button class="btn btn-excluir btn-outline-danger" @click="excluirPedido(pedido)">Excluir</button>
                            <button class="btn btn-pedido btn-outline-info" @click="obterItemPedido(pedido.id)">Item Pedido</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import PedidoDataServices from '../../services/PedidoDataServices';
    import ItemPedidoDataServices from '../../services/ItemPedidoDataServices';
    export default {
        data() {
            return {
                pedidos: []
            }
        },
        methods: {
            obterPedidos(id) {
                PedidoDataServices.obterPorIdVendedor(id)
                                    .then(response =>
                                    {
                                        this.pedidos = response.data;
                                    })
            },
            editarPedido(id) {
                this.$router.push('/pedido/' + id);
            },
            async excluirPedido(pedido) {
                if(confirm(`Tem certeza que deseja excluir o Pedido ${pedido.nome}?`)) {
                    await PedidoDataServices.deletar(pedido.id);
                    this.obterPedidos();
                }
            },
            obterItemPedido(id){
                ItemPedidoDataServices.obterPorIdPedido(id)
                    this.$router.push('/pedido/ListarItemPedido/' + id);//rota que ta no router
            }
        },
        mounted() {
            this.obterPedidos(this.$route.params.id);
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
    width: 50%;
    border: 1px solid #A6B1E1;
    margin: 5% auto;
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

.btn-pedido{
    border: 1px solid #17a2b8;
    padding: 2%;
    margin-left: 5px;
}

.btn-pedido:hover{
    color: #fff;
}
</style>