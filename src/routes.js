import React from "react";
import CategoryList from "./modules/category/components/CategoryList";
import CreateCategoryContainer from "./modules/category/views/CreateCategoryContainer";
import ProductListContainer from "./modules/product/views/ProductListContainer";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/category", name: "Category", component: CategoryList },
  {
    path: "/category-add",
    name: "Create Category",
    component: CreateCategoryContainer,
  },
  {
    path: "/product",
    name: "Product List",
    component: ProductListContainer,
  },
];

export default routes;
