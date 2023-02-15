<template>
    <div class="container">
        <h3>Atualizar Cliente</h3>
        <div class="form" style="padding: 1%;">
            <div class="col-10 box">
                <div>
                    <label class="form-label">Id</label> 
                    <input type="text" disabled v-model="cliente.id" class="form-control">
                </div>
                <div>
                    <label class="form-label">Nome</label> 
                    <input type="text" required v-model="cliente.nome" class="form-control" placeholder="Nome">
                </div>
                <div>
                    <label class="form-label">Login</label>
                    <input type="text" disabled v-model="cliente.login" class="form-control">
                </div>
                <div>
                    <label class="form-label">Senha</label>
                    <input type="password" required v-model="cliente.senha" class="form-control">
                </div>
                <div class="botao">
                    <button class="btn btn-outline-success" @click="atualizarCliente" style="margin-top: 5%">Atualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ClienteDataServices from '../../services/ClienteDataServices';
    export default {
        data() {
            return {
                cliente: {}
            }
        },
        methods: {
            obterCliente(id){
                ClienteDataServices.obterPorId(id)
                                    .then((response) => {
                                        this.cliente = response.data;
                                    })
            },
            atualizarCliente() {
                ClienteDataServices.atualizar(this.cliente.id, this.cliente)
                                    .then(() => {
                                        this.$router.push('listar');
                                    })
            }
        },
        mounted() {
            this.obterCliente(this.$route.params.id);
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