import { BadgeDollarSign, LayoutDashboard, Truck } from "lucide-react"



export const SideBar = () => {


    return(
        <nav className="d-flex flex-column m-5 p-3 col-8 col-xxl-4 col-md-6 col-sm-12">
            <h4 className="fw-bold p-2 mb-5 text-primary">Welcome, Driver!</h4>
            <ul className="nav flex-column">
                <li className="nav-item mb-4">
                    
                    <a className="nav-link text-dark shadow fw-semibold" href="#"><LayoutDashboard className="m-2"/>Dashboard</a>
                </li>

                <li className="nav-item mb-4">
                    <a className="nav-link text-dark shadow  fw-semibold" href="#"><Truck className="m-2"/>Trips</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-dark shadow fw-semibold" href="#"><BadgeDollarSign className="m-2"/>Earnings</a>
                </li>

            </ul>

        </nav>
    )
} 