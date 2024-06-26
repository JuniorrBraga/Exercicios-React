import { Outlet, NavLink } from 'react-router-dom';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="sidebar">
        <div className="sidebar-header">Dashboard</div>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contato
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <h1>Dashboard SPA</h1>
        <Outlet />
      </div>
    </div>
  );
}

export default App;