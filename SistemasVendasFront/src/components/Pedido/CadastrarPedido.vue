<template>
    <div class="container">
        <h3>Novo Pedido</h3>
        <div class="form" style="padding: 1%;">
            <div class="col-10 box">
                <div>
                    <label class="form-label">Data</label> 
                    <input type="date" required v-model="pedido.data" class="form-control">
                </div>
                <div>
                    <label class="form-label">Vendedor ID</label>
                    <input type="number" required v-model="pedido.vendedorId" class="form-control" placeholder="Vendedor ID">
                </div>
                <div>
                    <label class="form-label">Cliente ID</label>
                    <input type="number" required v-model="pedido.clienteId" class="form-control" placeholder="Cliente ID">
                </div>
                <div class="botao">
                    <button class="btn btn-outline-success" @click="cadastrarPedido" style="margin-top: 5%">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PedidoDataServices from '../../services/PedidoDataServices';
    export default {
        data() {
            return {
                pedido: {
                    data: '',
                    vendedorId: '',
                    clienteId: ''
                }
            }
        },
        methods: {
            cadastrarPedido() {
                var data = {
                    data: this.pedido.data,
                    vendedorId: this.pedido.vendedorId,
                    clienteId: this.pedido.clienteId

                };

                PedidoDataServices.cadastrar(data)
                                    .then(() => {
                                        this.$router.push('listar');
                                    })
            }
        }
    }
</script>

<style scoped>

h3{
    background-color: #F4EEFF;
    tex: #A6B1E1;
    display: flex;
    justify-content: center;
}

.container{
    width: 50%;
    border: 1px solid #A6B1E1;
    margin: 10% auto;
    padding: 2%;
}

.box{
    margin: 0 auto;
}

.form-label{
    margin-top: 5px;
}

.botao{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>