import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Outlet } from "react-router-dom"


// using layout as a base
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
