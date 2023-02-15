<template>
    <div class="container">
        <h3>Novo Serviço</h3>
        <div class="form" style="padding: 1%;">
            <div class="col-10 box">
                <div>
                    <label class="form-label">Nome</label> 
                    <input type="text" required v-model="servico.nome" class="form-control" placeholder="Nome">
                </div>
                <div>
                    <label class="form-label">Descrição</label>
                    <input type="textarea" required v-model="servico.descricao" class="form-control" placeholder="Descrição do serviço">
                </div>
                <div>
                    <label class="form-label">Valor</label>
                    <input type="number" required v-model="servico.valor" class="form-control" placeholder="Valor do serviço">
                </div>
                <div class="botao">
                    <button class="btn btn-outline-success" @click="cadastrarServico" style="margin-top: 5%">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ServicoDataServices from '../../services/ServicoDataServices';
    export default {
        data() {
            return {
                servico: {
                    nome: '',
                    descricao: '',
                    valor: ''
                }
            }
        },
        methods: {
            cadastrarServico() {
                var data = {
                    nome: this.servico.nome,
                    descricao: this.servico.descricao,
                    valor: this.servico.valor

                };

                ServicoDataServices.cadastrar(data)
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