import React from 'react';
import { IContact } from '../models/IContact';
import './ContactCard.css'

interface IProps{
    selectedContact : IContact
}
interface IState{}

let ContactCard:React.FC<IProps> = ({selectedContact}) => {
    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(selectedContact)}</pre> */}
            <div className="card sticky-top">
                <div className="card-header bg-secondary text-center text-white p-5 h3">
                   
                </div>
                <div className="card-body bg-light text-center">
                    <img src={selectedContact.picture.large} alt="" className="rounded-circle img-thumbnail contact-img" />
                    <ul className="list-group mt-3">
                        <li className="list-group-item">
                            NAME : {selectedContact.name.first} {selectedContact.name.last}
                        </li>
                        <li className="list-group-item">
                            Email : {selectedContact.email}
                        </li>
                        <li className="list-group-item">
                             Age : {selectedContact.dob.age} yrs
                        </li>
                        <li className="list-group-item">
                            Phone : {selectedContact.phone}
                        </li>
                        <li className="list-group-item">
                            City : {selectedContact.location.city}
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
};
export default ContactCard;