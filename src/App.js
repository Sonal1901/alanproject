import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';


const alanKey = '55717fb0ffdc6a80063c70ce73cb88f12e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {
    const [newsArticles, setNewsArticles]=useState([]);
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if (command === 'newsHeadlines') {
                    setNewsArticles(articles);
                }
            }
        })
    }, [])
    return (
        <div>
            <h1>Alan AI</h1>
            <NewsCards articles={newsArticles} />
        </div>
    )
}
export default App;

  