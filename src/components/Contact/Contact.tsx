import React from "react";
import './Contact.css';
import emailjs from "emailjs-com";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

import "semantic-ui-css/semantic.min.css";
//overrides html selectors . . . use !important in my css to override html selector

const Contact = () => {

    const SERVICE_ID:string = process.env.REACT_APP_EMAILJS_SERVICE_ID || ""
    const TEMPLATE_ID:string = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
    const USER_ID:string = process.env.REACT_APP_EMAILJS_USER_ID || "";

    function handleOnSubmit(e:any){
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
            icon: "success",
            title: "Message Sent Successfully"
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
            })
        });
        e.target.reset()
    }

    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <Form onSubmit={handleOnSubmit}>
                <Form.Field
                id="form-input-control-email"
                control={Input}
                label="Email"
                name="user_email"
                placeholder="Email…"
                required
                icon="mail"
                iconPosition="left"
                />
                <Form.Field
                id="form-input-control-last-name"
                control={Input}
                label="Name"
                name="user_name"
                placeholder="Name…"
                required
                icon="user circle"
                iconPosition="left"
                />
                <Form.Field
                id="form-textarea-control-opinion"
                control={TextArea}
                label="Message"
                name="user_message"
                placeholder="Message…"
                required
                />
                <Button type="submit" color="brown">Submit</Button>
            </Form>
        </div>
    )
}


export default Contact;