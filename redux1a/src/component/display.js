import React from 'react';

const ListView = (props) => {

    const renderMovies = ({moviesdata}) => {
        if(moviesdata){
            return moviesdata.map((data) => {
                return(
                    <div key={data.id}>
                        {data.name}
                    </div>
                )
            })
        }
    }

    return(
        <div>
        {renderMovies(props)}
        </div>
    )
}

export default ListView;