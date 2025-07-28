import { useState } from 'react';
import { Link, useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟登录逻辑
    if (email === 'test@example.com' && password === 'password') {
      alert('登录成功！');
      navigate('/home'); // 登录成功后跳转到首页
    } else {
      alert('邮箱或密码错误！');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <form
        onSubmit={handleLogin}
        className='bg-white p-6 rounded shadow-md w-full max-w-sm'
      >
        <h2 className='text-2xl font-semibold mb-4 text-center'>Login</h2>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email:</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Password:</label>
          <input
            type='password'
            value={password}
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
