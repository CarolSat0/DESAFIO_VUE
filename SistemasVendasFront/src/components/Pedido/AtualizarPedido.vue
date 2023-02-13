<template>
    <h3>Atualizar Pedido</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
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
            
            <button class="btn btn-success" @click="AtualizarPedido" style="margin-top: 5%">Atualizar</button>
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