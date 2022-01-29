import React from "react";
import CategoryList from "./modules/category/components/CategoryList";
import CreateCategoryContainer from "./modules/category/views/CreateCategoryContainer";
import CreateProductContainer from "./modules/product/views/CreateProductContainer";
import ProductListContainer from "./modules/product/views/ProductListContainer";
import UserListContainer from "./modules/user/views/UserListContainer";

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
  {
    path: "/product-add",
    name: "Create Product",
    component: CreateProductContainer,
  },
  {
    path: "/user",
    name: "User",
    component: UserListContainer,
  },
];

export default routes;
