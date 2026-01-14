import { useParams } from 'react-router-dom';
import { getDiplomaById } from '../../api';

export default function ModuleDetailPage() {
  const { dipId, modId } = useParams();
  const diploma = getDiplomaById(dipId);

  // fake single module detail – expand as needed
  return (
    <>
      <h3>{modId.replace(/-/g,' ')}</h3>
      <p>Detailed outline for this module will appear here.</p>
      <p>
        <strong>Part of:</strong> Diploma in {diploma.name} ({dipId})
      </p>
    </>
  );
}