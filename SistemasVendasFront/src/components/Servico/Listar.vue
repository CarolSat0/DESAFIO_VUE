<template>
    <div class="container">
        <h3>Listagem de Serviços</h3>
        <div class="col-7">
            <hr/>
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Descricao</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="(servico, index) in servicos" :key ="index">
                        <td>{{ servico.id }}</td>
                        <td>{{ servico.nome }}</td>
                        <td>{{ servico.descricao }}</td>
                        <td>
                            <button class="btn btn-success" @click="editarServico(servico.id)">Editar</button>
                            <button class="btn btn-danger" @click="excluirServico(servico)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import ServicoDataServices from '../../services/ServicoDataServices';
    export default {
        data() {
            return {
                servicos: []
            }
        },
        methods: {
            obterServicos() {
                ServicoDataServices.listar()
                                    .then(response =>
                                    {
                                        this.servicos = response.data;
                                    })
            },
            editarServico(id) {
                this.$router.push('/servico/' + id);
            },
            async excluirServico(servico) {
                if(confirm(`Tem certeza que deseja excluir o serviço ${servico.nome}?`)) {
                    await ServicoDataServices.deletar(servico.id);
                    this.obterServicos();
                }
            }
        },
        mounted() {
            this.obterServicos();
        }
    }
</script>

<style>

*{
    margin: 0;
    padding: 0;
    border: 0;
}

.container{
    border: 1px solid black;
    margin: 5px auto;
    padding: 5%;
}
</style>