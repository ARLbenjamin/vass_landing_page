//Layout
import ResponsiveLayout from "../components/layout/index";

//pages
import HomepageLayout from "../components/Home/index";
import ContactPage from "../components/content/Contact/index";

//404
import Error404 from "../components/notFoundPage/index";


const routes = [
    {
        path: "/",
        layout: ResponsiveLayout,
        component: HomepageLayout,
        exact: true,
    },
    {
        path: "/contact",
        layout: ResponsiveLayout,
        component: ContactPage,
        exact: true,
    },
    {
        layout: ResponsiveLayout,
        component: Error404,
    },
];

export default routes;
