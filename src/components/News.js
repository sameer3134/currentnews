
import React, {useEffect, useState} from 'react'

import Newitems from './Newitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const link = `https://newsdata.io/api/1/news?apikey=pub_3469f7386261b52062b0ee381ebd74a7ccc0&country=${props.country}&language=en&category=${props.category}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(link);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - Nationanews`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const link = `https://newsdata.io/api/1/news?apikey=pub_3469f7386261b52062b0ee381ebd74a7ccc0&country=${props.country}&language=en&category=${props.category}&page=${page+1}&`;
        setPage(page+1) 
        let data = await fetch(link);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>Nationalnews  - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.link}>
                                <Newitems title={element.title ? element.title : ""} description={element.full_description ? element.full_description : ""} imageUrl={element.urlToImage} newsUrl={element.link} author={element.creator} date={element.pubDate} source={element.source_id} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',

    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,

    category: PropTypes.string,
}

export default News

