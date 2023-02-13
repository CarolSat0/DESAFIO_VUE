<template>
    <h3>Novo Serviço</h3>
    <div class="form" style="padding: 1%;">
        <hr/>
        <div class="col-4">
            <div>
                <label class="form-label">Nome</label> 
                <input type="text" required v-model="servico.nome" class="form-control" placeholder="Nome">
            </div>
            <div>
                <label class="form-label">Descrição</label>
                <input type="textarea" required v-model="servico.descricao" class="form-control" placeholder="Descrição do serviço">
            </div>
            <button class="btn btn-success" @click="cadastrarServico" style="margin-top: 5%">Cadastrar</button>
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
                    descricao: ''
                }
            }
        },
        methods: {
            cadastrarServico() {
                var data = {
                    nome: this.servico.nome,
                    descricao: this.servico.descricao,

                };

                ServicoDataServices.cadastrar(data)
                                    .then(() => {
                                        this.$router.push('listar');
                                    })
            }
        }
    }
</script>