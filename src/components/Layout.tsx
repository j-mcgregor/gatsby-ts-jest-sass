import React from 'react'
import Header from './Header'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/main.scss'

const Layout: React.SFC<{}> = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    )
}
export default Layout
