import { Link } from "react-router-dom";
<assets />
function Navbar(){

    return(
        <header className="text-white  "> 
           <nav className="flex flex-col md:flex-row justify-around  ">
            
             <h1 className="text-2xl font-bold md:mb-8  hover:text-accent transition ">Vision Meteor </h1>
             <ul className=" flex  flex-col md:flex-row space-y-4 md:space-y-0 ">
                <li className="md:mx-4"><Link to="/" className="hover:text-accent transition " >Inicio</Link></li>
                <li className="md:mx-4"><Link to="/documentacion" className="hover:text-accent transition ">Documentación</Link></li>
                <li className="md:mx-4"><Link to="/about" className="hover:text-accent transition ">Información</Link></li>
                {/* <li className=" md:mx-4"><Link to="/satellites" className="hover:text-accent transition ">Satélites</Link></li> */}
             </ul>
           </nav>
        </header>
    )

}

export default Navbar