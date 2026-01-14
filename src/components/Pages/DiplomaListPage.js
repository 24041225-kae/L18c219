import { Outlet, NavLink } from 'react-router-dom';
import { getAllDiplomas } from '../../api';

export default function DiplomaListPage() {
  const diplomas = getAllDiplomas();

  return (
    <div className="container">
      <h1>Diplomas</h1>

      <ul className="categories">
        {diplomas.map(d => (
          <li key={d.id}>
            <NavLink
              className={({ isActive }) => (isActive ? 'category-active' : null)}
              to={d.id}
            >
              Diploma in {d.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}