using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DESAFIOAPI.Migrations
{
    /// <inheritdoc />
    public partial class valorservico : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Valor",
                table: "Servicos",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Valor",
                table: "Servicos");
        }
    }
}
