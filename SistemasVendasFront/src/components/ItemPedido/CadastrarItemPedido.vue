<template>
    <div class="container">
        <h3>Novo Item Pedido</h3>
        <div class="form" style="padding: 1%;">
            <div class="col-10 box">
                <div>
                    <label class="form-label">Quantidade</label> 
                    <input type="number" required v-model="itempedido.quantidade" class="form-control" placeholder="Quantidade">
                </div>
                <div>
                    <label class="form-label">Valor</label>
                    <input type="number" required v-model="itempedido.valor" class="form-control" placeholder="Valor">
                </div>
                <div>
                    <label class="form-label">Pedido ID</label>
                    <input type="number" required v-model="itempedido.pedidoId" class="form-control" placeholder="Pedido ID">
                </div>
                <div>
                    <label class="form-label">Servico ID</label>
                    <input type="number" required v-model="itempedido.servicoId" class="form-control" placeholder="Serviço ID">
                </div>
                <div class="botao">
                    <button class="btn btn-outline-success" @click="Cadastrar" style="margin-top: 5%">Cadastrar</button>
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
                itempedido: {
                    quantidade: '',
                    valor: '',
                    pedidoId: '',
                    servicoId: ''
                }
            }
        },
        methods: {
            Cadastrar() {
                var data = {
                    quantidade: this.itempedido.quantidade,
                    valor: this.itempedido.valor,
                    pedidoId: this.itempedido.pedidoId,
                    servicoId: this.itempedido.servicoId

                };

                ItemPedidoDataServices.cadastrar(data)
                                    .then(() => {
                                        this.$router.push('listar');//após cadastrar, vai levar para este local
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