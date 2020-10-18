import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';



const BookDetail = (props) => {

    const { id } = useParams();
    const Books = props.items;
    
    const book  = Books.filter(item => {
        if (item.id === id){
            return item;
        }
    })
    
    let alternate ='https://image.flaticon.com/icons/png/512/100/100935.png';  
    
        return ( 
            <div>

                    <Link to="/" className="button"> Back </Link>
               
                    {
                        book.map(item => {
                        let {title, imageLinks, description, authors, publisher, publishedDate, pageCount} = item.volumeInfo;
                        let {country, saleability, isEbook} = item.saleInfo;
                        
                        return ( 
                        <div key={item.id} className="book-detail">
                        <h2 className="book-title">{title}</h2>
                            <section>
                                <div>
                                    <img 
                                        src={imageLinks !== undefined ? imageLinks.thumbnail : alternate} 
                                        alt="book image"
                                        className="book-cover"
                                    />
                               
                                    <div className="book-info">
                                        <h3>{authors[0]} {authors[1]}</h3>
                                        <h4>{publisher} {publishedDate}</h4>
                                        <p className="description">{description}</p>
                                    </div>
                                </div>
                                <div className="sale-ability">
                                        <h3>sale ability</h3>
                                        <p>country: {country}</p>
                                        <p>Sale Ability: {saleability === "NOT_FOR_SALE" ? ("Not for Sale.") : ("For Sale.")}</p>
                                        <p>{isEbook}</p>
                                </div>
                            </section>  
                        </div>
                        )
                        })
                    }
                      
            

                
            </div>
                        
        
        )


    
}

export default BookDetail;