import React from 'react'

const NewsItem = (props)=> {

        let { title, description, imageUrl, newsurl, author, date, source } = props
        return (
            <div className='my-3'>
                <div className="card">
                <div className="d-flex justify-content-end position-absolute" style={{right: "0"}}>
                    <span className="badge rounded-pill bg-secondary">{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}
export default NewsItem