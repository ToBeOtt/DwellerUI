import { useState, useEffect} from 'react'; 

export default function Dictionary() {
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');


    useEffect(() => {
        console.log('State updated for word' + word)
    }, [word]) 

    useEffect(() => {
        console.log('State update for word2 ' + word2)
    }, [word2]) 

    // no dependency array --> update for any state change
    // empty dependency array --> only execute once
    // passing in data ---> only execute when those state variables are changed
    
    // Callback-function = function som kallas i en annan funktion. Vanlig variant är den ovan där en arrow-funktion
    // kallas i den första (useEffect). 

    return (
        <>
            <input 
                type="text" 
                onChange={(e) => {
                setWord(e.target.value)
            }}
            />
            <h2>
                Let's get the definition for {word}
            </h2>

            <input 
                type="text" 
                onChange={(e) => {
                setWord2(e.target.value)
            }}
            />
            <h2>
                Let's get the definition for {word2}
            </h2>
        </>
    );
}
