import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar"


 Layout = ({children}) => {
    return (
        <>
        <NavBar/>
        {children}
        <Footer/>
        </>
    );
}

export default Layout;