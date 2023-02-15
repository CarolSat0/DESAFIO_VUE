<template>
    <div class="container">
        <h3>Listagem de vendedores</h3>
        <div class="col-7 box">
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
                    <tr v-for="(vendedor, index) in vendedores" :key ="index">
                        <td>{{ vendedor.id }}</td>
                        <td>{{ vendedor.nome }}</td>
                        <td>{{ vendedor.login }}</td>
                        <td>
                            <button class="btn btn-editar btn-outline-success" @click="editarVendedor(vendedor.id)">Editar</button>
                            <button class="btn btn-excluir btn-outline-danger" @click="excluirVendedor(vendedor)">Excluir</button>
                            <button class="btn btn-pedido btn-outline-info" @click="obterPedido(vendedor.id)">Pedidos</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import VendedorDataServices from '../../services/VendedorDataServices';
    import PedidoDataServices from '../../services/PedidoDataServices';
    export default {
        data() {
            return {
                vendedores: []
            }
        },
        methods: {
            obterVendedores() {
                VendedorDataServices.listar()
                                    .then(response =>
                                    {
                                        this.vendedores = response.data;
                                    })
            },
            editarVendedor(id) {
                this.$router.push('/vendedor/' + id);
            },
            async excluirVendedor(vendedor) {
                if(confirm(`Tem certeza que deseja excluir o vendedor ${vendedor.nome}?`)) {
                    await VendedorDataServices.deletar(vendedor.id);
                    this.obterVendedores();
                }
            },
            obterPedido(id){
                PedidoDataServices.obterPorIdVendedor(id)
                    this.$router.push('/vendedor/ListarPedido/' + id);//rota que ta no router
            }
        },
        mounted() {
            this.obterVendedores();
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