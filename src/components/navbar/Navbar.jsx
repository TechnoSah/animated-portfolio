import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";
const Navbar = () => {
    const handleClick = (event) => {
        event.preventDefault();
        window.location.reload();
      };
    return(
        
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration:0.5}}
                whileHover={{ scale: 1.3,
                    transition: 
                    { 
                        duration: 0.5 
                    }}}
                >
                    <a href="/" onClick={handleClick}>Sahil.</a>
                </motion.span>
                <div className="social">
                    <motion.a whileHover={{ scale: 1.5,
                    transition: 
                    { 
                        duration: 0.5 
                    }}} href="#"><img src="/facebook.png" alt="" /></motion.a>
                    <motion.a whileHover={{ scale: 1.5,
                    transition: 
                    { 
                        duration: 0.5 
                    }}} href="https://www.instagram.com/sa_hilll20"><img src="/instagram.png" alt="" /></motion.a>
                    <motion.a whileHover={{ scale: 1.5,
                    transition: 
                    { 
                        duration: 0.5 
                    }}} href="https://linkedin.com/in/sahil-bhowad-1269a9265"><img src="/linkedin.png" alt="" /></motion.a>
                    <motion.a whileHover={{ scale: 1.5,
                    transition: 
                    { 
                        duration: 0.5 
                    }}} href="https://github.com/TechnoSah"><img src="/github.png" alt="" /></motion.a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;