import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export default function RegisterPage() {
  const nav = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    nav('/confirmed', {
      state: { name: nameRef.current.value, email: emailRef.current.value }
    });
  }

  return (
    <div className="container">
      <h1>Register your Interest for any of our SOI diplomas</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" ref={emailRef} required />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}