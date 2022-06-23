import React from 'react'
import img1 from '../../images/Nav/gauge-solid.svg'
import img2 from '../../images/Nav/magnifying-glass-chart-solid.svg'
import img3 from '../../images//users-solid.svg'
import img4 from '../../images//book-solid.svg'
import { Image } from 'react-bootstrap'

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon: <Image src={img1}/>,
        cName: 'nav-text'
    },
    {
        title:'Search',
        path:'/search',
        icon: <Image src={img2}/>,
        cName: 'nav-text'
    },
    {
        title:'Users',
        path:'/users',
        icon: <Image src={img3}/>,
        cName: 'nav-text'
    },
    
    {
        title:'Team',
        path:'/team',
        icon: <Image src={img4}/>,
        cName: 'nav-text'
    }
]
