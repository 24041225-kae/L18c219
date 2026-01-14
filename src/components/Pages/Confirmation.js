import { useLocation } from 'react-router-dom';

export default function ConfirmPage() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>
      {state && (
        <>
          <p>{state.name}, we have received your registration of interest.</p>
          <p>Details have been sent to <strong>{state.email}</strong></p>
        </>
      )}
    </div>
  );
}