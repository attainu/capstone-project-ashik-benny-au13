import React from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
                <nav id="sidebar">
                    <ul className="list-unstyled components">
                    <li>
                        <Link to='/dashboard'> Dashboard</Link>
                    </li>
{/*             
                    <li>
                        <Link to='#' data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i
                            className="fa fa-product-hunt"></i> Products</Link>
                    </li> */}
                        {/* <ul className="collapse list-unstyled" id="productSubmenu"> */}
                            <li>
                        <Link to='/admin/products'> All Products</Link>
                            </li>
            
                            <li>
                        <Link to='/admin/product'> Create Product</Link>
                            </li>
                        {/* </ul> */}
                    {/* </li> */}

                    {/* <li>
                        <Link to='/admin/allOrders'> Orders</Link>
                    </li>

                    <li>
                        <Link to='/admin/users'>All Users</Link>
                    </li>
                    <li>
                        <Link to='/admin/reviews'>All Reviews</Link>
                    </li> */}
            
                </ul>
                </nav>
            </div>
    )
}

export default Sidebar
