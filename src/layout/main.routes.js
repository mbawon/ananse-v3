import Dashboard from "../dashboard/Dashboard"

const mainRoutes = [
    {
        name: "Dashboard",
        path: "/",
        element: <Dashboard />
    },
    {
        name: "Teams",
        path: "/home",
        element: <Dashboard />
    },
    {
        name: "Reports",
        path: "/reports",
        element: <Dashboard />
    },
    {
        name: "Regions",
        path: "/regions",
        element: <Dashboard />
    },
    {
        name: "Zones",
        path: "/zones",
        element: <Dashboard />
    },
    {
        name: "Areas",
        path: "/areas",
        element: <Dashboard />
    },
    {
        name: "Users",
        path: "/users",
        element: <Dashboard />
    }
]

export default mainRoutes