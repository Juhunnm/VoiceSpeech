// // Header.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header style={styles.header}>
        <h1>web site</h1>
        <nav>
            <ul style={styles.navList}>
                
                <li style={styles.navItem}><Link to='/'>Home</Link></li>
                <li style={styles.navItem}><Link to='/voice'>Voice</Link></li>
                <li style={styles.navItem}><Link to='/test'>Test</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header

const styles={
    header : {
        display : "flex",
        justifyContent : 'space-between',
        alignItems : 'center',
        padding : '10px 20px',
        backgroundColor : '#b9b9b9',
    },
    navList : {
        listStyle : 'none',
        display : 'flex',
        gap : '15px'
    }

}