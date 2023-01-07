
import './index.css'


const Header=()=>{
    return(
        <div className="header">
            <div className="main-logo">
            <img src="https://res.cloudinary.com/dmof8q57d/image/upload/v1672480325/logo_t4lnni.jpg" alt="logo-image" className="main-logo-size"/>
            </div>
            <br/>
            <div className="logo-container">
                <div className="header-description">
                    <div className="sub-logo-background" >
                        <img src="https://res.cloudinary.com/dmof8q57d/image/upload/v1672592204/Screenshot_2023-01-01_222454_dhyxap.jpg" alt="loogo" className="logo" />
                    </div>
                <h1 className="header-heading">My Application</h1>
                </div>
                <div className="user-details">
                    <img src="https://res.cloudinary.com/dmof8q57d/image/upload/v1661179324/Avatar_lyzyss.png" className="avatar"/>
                    <h6 className="avatar-name">vidya</h6>
                </div> 
            </div>
            
        </div>
    )
}

export default Header