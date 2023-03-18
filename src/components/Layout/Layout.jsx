import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer"


const Layout = ({children}) => {
    return (
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
    );
}

export default Layout;