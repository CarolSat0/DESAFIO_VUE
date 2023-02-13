<template>
    <h3>Atualizar Item Pedido</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
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
            <button class="btn btn-success" @click="atualizarItemPedido" style="margin-top: 5%">Atualizar</button>
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