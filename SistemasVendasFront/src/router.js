import { createWebHistory, createRouter } from "vue-router";
const routes = [

    {
        path: "/",
        component: () => import("./components/TheWelcome.vue")
    },

    {
        path: "/vendedor/listar",
        component: () => import("./components/Vendedor/Listar.vue")
    },
    {
        path: "/vendedor/cadastrar",
        component: () => import("./components/Vendedor/Cadastrar.vue")
    },
    {
        path: "/vendedor/:id",
        component: () => import("./components/Vendedor/Atualizar.vue")
    },
    {
        path: "/vendedor/ListarPedido/:id",
        component: () => import("./components/vendedor/ListarPedido.vue")
    },
    {
        path: "/cliente/listar",
        component: () => import("./components/Cliente/Listar.vue")
    },
    {
        path: "/cliente/cadastrar",
        component: () => import("./components/Cliente/CadastrarCliente.vue")
    },
    {
        path: "/cliente/:id",
        component: () => import("./components/Cliente/AtualizarCliente.vue")
    },
    {
        path: "/cliente/ListarPedido/:id",
        component: () => import("./components/cliente/ListarPedido.vue")
    },
    {
        path: "/pedido/listar",
        component: () => import("./components/Pedido/Listar.vue")
    },
    {
        path: "/pedido/cadastrar",
        component: () => import("./components/Pedido/CadastrarPedido.vue")
    },
    {
        path: "/pedido/:id",
        component: () => import("./components/Pedido/AtualizarPedido.vue")
    },
    {
        path: "/pedido/ListarItemPedido/:id",
        component: () => import("./components/pedido/ListarItemPedido.vue")
    },
    {
        path: "/servico/listar",
        component: () => import("./components/Servico/Listar.vue")
    },
    {
        path: "/servico/cadastrar",
        component: () => import("./components/Servico/CadastrarServico.vue")
    },
    {
        path: "/servico/:id",
        component: () => import("./components/Servico/AtualizarServico.vue")
    },
    {
        path: "/itempedido/cadastrar",
        component: () => import("./components/ItemPedido/CadastrarItemPedido.vue")
    },
    {
        path: "/itempedido/:id",
        component: () => import("./components/ItemPedido/AtualizarItemPedido.vue")
    },
    {
        path: "/itempedido/listar",
        component: () => import("./components/ItemPedido/Listar.vue")
    },
    {
        path: "/itempedido/Listarservico/:id",
        component: () => import("./components/ItemPedido/ListarServico.vue")
    }

];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;