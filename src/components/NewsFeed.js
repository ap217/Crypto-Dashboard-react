import { useState, useEffect } from "react";
import axios from "axios";

//https://rapidapi.com/us.soysal/api/crytocurrency-live/ used api link
const NewsFeed = () => {
    
        const [articles, setArticles] = useState(null)

        useEffect(() => {

            const options = {
            method: 'GET',
            url: 'https://crytocurrency-live.p.rapidapi.com/news/guardian',
            headers: {
                'x-rapidapi-host': 'crytocurrency-live.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
            }
            };

            axios.request(options).then((response) => {
                setArticles(response.data)
            }).catch((error) => {
                console.error(error);
            });
            }
        , [])

        const first7articles =  articles?.slice(0,7)

        return (
        <div className='news-feed'>
            <h2>News Feed</h2>
            {first7articles?.map((article, _index) => (
                <div key={_index}>
                    <a href={article.url}> <p>{article.title}</p> </a>
                </div>
                
            ))}

        </div>
    )
}

export default NewsFeed