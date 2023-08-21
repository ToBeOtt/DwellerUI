import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import baseUrl from '../../config/apiConfig'; // Adjust the path as needed

export default function RegisterUser(props) {
  const [email, setEmail] = useState('');
  const [alias, setAlias] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [householdOption, setHouseholdOption] = useState('none');
  const [registerHouseClicked, setRegisterHouseClicked] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true); 
  const navigate = useNavigate();

  const handleHouseholdOptionChange = (e) => {
    setHouseholdOption(e.target.value);
  };

  const handleSignIn = async () => {
    if (password !== repeatPassword) {
      setPasswordsMatch(false); 
      return;
    }

    if (householdOption === "none") {
      setRegisterHouseClicked(false); 
      return;
    }


    try {
      const response = await fetch(`${baseUrl}/auth/Register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          alias,
          password
        }),
      });
  
      if (response.ok) {
        const user = await response.json();
        const Email = user.email;

        if (householdOption === 'create') { 
          navigate(`/registerHousePage?Email=${Email}`);
          
        } else if (householdOption === 'join') { 
          navigate(`/registerHouseMemberPage?Email=${Email}`);
        }
        
      } else {
          navigate('/ErrorPage');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return(
    <>
{/* Email */}
      <div className="flex justify-center">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="email" 
          type="text" 
          placeholder="name@mail.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
        </div>

{/* Alias */}
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="alias">
            Alias
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          id="alias" 
          type="text" 
          placeholder="Namn som andra ser" 
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          />
        </div>

{/* Password */}
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="password" 
        type="password" 
        placeholder="******************" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <p class="text-dweller-pink text-xs italic">Please choose a password.</p>
        </div>

 {/* Repeat password*/}
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
        id="repeatPassword" 
        type="password" 
        placeholder="******************" 
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
        />

        <p className="text-dweller-pink text-xs italic">Repeat password.</p>
        </div>

        <hr classname="rounded-md"></hr>
        <fieldset className="mt-3">
        <legend>Hur vill du ansluta ditt hushåll?</legend>
        <div>
          <input
            type="radio"
            id="createHouse"
            name="householdOption"
            value="create"
            checked={householdOption === 'create'}
            onChange={handleHouseholdOptionChange}
          />
          <label className="text-gray-700 text-sm font-bold mx-2" htmlFor="createHouse">
            Skapa hushåll
          </label>
        </div>

        <div>
          <input
            type="radio"
            id="joinHousehold"
            name="householdOption"
            value="join"
            checked={householdOption === 'join'}
            onChange={handleHouseholdOptionChange}
          />
          <label className="text-gray-700 text-sm font-bold mx-2" htmlFor="joinHousehold">
            Gå med i hushåll
          </label>
        </div>
      </fieldset>
        <hr classname="rounded-md"></hr>
    
        
{/* SignIn */}
        <div className="flex items-center justify-between">
        <button className="bg-teal-900 hover:bg-teal-800 text-dweller-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        type="button"
        onClick={handleSignIn}>
            Registrera
        </button>
        </div>

{/* Display an error message if passwords don't match */}
        {!passwordsMatch && (
            <p className="text-red-500 font-bold text-xs mt-2">Angivna lösenord är inte identiska</p>
          )}

        {!registerHouseClicked && householdOption === "none" && (
            <p className="text-red-500 font-bold text-xs mt-2">Välj om du vill skapa eller ansluta till hushåll</p>
          )}


    </form>
</div>    
    </>
  )
}