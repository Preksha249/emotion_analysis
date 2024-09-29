import React, { useState } from 'react'
import Positive from './Positive';
import Negative from './Negative';
import Neutral from './Neutral';

const Sentiment = () => {
    const [sentence, setSentence] = useState('');
    const [processedText, setProcessedText] = useState('');

    const handleSentenceInput = (text) => {
        setSentence(text);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Set the sentence as the text to be processed
        // setText(sentence);
        console.log(sentence)
        if (!sentence) {
            console.error("Text is empty or undefined");
            return;
        }

        try {
            // Call the FastAPI endpoint
            const response = await fetch('https://emotion-analysis-backend-production.up.railway.app/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: sentence }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const result = await response.json();
            // console.log("result",result)
    
            // Set the processed text to state
            setProcessedText(result.classification);
            
        } catch (error) {
            console.error("There was an error with the fetch request:", error);
        }
    };
    console.log(processedText);
    return (
        <div>
        <div className="p-20 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Sentence Storage</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    type="text"
                    placeholder="Type a sentence"
                    onChange={(e) => handleSentenceInput(e.target.value)}
                    className="p-2 border border-gray-300 rounded-md w-full mb-4"
                /><button type='submit'>Submit</button>
            </form>
        </div >
        <br/>
        <div>
            {processedText === 'Positive' ? <Positive/> : processedText === 'Negative' ? <Negative/> : processedText === 'Neutral' ? <Neutral/> : <div></div> }</div>
        </div>
    )
}

export default Sentiment
