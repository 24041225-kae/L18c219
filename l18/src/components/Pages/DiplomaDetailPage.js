import { useParams, Outlet } from 'react-router-dom';
import { getDiplomaById, getDiplomaTitle } from '../../api';

export default function DiplomaDetailPage() {
  const { dipId } = useParams();
  const diploma = getDiplomaById(dipId);

  if (!diploma) return <p className="not-found">Diploma not found</p>;

  const title = getDiplomaTitle(dipId);

  return (
    <>
      <h2>{title}</h2>

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


      <h4><strong><u>Modules you will study</u></strong></h4>
      <ul style={{ listStyle: 'disc', paddingLeft: '1.25em' }}>
        {diploma.modules.map(m => <li key={m}>{m}</li>)}
      </ul>

      <h4><strong><u>Career roles you can take on</u></strong></h4>
      <ul style={{ listStyle: 'disc', paddingLeft: '1.25em' }}>
        {diploma.roles.map(r => <li key={r}>{r}</li>)}
      </ul>

      <Outlet />
    </>
  );
}