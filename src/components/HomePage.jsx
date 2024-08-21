import React, { useState } from 'react'
import Sidebar from './Sidebar'

const HomePage = () => {

  const [isfeature, setIsfeature] = useState(null);

  const handleCardClick = (feature) => {
    switch (feature) {
      case 'Feature 1':
        setIsfeature('feature1');
        break;
      case 'Feature 2':
        setIsfeature('feature2');
        break;
      case 'Feature 3':
        setIsfeature('feature3');
        break;
      default: alert('unknown featre');
    }
  };

  return (
    <div>
      <div className="p-6 bg-stone-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4"> SENTIMENT ANALYSIS</h1>
        <p className="text-gray-700 mb-4">
          Importance of sentiment analysis
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            onClick={() => handleCardClick('Feature 1')}
            className="bg-sky-300 text-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-sky-400 transition duration-300"
          >
            <h2 className="text-xl font-semibold">Understanding Customer Feedback and Behavior</h2>
            {/* <p>Details about feature 1.</p> */}
          </div>
          <div
            onClick={() => handleCardClick('Feature 2')}
            className="bg-pink-300 text-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-pink-400 transition duration-300"
          >
            <h2 className="text-xl font-semibold">Market Research and Competitive Analysis</h2>
            {/* <p>Details about feature 2.</p> */}
          </div>
          <div
            onClick={() => handleCardClick('Feature 3')}
            className="bg-amber-300 text-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-amber-400 transition duration-300"
          >
            <h2 className="text-xl font-semibold">Enhanced Decision-Making and Risk Management</h2>
            {/* <p>Details about feature 3.</p> */}
          </div>
        </div>

      </div>
      <br/><br/>
      <div>
        {isfeature === 'feature1' ? <div className="p-6 bg-orange-100 rounded-md shadow-md">
          <b> <h1 className="text-3xl font-bold mb-4">Understanding Customer Feedback and Behavior:</h1></b>
          <p>
            Sentiment analysis allows businesses to gauge customer opinions and emotions regarding their products, services, or brand. By analyzing customer reviews, social media comments, and feedback, companies can gain insights into how their customers feel. This helps in improving products, tailoring marketing strategies, and enhancing customer satisfaction. </p>
        </div> : (isfeature === 'feature2' ? <div className="p-6 bg-orange-100 rounded-lg shadow-md">
          <b> <h1 className="text-3xl font-bold mb-4">Market Research and Competitive Analysis:</h1></b>
          <p>
            Sentiment analysis helps companies understand the broader market landscape by analyzing public sentiment towards competitors, industry trends, or specific events. This information is crucial for strategic planning, identifying market opportunities, and staying ahead of competitors by adapting to changing customer preferences.</p>
        </div> : isfeature === 'feature3'? <div className="p-6 bg-orange-100 rounded-lg shadow-md">
          <b> <h1 className="text-3xl font-bold mb-4">Enhanced Decision-Making and Risk Management:</h1></b>
          <p>
            Sentiment analysis provides valuable data that can influence decision-making processes. For instance, by monitoring sentiment around a company’s brand or product, decision-makers can proactively address negative sentiments before they escalate. This is particularly important in crisis management, where timely responses can mitigate potential damage to a company’s reputation.</p>
        </div>: <div></div>)}
      </div>
    </div>
  )
}
export default HomePage