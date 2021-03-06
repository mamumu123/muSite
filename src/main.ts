import Vue from "vue";
import Component from "vue-class-component";
import App from "./App.vue";
import { router } from "./router";
import store from "./store/index";
import service from "./utils/https";
import urls from "./utils/urls";
import {
    Dialog,
    Form,
    FormItem,
    Input,
    Button,
    Message,
    Menu,
    MenuItem,
    Row,
    Col,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Loading,
    Timeline,
    TimelineItem,
    Card,
    Tag,
    Header,
    Main,
    Footer,
    Container,
    Aside
} from "element-ui";
import CollapseTransition from "element-ui/lib/transitions/collapse-transition";
import mixin from "./mixins";
import 'normalize.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// use markdown
Vue.use(mavonEditor)
Vue.mixin(mixin);

// 按需引用 element 组件
Vue.component(Dialog.name, Dialog);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Message.name, Message);
Vue.component(Menu.name, Menu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(CollapseTransition.name, CollapseTransition);
Vue.component(Timeline.name, Timeline);
Vue.component(TimelineItem.name, TimelineItem);
Vue.component(Card.name, Card);
Vue.component(Tag.name, Tag);
Vue.component(Footer.name, Footer);
Vue.component(Main.name, Main);
Vue.component(Header.name, Header);
Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);

Vue.use(Loading.directive);
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading.service;

Vue.config.productionTip = false;
// FIXME: 其实不用声明这一点，有利有弊吧，就像一个全局变量一样
Vue.prototype.$https = service; // 其他页面在使用 axios 的时候直接  this.$http 就可以了
Vue.prototype.$urls = urls; // 其他页面在使用 URLS 的时候直接  this.$urls 就可以了

// https://www.npmjs.com/package/vue-class-component#adding-custom-hooks
Component.registerHooks([
    "beforeRouteEnter",
    "beforeRouteLeave",
    "beforeRouteUpdate"
]);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
