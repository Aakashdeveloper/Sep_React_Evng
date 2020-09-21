import React from 'react';

const PostDetails = (props) => {
    console.log(props)
    console.log(props.match.params.topic)
    return(
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h4>{props.match.params.topic}</h4>
            </div>
            <div className="panel-body">
                {props.match.params.topic} Details   is crossover between design and programming has always been of interest to me, I've been lucky enough to work alongside some talented teams on a number of high profile websites. I have a wide range of skills that include back-end development using open source technologies (NodeJs, PHP), design (working closely with designers), front-end development (AngularJs, Angular2, ReactJs, HTML5, CSS3, Javascript, Responsive, UX), Server Administrator(AWS, IBM, Azure),database(MongoDB,cassendra,Mysql), load balancing (Varnish and Memcached)
            </div>
        </div>
    )
}

export default PostDetails;