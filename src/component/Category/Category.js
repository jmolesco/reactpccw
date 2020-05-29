import React, { Component } from "react";
import { Form, Text, Option, Select, Checkbox, Scope, TextArea, RadioGroup, Radio, BasicText, asField, } from 'informed';
import { Container, Row, Col, Card, Button, } from 'react-bootstrap';
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ""
        };
    }
    //https://joepuzzo.github.io/informed/?path=/story/multistep-forms--basic-multistep
    onSubmit = values => {
        window.alert(`Form successfully submitted with ${JSON.stringify(values)}`)
    };
    validate = value => {
        return !value || value.length < 5 ? 'Field must be longer than five characters' : undefined;
    };
    validate1st = value => {
        return !value || value.length < 5 ? 'Field must be longer than fivesssss characters' : undefined;
    };
    validateForm = values => {
        console.log(values);
        const val = values.id === 'Joseph' ? 'Username is already taken!' : undefined;
        console.log(val);
        return val;
    };

    validateReturnSingleRecord = (value, field) => {
        const errMessage = [];
        Object.keys(value).forEach(key => {
            if (value[key])
                errMessage.push(field + " is " + value[key]);
        });
        return errMessage;
    };
    validateLength = value => {
        return !value || value.length < 5
            ? 'Invalid Length. Must be atleast 5 characters'
            : undefined;
    };
    validateRequired = value => {
        return !value ? 'Required'
            : undefined;
    }
    validateFields = values => {
        return {
            id: this.validateReturnSingleRecord([this.validateRequired(values.id), this.validateLength(values.id),], "Id"),
            name: this.validateReturnSingleRecord([this.validateRequired(values.name), this.validateLength(values.name),], "Name"),
            address: this.validateReturnSingleRecord([this.validateRequired(values.address), this.validateLength(values.address),], "Address"),
        };
    };
    render() {
        // const ErrorText = asField(({ fieldState, ...props }) => (
        //     <React.Fragment>
        //         <BasicText
        //             fieldState={fieldState}
        //             {...props}
        //             style={fieldState.error ? { border: 'solid 1px red' } : null}
        //         />
        //         {fieldState.error ? (
        //             <small style={{ color: 'red' }}>{fieldState.error}</small>
        //         ) : null}
        //     </React.Fragment>
        // ));

        return (
            <Container className="mt-2">
                <Row className="justify-content-md-center">
                    <Col md={12}>
                        <Card>
                            <Card.Header>Category</Card.Header>
                            <Card.Body>
                                <Form validateFields={this.validateFields} onSubmit={this.onSubmit} >
                                    {({ formState }) => (
                                        <div>
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Category ID:
                                                </label>
                                                <Text field="id" className="form-control" />
                                                {
                                                    formState.errors.id ? (
                                                        <small style={{ color: 'red' }}>{formState.errors.id[0]}</small>
                                                    ) : null
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Category Name:
                                                </label>
                                                <Text field="name" className="form-control" />
                                                {
                                                    formState.errors.name ? (
                                                        <small style={{ color: 'red' }}>{formState.errors.name[0]}</small>
                                                    ) : null
                                                }
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Category Address:
                                                </label>
                                                <Text field="address" className="form-control" />
                                                {
                                                    formState.errors.address ? (
                                                        <small style={{ color: 'red' }}>{formState.errors.address[0]}</small>
                                                    ) : null
                                                }
                                            </div>
                                            <div className="form-group">
                                                <Button variant="primary" type="submit">Submit Record</Button>&nbsp;
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">
                                                    Values using Informed:
                                                </label>
                                                    <pre className="bg-dark text-white">
                                                        <code>
                                                            {JSON.stringify(formState.values,null, 1)}
                                                        </code>
                                                    </pre>
                                       
                                            </div>
                                            <div className="form-group">
                                                <label className="form-label">
                                                     Error Messages using Informed:
                                                </label>
                                       
                                                    <pre className="bg-dark text-white">
                                                        <code>
                                                            {JSON.stringify(formState.errors, null, 1)}
                                                        </code>
                                                    </pre>
                                            </div>
                                            {/* <div className="form-group">
                                                <label className="form-label">
                                                    Error Messages:
                                                </label>
                                                <div className="form-control">
                                                    <pre className="bg-dark text-white">
                                                        <code>
                                                            {JSON.stringify(formState.error)}
                                                        </code>
                                                    </pre>
                                                </div>
                                            </div> */}
                                        </div>
                                    )}
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Category;