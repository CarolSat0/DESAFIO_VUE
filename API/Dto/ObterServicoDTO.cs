using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DESAFIO_API.Model;

namespace DESAFIO_API.Dto
{
    public class ObterServicoDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public decimal Valor { get; set; }

        public ObterServicoDTO(Servico servico)
        {
            Id = servico.Id;
            Nome = servico.Nome;
            Descricao = servico.Descricao;
            Valor = servico.Valor;
        }
    }
}