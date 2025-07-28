import { Link, useNavigate } from 'react-router';
import { useAuthStore } from '../store';

const Login = () => {
  const navigate = useNavigate();
  const { user, setEmail, setPassword, login } = useAuthStore();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(user?.email || '', user?.password || '');
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleLogin}
        className='bg-white p-6 rounded shadow-md w-full max-w-sm'
      >
        <div className='text-xl font-bold text-blue-600 w-full text-center mb-4'>
          <Link to='/'>Dribbio</Link>
        </div>
        <h2 className='text-2xl font-semibold mb-4 text-center'>Login</h2>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email:</label>
          <input
            type='email'
            value={user?.email || ''}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Password:</label>
          <input
            type='password'
            value={user?.password || ''}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
        >
          Log in
        </button>
        <div className='mt-4 text-center'>
          <span className='text-gray-600 mr-2'>Don't have an account?</span>
          <Link className='w-full  py-2 rounded' to={'signup'}>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
