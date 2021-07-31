import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IContact } from '../models/IContact';

interface IProps{
    sendContact : (contact : IContact) => void
}
interface IState{
    contacts : IContact[]
}

let ContactList:React.FC<IProps> = ({sendContact}) => {
    let [state, setState] = useState<IState>({
        contacts : [] as IContact[]
    });

    useEffect(() => {
        let dataURL : string = 'https://gist.githubusercontent.com/ReshmaLakkineni/2a271f712eaa5eed3a383dd3d5f616f0/raw/507b1c7c0379eace949a3d33a70acbb5e64d84bf/contact.16062021.json'
        axios.get(dataURL).then((response) => {
            setState({
                contacts : response.data
            })
        }).catch((error) => {
            console.error(error);
        });
    });

    let clickSelectContact = (contact : IContact) => {
        // alert(JSON.stringify(contact))
        sendContact(contact);
    };

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(state.contacts)}</pre> */}
            <table className="table table-hover table-striped text-center">
                <thead className="bg-dark text-white">
                    <tr className="bg-secondary">
                        <th>SNO</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.contacts.length > 0 && state.contacts.map(contact => {
                            return(
                                <tr key = {contact.login.uuid} onClick={clickSelectContact.bind(this, contact)}>
                                    <td>{contact.login.uuid.substr(contact.login.uuid.length - 5)}</td>
                                    <td>{contact.name.first} {contact.name.last}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.dob.age} yrs</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.location.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
};
export default ContactList;