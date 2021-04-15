import React from "react";
import Container from "@material-ui/core/Container";

import Button from "@material-ui/core/Button";

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    nickName,
    address,
    state,
    city,
    zip,
    phone,
    email,
  } = formData;
  return (
    <Container maxWidth="xs">
      <div>
        <h2>Review</h2>
        <div>
          <p>First Name : {firstName}</p>
          <p>Last Name : {lastName}</p>
          <p>Nick Name: {nickName}</p>
          <p>Address: {address}</p>
          <p>State: {state}</p>
          <p>City: {city}</p>
          <p>Zip Code: {zip}</p>
          <p>Phone : {phone}</p>
          <p>Email: {email}</p>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => navigation.previous()}
            fullWidth
          >
            Back
          </Button>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => go("submit")}
            fullWidth
          >
            Submit
          </Button>
        </div>
      </div>
    </Container>
  );
};
