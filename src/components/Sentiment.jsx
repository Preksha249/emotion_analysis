import React, { useState } from 'react'

const Sentiment = () => {
    const [sentence, setSentence] = useState('');
    const [text, setText] = useState('');
    const [processedText, setProcessedText] = useState('');

    const handleSentenceInput = (text) => {
        setSentence(text);
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();

        console.log(sentence)

        // const response = await fetch('http://localhost:5000/process-text', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({ text }),
        // });

        // const result = await response.json();
        // setProcessedText(result.processed_text);
    };

    return (
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
    )
}

export default Sentiment