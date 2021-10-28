import React, { useState } from 'react';
import { useHistory } from 'react-router';

import Card from '../card/Card'


const Form = () => {
    const [item, setItem] = useState({ name: '' })

    const [datas, setData] = useState([])

    const history = useHistory()




    const handleRecipy = (id) => {
        console.log(id)


        history.push(`/${id}`)

    }

    const handleChange = (e) => {
        setItem({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${item.name}`)
            .then(res => res.json())
            .then(data => {
                setData(data.meals)
                //console.log(data)

            })

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <input onChange={handleChange} type="text" name="name" list="name" />
                <datalist id="name">
                    <option value="chicken"></option>
                    <option value="Breakfast"></option>
                    <option value="beef"></option>
                    <option value="Dessert"></option>
                    <option value="Goat"></option>
                    <option value="Lamb"></option>
                    <option value="Miscellaneous"></option>
                    <option value="Pasta"></option>
                    <option value="Pork"></option>
                    <option value="Seafood"></option>
                    <option value="Side"></option>
                    <option value="Starter"></option>
                    <option value="Vegan"></option>
                    <option value="Vegetarian"></option>
                </datalist>

                <input type="submit" value="submit" />
            </form>
            <div className="row mt-5">
                {
                    datas.map((data) => {
                        return <Card handleRecipy={handleRecipy} key={data.idMeal} data={data} />
                    })
                }


            </div>


        </div>
    );
};

export default Form;