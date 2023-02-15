<template>
    <div class="container">
        <h3>Novo Cliente</h3>
        <div class="form" style="padding: 1%;">
            <div class="col-10 box">
                <div>
                    <label class="form-label">Nome</label> 
                    <input type="text" required v-model="cliente.nome" class="form-control" placeholder="Nome">
                </div>
                <div>
                    <label class="form-label">Login</label>
                    <input type="text" required v-model="cliente.login" class="form-control" placeholder="Login">
                </div>
                <div>
                    <label class="form-label">Senha</label>
                    <input type="password" required v-model="cliente.senha" class="form-control">
                </div>
                <div class="botao">
                    <button class="btn btn-outline-success" @click="cadastrarCliente" style="margin-top: 5%">Cadastrar</button>
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
                cliente: {
                    nome: '',
                    login: '',
                    senha: ''
                }
            }
        },
        methods: {
            cadastrarCliente() {
                var data = {
                    nome: this.cliente.nome,
                    login: this.cliente.login,
                    senha: this.cliente.senha

                };

                ClienteDataServices.cadastrar(data)
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