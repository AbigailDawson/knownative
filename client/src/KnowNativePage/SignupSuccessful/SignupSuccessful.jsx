import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';

function SignupSuccessful() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }

    const timer = setTimeout(() => {
      navigate('/dashboard');
    }, 3000);

    return () => clearTimeout(timer);
  });

  return (
    <main>
      Signup was successful! Please wait a moment as we redirect you to the dashboard. Or click{' '}
      <Link to={'/dashboard'}>here</Link> to go there directly!
    </main>
  );
}

export default SignupSuccessful;
