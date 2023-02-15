<template>
  <div class="container">
    <div class="center flex">
      <router-link class="btn" to="/vendedor/listar">Vendedor</router-link>
      <router-link class="btn" to="/cliente/listar">Cliente</router-link>
      <router-link class="btn" to="/servico/listar">Serviço</router-link>
      <router-link class="btn" to="/pedido/listar">Pedido</router-link>
      <router-link class="btn" to="/itempedido/listar">Item Pedido</router-link>
    </div>
  </div>
</template>

<style scoped>

  .flex{
    display: flex;
    flex-direction: column;
  }

  .btn {
  margin: 20px;
  padding: 1.2em 2.8em;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  border-color: #A6B1E1;
    color: #fff;
    box-shadow: 0 0 40px 40px #A6B1E1 inset, 0 0 0 0 #A6B1E1;
  }
  .btn:hover {
    box-shadow: 0 0 10px 0 #DCD6F7 inset, 0 0 10px 4px #DCD6F7;
    color: #000;
  }
</style>