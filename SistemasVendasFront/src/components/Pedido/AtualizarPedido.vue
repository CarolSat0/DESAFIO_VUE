<template>
    <div class="container">
        <h3>Atualizar Pedido</h3>
        <div class="form" style="padding: 1%;">
            <div class="col-10 box">
                <div>
                    <label class="form-label">Id</label> 
                    <input type="text" disabled v-model="pedido.id" class="form-control">
                </div>
                <div>
                    <label class="form-label">Data</label> 
                    <input type="date" required v-model="pedido.data" class="form-control">
                </div>
                <div>
                    <label class="form-label">Vendedor ID</label>
                    <input type="number" required v-model="pedido.vendedorId" class="form-control">
                </div>
                <div>
                    <label class="form-label">Cliente ID</label>
                    <input type="number" required v-model="pedido.clienteId" class="form-control">
                </div>
                <div class="botao">
                    <button class="btn btn-outline-success" @click="AtualizarPedido" style="margin-top: 5%">Atualizar</button>
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
                pedido: {}
            }
        },
        methods: {
            obterPedido(id){
                PedidoDataServices.obterPorId(id)
                                    .then((response) => {
                                        this.pedido = response.data;
                                    })
            },
            AtualizarPedido() {
                PedidoDataServices.atualizar(this.pedido.id, this.pedido)
                                    .then(() => {
                                        this.$router.push('listar');
                                    })
            }
        },
        mounted() {
            this.obterPedido(this.$route.params.id);
        }
    }
</script>

<style scoped>

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