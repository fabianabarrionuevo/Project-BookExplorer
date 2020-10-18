import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Gallery extends Component{
    render() {

        let alternate ='https://image.flaticon.com/icons/png/512/100/100935.png';
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, categories} = item.volumeInfo;
                        let {country, saleability, isEbook} = item.saleInfo;
                        return (
                        <div key={item.id} className="book">     
                        <Link to={`/BookDetail/${item.id}`}>
                            <img 
                                src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} 
                                alt="book image"
                                className="book-img"
                            />
                            
                            <div className="book-text">
                                {title}
                            </div>
                            
                        </Link>
                        <div className="sale-info">
                            Country: {country} <br/> 
                            Sale Ability: {saleability === "NOT_FOR_SALE" ? ("Not for Sale.") : ("For Sale.")} <br/>
                            {isEbook === true ? ("eBook") : ""}
                         
                        </div>
                        </div>
                        )
                    })
                }
               
            </div>
        )
    }
}


export default Gallery;