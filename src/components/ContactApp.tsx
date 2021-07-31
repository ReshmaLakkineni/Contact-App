import React, { useState } from 'react';
import ContactList from './ContactList';
import ContactCard from './ContactCard';
import { IContact } from '../models/IContact';

interface IProps{}
interface IState{
    selectedContact : IContact
}

let ContactApp:React.FC<IProps> = ({}) => {
    let [state, setState] = useState<IState>({
        selectedContact : {} as IContact
    });

    let receiveContact = (contact : IContact):void => {
        setState({
            selectedContact : contact
        });
    };

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(state.selectedContact)}</pre> */}
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3">Contact App</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a impedit rerum atque, sapiente, ea consequatur voluptatem cupiditate assumenda dolor nesciunt velit corrupti, natus asperiores quasi exercitationem minima corporis aliquam?</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9">
                            <ContactList sendContact={receiveContact}/>
                        </div>
                        <div className="col-md-3">
                            {
                                Object.keys(state.selectedContact).length > 0 &&
                                <ContactCard selectedContact = {state.selectedContact} />
                            }
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};
export default ContactApp;