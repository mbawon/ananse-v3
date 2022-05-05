import Areas from "../area/Area"
import Dashboard from "../dashboard/Dashboard"
import Regions from "../region/Region"
import Reports from "../report/Report"
import Users from "../user/User"
import Zones from "../zone/Zone"

const mainRoutes = [
    {
        name: "Dashboard",
        path: "/",
        element: <Dashboard />
    },
    {
        name: "Reports",
        path: "/reports",
        element: <Reports />
    },
    {
        name: "Regions",
        path: "/regions",
        element: <Regions />
    },
    {
        name: "Zones",
        path: "/zones",
        element: <Zones />
    },
    {
        name: "Areas",
        path: "/areas",
        element: <Areas />
    },
    {
        name: "Users",
        path: "/users",
        element: <Users />
    }
]

export default mainRoutes