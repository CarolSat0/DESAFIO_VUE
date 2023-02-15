<template>
    <div class="container">
        <h3>Listagem de Cliente</h3>
        <div class="col-7 box">
            <hr/>
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Login</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                    <tbody>
                        <tr v-for="(cliente, index) in clientes" :key ="index">
                            <td>{{ cliente.id }}</td>
                            <td>{{ cliente.nome }}</td>
                            <td>{{ cliente.login }}</td>
                            <td>
                                <button class="btn btn-editar btn-outline-success" @click="editarCliente(cliente.id)">Editar</button>
                                <button class="btn btn-excluir btn-outline-danger" @click="excluirCliente(cliente)">Excluir</button>
                                <button class="btn btn-pedido btn-outline-info" @click="obterPedido(cliente.id)">Pedidos</button>
                            </td>
                        </tr>
                    </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import ClienteDataServices from '../../services/ClienteDataServices';
    import PedidoDataServices from '../../services/PedidoDataServices';
    export default {
        data() {
            return {
                clientes: []
            }
        },
        methods: {
            obterClientes() {
                ClienteDataServices.listar()
                                    .then(response =>
                                    {
                                        this.clientes = response.data;
                                    })
            },
            editarCliente(id) {
                this.$router.push('/cliente/' + id);
            },
            async excluirCliente(cliente) {
                if(confirm(`Tem certeza que deseja excluir o cliente ${cliente.nome}?`)) {
                    await ClienteDataServices.deletar(cliente.id);
                    this.obterClientes();
                }
            },
            obterPedido(id){
                PedidoDataServices.obterPorIdCliente(id)
                    this.$router.push('/cliente/ListarPedido/' + id);//rota que ta no router
            }
        },
        mounted() {
            this.obterClientes();
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

.btn-pedido{
    border: 1px solid #17a2b8;
    padding: 2%;
    margin-left: 5px;
}

.btn-pedido:hover{
    color: #fff;
}
</style>