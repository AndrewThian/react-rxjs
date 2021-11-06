import { Route, Link } from "react-router-dom";

const routes = [];

export function registerRoute(route, Component) {
  routes.push([route, Component]);
}

export function getNavigation() {
  return routes.map(([route]) => {
    return (
      <li>
        <Link to={route}>{route.split("-").join(" ")}</Link>
      </li>
    );
  });
}

export function getRoute() {
  return routes.map(([route, Component]) => {
    return (
      <Route path={route}>
        <Component />
      </Route>
    );
  });
}
