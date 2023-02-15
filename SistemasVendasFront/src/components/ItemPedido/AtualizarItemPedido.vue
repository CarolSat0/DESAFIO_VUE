<template>
    <div class="container">
        <h3>Atualizar Item Pedido</h3>
        <div class="form" style="padding: 1%;">
            <div class="col-10 box">
                <div>
                    <label class="form-label">Id</label> 
                    <input type="number" disabled v-model="itempedido.id" class="form-control">
                </div>
                <div>
                    <label class="form-label">Quantidade</label> 
                    <input type="number" required v-model="itempedido.quantidade" class="form-control">
                </div>
                <div>
                    <label class="form-label">Valor</label>
                    <input type="number" required v-model="itempedido.valor" class="form-control">
                </div>
                <div>
                    <label class="form-label">Pedido ID</label>
                    <input type="number" required v-model="itempedido.pedidoId" class="form-control">
                </div>
                <div class="botao">
                    <button class="btn btn-outline-success" @click="atualizarItemPedido" style="margin-top: 5%">Atualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemPedidoDataServices from '../../services/ItemPedidoDataServices';
    export default {
        data() {
            return {
                itempedido: {}
            }
        },
        methods: {
            obterItemPedido(id){
                ItemPedidoDataServices.obterPorId(id)
                                    .then((response) => {
                                        this.itempedido = response.data;
                                    })
            },
            atualizarItemPedido() {
                ItemPedidoDataServices.atualizar(this.itempedido.id, this.itempedido)
                                    .then(() => {
                                        this.$router.push('listar');
                                    })
            }
        },
        mounted() {
            this.obterItemPedido(this.$route.params.id);
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