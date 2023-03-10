import http from "../http-common";

class ItemPedidoDataServices{
    listar(){
        return http.get('/itempedido/listar');
    }
    cadastrar(itempedido){
        return http.post('/itempedido', itempedido);
    }
    atualizar(id, itempedido){
        return http.put(`/itempedido/${id}`, itempedido);
    }
    obterPorId(id){
        return http.get(`/itempedido/${id}`);
    }
    async deletar(id){
        return await http.delete(`/itempedido/${id}`);
    }
    obterPorIdPedido(id){
        return http.get(`/itempedido/ObterPorIdPedido/${id}`);
    }
    obterPorIdServico(id){
        return http.get(`/itempedido/ObterPorIdServico/${id}`);
    }
}

export default new ItemPedidoDataServices();