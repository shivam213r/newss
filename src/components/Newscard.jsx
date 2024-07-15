import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import '../sass/newscard.scss'



export default class Newscard extends Component {
  render() {
    let{title, desc,img,url,author,date,source} = this.props
    return (
      
        <Card className='card-cont d-flex flexrow bg-dark position-relative'>
          <span class="badge badge-warning position-absolute" style={{backgroundColor:"red",font:"0.2rem",left:"0.1rem"}}>{source}</span>
        <Card.Img variant="left" className='p-1 rounded'src={!img?"http://congtygiaphat104.com/template/Default/img/no.png":img}/>
        <Card.Body className='position-relative'>
          <Card.Title className='text-light'><a href={url} target="_blank" rel="noreferrer" style={{textDecoration:"none",color:"white"}}>{title}</a></Card.Title>
          <Card.Text className='text-light'>
            {!desc?"Click to Read more":desc.slice(0,200)+"..."}
          </Card.Text>
          <footer className="blockquote-footer">
            by {!author?"unkonwn":author} at {new Date(date).toGMTString()}
          </footer>
          <Card.Link href={url} target="_blank" rel="noreferrer" className='text-white  p-2 position-absolute bottom-0 end-0'>Read More..</Card.Link>
        </Card.Body>
      </Card>
        
    )
  }
}
