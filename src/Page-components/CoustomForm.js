import React, { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Field, Form as FormikForm, Formik, ErrorMessage } from "formik";
import Alert from "react-bootstrap/Alert";
import { IoMdInformationCircleOutline } from "react-icons/io";
import * as yup from "yup";

function CoustomForm() {
  const defaultValue = {
    termsAndCond: false,
    email: "",
    country: "",
    name: "",
    lname: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
    phone: "",
    selectcity: "",
    delivery: "",
    shopping: "",
    bill: "",
  };

  const validationSchema = yup.object().shape({
    termsAndCond: yup.bool().oneOf([true], "Must agree to terms and conditions"),
    email: yup.string().email("Invalid email address").required("Email is required"),
    country: yup.string().required("Please Select a Country"),
    name: yup.string().required("Please Enter First Name"),
    lname: yup.string().required("Please Enter Last Name"),
    address: yup.string().required("Please Enter Address"),
    apartment: yup.string().required("Please Enter Apartment"),
    city: yup.string().required("Please Enter City"),
    postalCode: yup.string().required("Please Enter to city Postal Code"),
    phone: yup.string().required("Please Enter Phone Number"),
    selectcity: yup.string().required("Please Select City"),
    delivery: yup.string().required("Please Select Delivery Method"),
    shopping: yup.string().required("Please Enter Shopping Method"),
    bill: yup.string().required("Required Bill"),
  });

  const handleSubmit = (values) => {
    console.log("Submitted Values:", values);
  };

  return (
    <Container fluid className="pt-15">
      <Row>
        <Col sm={1}></Col>
        <Fragment>
          <Col sm={7}>
            <Formik
              initialValues={defaultValue}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {({ handleSubmit }) => (
                <FormikForm onSubmit={handleSubmit}>
                  <h1 className="pt-5">
                    <b>Contact</b>
                  </h1>
                  <br />
                  <div>
                    <Field
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="w-80 h-10 rounded border"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="email" />
                    </p>
                    <label className="form-inline">
                      <Field type="checkbox" name="termsAndCond" />&nbsp;
                      Email with news and offers
                    </label>
                    <br />
                    <br />
                    <Alert variant="success">
                      <Alert.Heading>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <IoMdInformationCircleOutline style={{ marginRight: "8px" }} />
                          Inter National Website
                        </div>
                      </Alert.Heading>
                      <p>
                        To deliver products outside of Pakistan visit our
                        International Website: https://baroque.com.pk
                      </p>
                      <hr />
                    </Alert>
                  </div>

                  <div>
                    <h1>
                      <b>Delivery</b>
                    </h1>
                    <br />
                    <Field component="select" name="country" className="form-control">
                      <option value="">Select Country</option>
                      <option value="Pakistan"> Pakistan</option>
                      <option value="India"> India</option>
                      <option value="Dubai"> Dubai</option>
                      <option value="Canada"> Canada</option>
                    </Field>
                    <p className="text-danger">
                      <ErrorMessage name="country" />
                    </p>
                  </div>

                  {/* First and Last name side by side */}
                  <Row className="mt-2">
                    <Col sm={6}>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter Your First Name"
                        className="w-100 h-10 rounded border"
                        style={{ padding: "10px" }}
                      />
                      <p className="text-danger">
                        <ErrorMessage name="name" />
                      </p>
                    </Col>
                    <Col sm={6}>
                      <Field
                        type="text"
                        name="lname"
                        placeholder="Enter Your Last Name"
                        className="w-100 h-10 rounded border"
                        style={{ padding: "10px" }}
                      />
                      <p className="text-danger">
                        <ErrorMessage name="lname" />
                      </p>
                    </Col>
                  </Row>

                  <div className="p-2">
                    <Field
                      type="text"
                      name="address"
                      placeholder="Enter Your Address"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="address" />
                    </p>
                  </div>
                  <div className="p-2">
                    <Field
                      type="text"
                      name="apartment"
                      placeholder="Apartment,suite,etc, (optional)"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="apartment" />
                    </p>
                  </div>

                  {/* City and Postal Code */}
                  <Row className="mt-2">
                    <Col sm={6}>
                      <Field
                        type="text"
                        name="city"
                        placeholder="City Name"
                        className="w-100 h-10 rounded border"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="city" />
                      </p>
                    </Col>
                    <Col sm={6}>
                      <Field
                        type="text"
                        name="postalCode"
                        placeholder="postal code (optional)"
                        className="w-100 h-10 rounded border"
                      />
                      <p className="text-danger">
                        <ErrorMessage name="postalCode" />
                      </p>
                    </Col>
                  </Row>

                  <div className="p-2">
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Phone Number"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="phone" />
                    </p>
                    <label className="form-inline">
                      <Field type="checkbox" name="termsAndCond" /> &nbsp;
                      Save this information for next time
                    </label>
                  </div>
                  
                  {/* Select City */}
                  <h1><b>Select your City</b></h1>
                  <Field component="select" name="selectcity" className="form-control">
                    <option value="">Select City</option>
                    <option value="Lahore"> Lahore</option>
                    <option value="Karachi"> Karachi</option>
                    <option value="Okara"> Okara</option>
                    <option value="Fasialabad"> Fasialabad</option>
                  </Field>
                  <p className="text-danger">
                    <ErrorMessage name="selectcity" />
                  </p>
                  
                  {/* Shipping Method */}
                  <h1><b>Shipping method</b></h1>
                  <div className="p-2">
                    <Field
                      type="text"
                      name="delivery"
                      placeholder="Local Delivery"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="delivery" />
                    </p>
                  </div>

                  {/* Payment */}
                  <h1><b>Payment</b></h1>
                  <h5 className="text-slate-500">All transactions are secure and encrypted.</h5>
                  <div className="p-2">
                    <Field
                      type="text"
                      name="shopping"
                      placeholder="Cash on Delivery (cod)"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="shopping" />
                    </p>
                  </div>

                  {/* Billing Address */}
                  <h1><b>Billing address</b></h1>
                  <div className="p-2">
                    <Field
                      type="text"
                      name="bill"
                      placeholder="Same as shipping address"
                      className="form-control"
                    />
                    <p className="text-danger">
                      <ErrorMessage name="bill" />
                    </p>
                  </div>

                  {/* Submit Button */}
                  <div className="d-flex justify-content-center pt-4 text-lg">
                    <button className="btn btn-dark w-50" type="submit">
                      <b> Complete Order</b>
                    </button>
                  </div>

                  {/* Policies Section */}
                  <div className="pt-6 pb-6">
                    <hr />
                    <span className="underline"> Refund Policy</span>&nbsp;&nbsp;
                    <span className="underline">Privacy Policy</span>&nbsp;&nbsp;
                    <span className="underline">Terms of Service</span>
                  </div>
                </FormikForm>
              )}
            </Formik>
          </Col>
          </Fragment>
          <Col sm={4} className="sticky-top hidden md:block" style={{ height: '100vh', paddingTop: '50px', zIndex: 10 }}>
  <div style={{ backgroundColor: '#d6d6ce', height: '100%', padding: '10px', }}>
          <br/>
          <br/>
          <br/>
          <br/>
          
          
  </div>
</Col>

        
        <Col sm={1}></Col>
      </Row>
    </Container>
  );
}

export default CoustomForm;
