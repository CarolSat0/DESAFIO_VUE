<template>
    <h3>Atualizar Serviço</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
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
            <button class="btn btn-success" @click="atualizarServico" style="margin-top: 5%">Atualizar</button>
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