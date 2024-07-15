import React, { Component } from 'react'
import Newscard from './Newscard'
import InfiniteScroll from "react-infinite-scroll-component";

import Loading from './Loading.jsx';

export default class Newsection extends Component {
  static defaultProps = {
    infi: true
  }
  articles = []
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      totalResults: 0,
      page: 2,
      
    }
  }
  async componentDidMount() {
    let { endpoint, setprogress, eapi } = this.props
  setprogress(10)
    this.setState({ loading: true})
    setprogress(40)
    // api={eapi?`https://newsapi.org/v2/everything?apiKey=6412d604448d4448b0616cb6f094e885&${endpoint}&from=2024-07-13`:`https://newsapi.org/v2/top-headlines?country=in&apiKey=6412d604448d4448b0616cb6f094e885${!endpoint ? "" : endpoint}&pageSize=8`}
    const api = eapi
            ? `https://newsapi.org/v2/everything?apiKey=6412d604448d4448b0616cb6f094e885&${endpoint}&from=2024-07-14&pageSize=8`
            : `https://newsapi.org/v2/top-headlines?country=in&apiKey=6412d604448d4448b0616cb6f094e885${!endpoint ? "" : endpoint}&pageSize=8`;

    
    let data = await fetch(api)
    this.props.setprogress(75)
    let parsed = await data.json()
    setprogress(90)
    console.log(parsed)
    this.setState({ articles: parsed.articles, totalResults: parsed.totalResults, loading: false})
    setprogress(100)
   
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let { endpoint,eapi } = this.props
    const api = eapi
            ? `https://newsapi.org/v2/everything?apiKey=6412d604448d4448b0616cb6f094e885&${endpoint}&from=2024-07-14&page=${this.state.page}&pageSize=8`
            : `https://newsapi.org/v2/top-headlines?country=in&apiKey=6412d604448d4448b0616cb6f094e885${!endpoint ? "" : endpoint}&page=${this.state.page}&pageSize=8`;

    let data = await fetch(api)
    let parsed = await data.json()
    this.setState({ articles: this.state.articles.concat(parsed.articles), totalResults: parsed.totalResults, loading: false })
  }
  render() {
    let { heading, date, infi } = this.props
    return (
      <div className="container mt-4">
        
        <h1 className='text-light text-center' style={{ fontWeight: "400",marginTop:"70px" }}>{heading}</h1>
        <h5 className='text-secondary text-light text-center'>{!date ? " " : date}</h5>
        {infi===true ? <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading/>}>
          <div className="d-flex mx-0 gap-3  flex-wrap my-3">
            {this.state.articles.map((elem) => {
              return elem.content !== "[Removed]" && <Newscard key={elem.url} title={elem.title} desc={elem.description} img={elem.urlToImage} url={elem.url} author={elem.author} date={elem.publishedAt} source={elem.source.name}/>
            })}
          </div></InfiniteScroll> 
          : 
          <div className="d-flex mx-0 gap-2  flex-wrap my-3">
          {this.state.articles.map((elem) => {
            return elem.content !== "[Removed]" && <Newscard key={elem.url} title={elem.title} desc={elem.description} img={elem.urlToImage} url={elem.url} author={elem.author} date={elem.publishedAt} />
          })}
          </div>
        }
      </div>
    )
  }
}