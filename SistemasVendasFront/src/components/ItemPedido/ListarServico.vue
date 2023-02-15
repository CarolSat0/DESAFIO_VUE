<template>
    <div class="container">
        <h3>Listagem de Serviços - Item pedido: {{ this.$route.params.id }}</h3>
        <div class="col-10 box">
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Descricao</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Ações</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ servico.id }}</td>
                        <td>{{ servico.nome }}</td>
                        <td>{{ servico.descricao }}</td>
                        <td>R${{ servico.valor }}</td>
                        <td>
                            <button class="btn btn-editar btn-outline-success" @click="editarServico(servico.id)">Editar</button>
                            <button class="btn btn-excluir btn-outline-danger" @click="excluirServico(servico)">Excluir</button>
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
                servico: {}
            }
        },
        methods: {
            obterServicos(id) {
                ServicoDataServices.obterPorId(id)
                                    .then(response =>
                                    {
                                        this.servico = response.data;
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
            this.obterServicos(this.$route.params.id);
        }
    }
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    border: 0;
}

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

.btn{
    margin-top: 5px;
}

.btn-editar{
    border: 1px solid #28a745;
    padding: 2%;
}

.btn-excluir{
    border: 1px solid #dc3545;
    padding: 2%;
    margin-left: 5px;
}
</style>