import { Link } from "react-router-dom";
import { BiCartAlt, BiSearchAlt2 } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { sendLogoutRequest, persistUser } from '../store/user'
import { useNavigate } from "react-router";
import { useEffect } from "react";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.data);

  
  
  useEffect(() => {
    dispatch(persistUser())
    
  }, [])

  const logOut = () => {
    dispatch(sendLogoutRequest())
    alert("Deslogueo exitoso.");
    navigate('/')
  };

  return (
    <nav>
      <div className="navbarContainer">
        <div className="navbar">
          <div className="logo">
            <Link to="/" className="categorias">
              <h3>Hard-WareHouse</h3>
            </Link>
          </div>
          <div className="cartNavContainer">
            <BiSearchAlt2 className="searchIcon" />
            <form>
              <input type="text" />
            </form>
            {user.data ? (
              <button onClick={logOut} className="log_reg">
                LogOut
              </button>
            ) : (
              <Link className="log_reg" to="login">
                LogIn
              </Link>
            )}
            {user.data ? (
              <h3>{user.data.fullName}</h3>
            ) : (
              <Link className="log_reg" to="registro">
                Sign Up
              </Link>
            )}
            <Link to="/carrito">
                <BiCartAlt className="cartIcon" />
            </Link>
          
          </div>
        </div>
        <div>
          <div className="navbarCategorias">
            <Link className="categorias" to="productos">
              <h5>PRODUCTOS</h5>
            </Link>
            <Link className="categorias" to="productos/electronics">
              <h5>Componentes</h5>
            </Link>
            <Link className="categorias" to="productos/jewelery">
              <h5>Equipos armados</h5>
            </Link>
            <Link className="categorias" to="productos/men's clothing">
              <h5>Notebooks</h5>
            </Link>
            <Link className="categorias" to="productos/women's clothing">
              <h5>Monitores</h5>
            </Link>
            <Link className="categorias" to="perifericos">
              <h5>Periféricos</h5>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
