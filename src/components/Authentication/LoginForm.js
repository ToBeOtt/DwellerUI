import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../config/apiConfig'; // Adjust the path as needed

function LoginForm(props) {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const response = await fetch(`${baseUrl}/auth/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
  
      if (response.ok) {
        const user = await response.json();
        const jwtToken = user.token; // Update this based on your API response structure
        
        // Store the token in localStorage
        localStorage.setItem('token', jwtToken);
        console.log(localStorage)

        navigate('/household/index');

      } else {
          navigate('/error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
    <div className="flex justify-center">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="name@mail.com" 
              value={email}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
            
          <div class="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input 
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            placeholder="******************" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <p class="text-red-500 text-xs italic">Please enter a password.</p>
          </div>
          <div class="flex items-center justify-between">
          <button
            className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignIn}
            >
          Logga in
        </button>
            <a className="inline-block align-baseline font-bold text-xs text-dweller-gray hover:text-blue-800" href="www.google.com">
              Glömt lösenord?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;