import React from "react";
import { Form, Button, Grid, TextArea } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./contactForm.scss";

export default function ContactForm() {

    //Returns the structure for the initial values ​​of the form
    function initialValues() {
        return {
            name:"",
            company:"",
            country:"",
            phoneNumber:"",
            opinion:"",
            email: ""
        };
    }

    //Formik configuration
    const formik = useFormik({
        initialValues: initialValues(),

        validationSchema: Yup.object({
            name: Yup.string().required("El campo es obligatorio"),
            company: Yup.string().required("El campo es obligatorio"),
            phoneNumber: Yup.string().length(10, "No es un numero valido"),
            opinion: Yup.string().required("El campo es obligatorio"),
            email: Yup.string().required("el email es obligatorio"),
        }),

        onSubmit: async (formValue) => {
            console.log('Eviado!! ', formValue)
        },
    });

    return (
        <Form inverted className="contact_form" onSubmit={formik.handleSubmit}>
            <Grid >
                <Grid.Column largeScreen={5} computer={5} tablet={16}>
                    <Form.Input
                        inverted
                        className='contact_form_input_element'
                        transparent
                        type="text"
                        placeholder='Nombre y apellidos'
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.errors.name && true}
                    />
                    <span style={{marginBottom: '6rem', display:'flex', color:'red'}}>{formik.errors.name}</span>

                    <Form.Input
                        className='contact_form_input_element'
                        transparent
                        type="email"
                        placeholder='Email'
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.errors.email && true}
                    />
                     <span style={{marginBottom: '6rem', display:'flex', color:'red'}}>{formik.errors.email}</span>

                     <Form.Input
                        inverted
                        className='contact_form_input_element'
                        transparent
                        type="text"
                        placeholder='Empresa/Organismo'
                        name="company"
                        value={formik.values.company}
                        onChange={formik.handleChange}
                        error={formik.errors.company && true}
                    />
                    <span style={{marginBottom: '6rem', display:'flex', color:'red'}}>{formik.errors.company}</span>

                    <Form.Input
                        inverted
                        className='contact_form_input_element'
                        transparent
                        type="text"
                        placeholder='País'
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                    />
                    <span style={{display:'flex', color:'red'}}>{formik.handleChange}</span>
                </Grid.Column>
                <Grid.Column largeScreen={1} computer={1} tablet={16}>

                </Grid.Column>
                <Grid.Column largeScreen={5} computer={5} tablet={16}>
                    <Form.Input
                        className='contact_form_input_element'
                        transparent
                        type="number"
                        placeholder='Teléfono'
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        error={formik.errors.phoneNumber && true}
                    />
                    <span style={{marginBottom: '6rem', display:'flex', color:'red'}}>{formik.errors.phoneNumber}</span>

                    <Form.Field
                        className='contact_form_text_area_element'
                        control={TextArea}
                        label='Mensaje'
                        name='opinion'
                        value={formik.values.opinion}
                        onChange={formik.handleChange}
                        error={formik.errors.opinion && true}
                    />
                    <span style={{display:'flex', color:'red'}}>{formik.errors.opinion}</span>
                    <div className='container_btn_submit'>
                        <Button type="submit" className="btn_submit">
                            Enviar
                        </Button>
                    </div>
                </Grid.Column>
            </Grid>
        </Form>
    );  
}   
    
    
