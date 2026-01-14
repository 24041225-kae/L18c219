import { useLocation } from 'react-router-dom';

export default function ConfirmPage() {
  const { state } = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>
      {state && (
        <>
          <p>{state.name}, you're now registered for SOI Open-House.</p>
          <p>Details have been sent to <strong>{state.email}</strong></p>
        </>
      )}
    </div>
  );
}