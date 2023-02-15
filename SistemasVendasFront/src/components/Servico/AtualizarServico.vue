<template>
    <div class="container">
        <h3>Atualizar Serviço</h3>
        <div class="form" style="padding: 1%;">
            <div class="col-10 box">
                <div>
                    <label class="form-label">Id</label> 
                    <input type="text" disabled v-model="servico.id" class="form-control">
                </div>
                <div>
                    <label class="form-label">Nome</label> 
                    <input type="text" required v-model="servico.nome" class="form-control" placeholder="Nome">
                </div>
                <div>
                    <label class="form-label">Descrição</label>
                    <input type="textarea" required v-model="servico.descricao" class="form-control" placeholder="Descrição">
                </div>
                <div>
                    <label class="form-label">Valor</label>
                    <input type="number" required v-model="servico.valor" class="form-control" placeholder="Valor">
                </div>
                <div class="botao">
                    <button class="btn btn-outline-success" @click="atualizarServico" style="margin-top: 5%">Atualizar</button>
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
                servico: {}
            }
        },
        methods: {
            obterServico(id){
                ServicoDataServices.obterPorId(id)
                                    .then((response) => {
                                        this.servico = response.data;
                                    })
            },
            atualizarServico() {
                ServicoDataServices.atualizar(this.servico.id, this.servico)
                                    .then(() => {
                                        this.$router.push('listar');
                                    })
            }
        },
        mounted() {
            this.obterServico(this.$route.params.id);
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