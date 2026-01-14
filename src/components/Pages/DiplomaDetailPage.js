import { useParams, Outlet, Link } from 'react-router-dom';
import { getDiplomaById, getDiplomaTitle } from '../../api';

export default function DiplomaDetailPage() {
  const { dipId } = useParams();
  const diploma = getDiplomaById(dipId);
  if (!diploma) return <p className="not-found">Diploma not found</p>;

  const title = getDiplomaTitle(dipId);

  return (
    <>
      <h2>{title}</h2>

      {/* orange badge */}
      <div style={{
        display:'inline-block',
        background:'#FF6A00',
        color:'#fff',
        padding:'4px 10px',
        borderRadius:4,
        fontWeight:600,
        marginBottom:12
      }}>
        {diploma.id}
      </div>

      <p style={{ marginBottom: '1.5em' }}>{diploma.desc}</p>

      <h4>Modules you will study</h4>
      <ul className="module-cards">
        {diploma.modules.map(m => (
          <li key={m}>
            <Link to={`/diplomas/${dipId}/${m.replace(/\s+/g, '-')}`}>
              {m}
            </Link>
          </li>
        ))}
      </ul>

      {/* career list (keep simple) */}
      <h4>Career roles you can take on</h4>
      <ul style={{ listStyle: 'disc', paddingLeft: '1.25em' }}>
        {diploma.roles.map(r => <li key={r}>{r}</li>)}
      </ul>

      {/* nested outlet for /diplomas/:dipId/:modId */}
      <Outlet />
    </>
  );
}