import React from 'react';
import {Link} from 'react-router-dom';

const Post = () => {
    return(
        <div className="panel panel-success">
            <div className="panel-heading">
                <h4>Post Page</h4>
            </div>
            <div className="panel-body">
                Post is crossover between design and programming has always been of interest to me, I've been lucky enough to work alongside some talented teams on a number of high profile websites. I have a wide range of skills that include back-end development using open source technologies (NodeJs, PHP), design (working closely with designers), front-end development (AngularJs, Angular2, ReactJs, HTML5, CSS3, Javascript, Responsive, UX), Server Administrator(AWS, IBM, Azure),database(MongoDB,cassendra,Mysql), load balancing (Varnish and Memcached)

                <h3>Javascript</h3>
                <Link to="/post/JavaScript">Details</Link>
                <h3>Bootstrap</h3>
                <Link to="/post/Bootstrap">Details</Link>
                <h3>Node</h3>
                <Link to="/post/Node">Details</Link>
                <h3>React</h3>
                <Link to="/post/React">Details</Link>
            </div>
        </div>
    )
}

export default Post;