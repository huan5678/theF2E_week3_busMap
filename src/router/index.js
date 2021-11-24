// router/index.js
import Index from "@/views/Index";
import Station from "@/views/Station";
import Transfer from "@/views/Transfer";

const routes = [
  {
    path: "/",
    component: Index,
    exact: true,
  },
  {
    path: "/station",
    component: Station,
  },
  {
    path: "/transfer",
    component: Transfer,
  },
];

export default routes;
