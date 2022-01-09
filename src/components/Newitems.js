import React, { Component } from 'react'

export  class Newitems extends Component {
    render() {
        let {title , description,imageUrl,newsUrl,author,date} = this.props;
        return (
            <div>
                <div  className="card">
              <img src={!imageUrl?"https://cdn.24.co.za/files/Cms/General/d/1078/4db73dba0d2d4a3784c81668741c054d.jpg":imageUrl}  className="card-img-top" alt="..."/>
                 <div  className="card-body">
                       <h5  className="card-title">{title}</h5>
                 <p  className="card-text">{description}</p>
                 <div className="card-footer text-muted"> by {!author?"unknown":author} on {new Date(date).toGMTString()} </div>
               <a href={newsUrl} target="bLank"  className="btn btn-dark">Read more...</a>
                     </div>
                    </div>
            </div>
        )
    }
}

export default Newitems
