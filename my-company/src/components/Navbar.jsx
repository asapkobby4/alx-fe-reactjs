import {Link} from 'react-router-dom'

function Navbar (){
    return(
        <nav style={{display:'flex'}}>
            <Link style={{color:'blue'}} to='/'>Home</Link>
            <Link style={{color:'blue'}} to='/about'>About</Link>
            <Link style={{color:'blue'}} to='/contact'>Comtact</Link>
            <Link style={{color:'blue'}} to='/services'>Services</Link>
        </nav>
    )
}
export default Navbar

