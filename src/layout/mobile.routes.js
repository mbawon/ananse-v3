import BusinessList from "../business/BusinessList"
import CustomerList from "../customer/CustomerList"
import Dashboard from "../dashboard/Dashboard"
import Profile from "../profile/Profile"

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
    },
    {
        name: "Profile",
        path: "/profile",
        element: <Profile />
    }
]

export default mobileRoutes