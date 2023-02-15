<template>
    <div class="container">
        <h3>Atualizar Vendedor</h3>
        <div class="form" style="padding: 1%;">
            <div class="col-10 box">
                <div>
                    <label class="form-label">Id</label> 
                    <input type="text" disabled v-model="vendedor.id" class="form-control">
                </div>
                <div>
                    <label class="form-label">Nome</label> 
                    <input type="text" required v-model="vendedor.nome" class="form-control" placeholder="Nome">
                </div>
                <div>
                    <label class="form-label">Login</label>
                    <input type="text" disabled v-model="vendedor.login" class="form-control">
                </div>
                <div>
                    <label class="form-label">Senha</label>
                    <input type="password" required v-model="vendedor.senha" class="form-control">
                </div>
                <div class="botao">
                    <button class="btn btn-outline-success" @click="atualizarVendedor" style="margin-top: 5%">Atualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import VendedorDataServices from '../../services/VendedorDataServices';
    export default {
        data() {
            return {
                vendedor: {}
            }
        },
        methods: {
            obterVendedor(id){
                VendedorDataServices.obterPorId(id)
                                    .then((response) => {
                                        this.vendedor = response.data;
                                    })
            },
            atualizarVendedor() {
                VendedorDataServices.atualizar(this.vendedor.id, this.vendedor)
                                    .then(() => {
                                        this.$router.push('listar');
                                    })
            }
        },
        mounted() {
            this.obterVendedor(this.$route.params.id);
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