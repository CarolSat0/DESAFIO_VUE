import http from "../http-common";

class ClienteDataServices{
    listar(){
        return http.get('/cliente/listar');
    }
    cadastrar(cliente){
        return http.post('/cliente', cliente);
    }
    atualizar(id, cliente){
        return http.put(`/cliente/${id}`, cliente);
    }
    obterPorId(id){
        return http.get(`/cliente/${id}`);
    }
    async deletar(id){
        return await http.delete(`/cliente/${id}`);
    }
}

export default new ClienteDataServices();