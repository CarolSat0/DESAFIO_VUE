import http from "../http-common";

class PedidoDataServices{
    listar(){
        return http.get('/pedido/listar');
    }
    cadastrar(pedido){
        return http.post('/pedido', pedido);
    }
    atualizar(id, pedido){
        return http.put(`/pedido/${id}`, pedido);
    }
    obterPorId(id){
        return http.get(`/pedido/${id}`);
    }
    async deletar(id){
        return await http.delete(`/pedido/${id}`);
    }
    obterPorIdVendedor(id){
        return http.get(`/pedido/ObterPorIdVendedor/${id}`);
    }
    obterPorIdCliente(id){
        return http.get(`/pedido/ObterPorIdCliente/${id}`);
    }
}

export default new PedidoDataServices();