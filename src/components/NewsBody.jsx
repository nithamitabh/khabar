import { useState, useEffect } from "react"
import { NewsItems } from "./NewsItems";
const NewsBody = ({category}) => {
    {/* fetching api */}
    const [articles,setArticles] =  useState([]);
    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=3ec8a046cab2470dbcffa75d18ca4d87`;
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data);
            setArticles(data.articles);
        }).catch((error) => {
            console.log(error);
        });
    },[category]);
    return (
        <div>
            <h2 className="text-center">ताजा <span className="badge bg-danger">खबर</span></h2>
            {articles.map((news,index) => {
                return <NewsItems key={index} title = {news.title} description = {news.description} src = {news.urlToImage} url = {news.url}/>
            })}

        </div>
    )
}

export default NewsBody