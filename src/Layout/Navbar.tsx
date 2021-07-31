import React from 'react';

interface IProps{}
interface IState{}

let Navbar:React.FC = ({}) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">React with Contact App</a>    
                </div>
            </nav>
        </React.Fragment>
    )
};

export default Navbar;