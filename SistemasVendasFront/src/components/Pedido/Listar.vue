<template>
    <div class="container">
        <h3>Listagem de Pedidos</h3>
        <div class="col-7">
            <hr/>
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Data</th>
                    <th scope="col">Vendedor ID</th>
                    <th scope="col">Cliente ID</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="(pedido, index) in pedidos" :key ="index">
                        <td>{{ pedido.id }}</td>
                        <td>{{ pedido.data }}</td>
                        <td>{{ pedido.vendedorId }}</td>
                        <td>{{ pedido.clienteId }}</td>
                        <td>
                            <button class="btn btn-success" @click="editarPedido(pedido.id)">Editar</button>
                            <button class="btn btn-danger" @click="excluirPedido(pedido)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import PedidoDataServices from '../../services/PedidoDataServices';
    export default {
        data() {
            return {
                pedidos: []
            }
        },
        methods: {
            obterPedidos() {
                PedidoDataServices.listar()
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
            }
        },
        mounted() {
            this.obterPedidos();
        }
    }
</script>

<style>

*{
    margin: 0;
    padding: 0;
    border: 0;
}

.container{
    border: 1px solid black;
    margin: 5px auto;
    padding: 5%;
}
</style>