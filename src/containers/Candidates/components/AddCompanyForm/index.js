import React from 'react'

import './style.css'

export default () => {

    return (
        <form action="#" method="POST">
            <input type="text" placeholder="Input company name"></input>
            or
            <select>
                <option>Choose a company</option>
                <option></option>
                <option></option>
            </select> <br/>
            <textarea placeholder="Input a description about company"></textarea>
            <button>Add division</button>
            <ul>
                <button>Cancel</button>
                <button type="submit">Delete</button>
                <button type="submit">Save</button>
            </ul>
        </form>
    );
};