import { useState } from 'react'
import '../layout.css'
import { Link, useLocation } from 'react-router-dom';

function Layout({children}) {
        const location = useLocation();
         const [collapsed, setCollapsed] = useState(false);
        const userMenu =[
            {
                name:"Dashboard",
                path:"/",
                icon:"ri-dashboard-fill"
            },
            {
                name:"Deposit",
                path:"/deposit",
                icon:"ri-currency-fill"
            },
            {
                name:"Withdraw",
                path:"/withdraw",
                icon:"ri-bank-fill"
            },
            {
                name:"Logout",
                path:"/logout",
                icon:"ri-logout-box-fill"
            }
            
        ]

    const renderMenu = userMenu;

  return (
    <div className='main'>
    
    <div className='sidebar'>
            <div className='sidebar-header'>
                <h1>De<span className='black'>FI</span></h1>
            </div>
            <div className='menu'>
                {renderMenu.map(menu =>{
                    const isActive = location.pathname === menu.path
                    return <div className={`menu-item ${isActive &&'active-menu-item'}`}>
                        <i className={menu.icon}></i>
                        {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                    </div>

                })}
            </div>
    </div>

        <div className='content'>

            <div className='header'>
                 {collapsed ? (
              <i
                className="ri-menu-2-fill header-action-icon"
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className="ri-close-fill header-action-icon"
                onClick={() => setCollapsed(true)}
              ></i>
            )}
            </div>

        <div className='body'>
            {children}
        </div>

        </div>


    </div>
    
  )
}

export default Layout