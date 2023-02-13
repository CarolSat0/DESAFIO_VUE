<script setup>

</script>

<!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/> -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> -->

<template>

<nav class="navbar navbar-dark bg-dark navbar-expand-lg" data-bs-theme="dark">

<div class="container-fluid dropdown">

  <buttonn class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </buttonn>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">Vendedor</a>
        <ul class="dropdown-menu">
          <router-link class="dropdown-item" to="/vendedor/cadastrar">Cadastrar</router-link>
          <router-link class="dropdown-item" to="/vendedor/listar">Listar</router-link>
        </ul>
      </li>
<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">Cliente</a>
        <ul class="dropdown-menu">
          <router-link class="dropdown-item" to="/cliente/cadastrar">Cadastrar</router-link>
          <router-link class="dropdown-item" to="/cliente/listar">Listar</router-link>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">Serviços</a> 
        <ul class="dropdown-menu">
          <router-link class="dropdown-item" to="/servico/cadastrar">Cadastrar</router-link>
          <router-link class="dropdown-item" to="/servico/listar">Listar</router-link>
        </ul>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" 
          aria-expanded="false">Pedidos</a>
        <ul class="dropdown-menu">
          <router-link class="dropdown-item" to="/pedido/cadastrar">Cadastrar</router-link>
          <router-link class="dropdown-item" to="/pedido/listar">Listar</router-link>
        </ul>
      </li>

    </ul>

  </div>

</div>

</nav>
<router-view />  
</template>

<!-- <style scoped>
</style> -->
