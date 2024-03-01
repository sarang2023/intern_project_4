import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Layout()
{
    return(<>
    <Sidebar/>
    <section>
        <Outlet/>
    </section>
    </>)
}
export default Layout;