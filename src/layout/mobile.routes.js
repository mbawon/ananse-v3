import BusinessList from "../business/BusinessList"
import CustomerList from "../customer/CustomerList"
import Dashboard from "../dashboard/Dashboard"

const mobileRoutes = [
    {
        name: "Dashboard",
        path: "/",
        element: <Dashboard />
    },
    {
        name: "Businesses",
        path: "/businesses",
        element: <BusinessList />
    },
    {
        name: "My Customers",
        path: "/my-customers",
        element: <CustomerList />
    }
]

export default mobileRoutes