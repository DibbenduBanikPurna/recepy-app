import React from 'react';

const Card = ({ data, handleRecipy }) => {

    //console.log(data)

    return (
        <div className="col-md-4 mt-5">
            <div className="card">
                <img src={data.strMealThumb} alt="" />
                <div className="card-body">
                    <p>{data.strMeal}</p>
                    <button onClick={() => handleRecipy(data.idMeal)} className="btn btn-info">Recipy Details</button>


                </div>
            </div>

        </div>
    );
};

export default Card;