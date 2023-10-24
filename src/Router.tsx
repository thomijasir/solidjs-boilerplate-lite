import { Router, Route, Routes } from "@solidjs/router";
import { Component, For, lazy } from "solid-js";
import { AppProvider } from "./stores/useAppContext";

type Routing = {
  path: string,
  component: Component,
  requiredAuth: boolean
}
type TROUTE = Record<string, Routing>

// Route Register
// https://docs.solidjs.com/guides/how-to-guides/routing-in-solid/solid-router#creating-links-to-other-routes
export const ROUTE: TROUTE = {
  home: {
    path: '/',
    component: lazy(() => import("./pages/home.page")),
    requiredAuth: false,
  },
  login: {
    path: '/login',
    component: lazy(() => import("./pages/login.page")),
    requiredAuth: false,
  },
  about: {
    path: '/about',
    component: lazy(() => import("./pages/about.page")),
    requiredAuth: false,
  }
}

const Wrapped = (props: Routing) => {
  if (props.requiredAuth) {
    // Wrap your component with auth function or method
    return <Route {...props} />
  }
  return <Route {...props} />
}


const App = () => {
  const ROUTE_MAP = Object.entries(ROUTE).map((item) => {
    const [key, value] = item;
    return {
      ...value,
      key,
      path: value.path,
      component: value.component
    }
  });

  return (
    <AppProvider>
      <Router>
        <Routes>
          <For each={ROUTE_MAP}>{(r) => Wrapped(r)}</For>
        </Routes>
      </Router>
    </AppProvider>
  )
}


export default App;
