import { useState } from 'react';
import API_BASE_URL from '../../config/apiConfig'; // Adjust the path as needed

function LoginForm(props) {
  const [show, setShow] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSignIn = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const jwtToken = data.token; // Update this based on your API response structure
        setToken(jwtToken);
        // You can also perform any additional actions based on the response
      } else {
        // Handle error response
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <>
    <div className="flex justify-center">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="name@mail.com" 
              value={username}
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
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
