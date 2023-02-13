<template>
    <h3>Novo Pedido</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
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
            <button class="btn btn-success" @click="cadastrar" style="margin-top: 5%">Cadastrar</button>
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
            cadastrar() {
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