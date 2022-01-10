import React from 'react';
import { Button } from 'react-bootstrap';

const Welcome = () => (
  <div class="container-fluid bg-light text-dark p-5">
    <div class="container bg-light p-5">
      <h1 class="display-4 fw-bold">Images Gallery</h1>
      <p>
        This is a simple application that retrieves photos using Unsplash API.
        In order to start enter a search term in the input field.
      </p>
      <p>
        <Button variant="primary" href="https://unsplash.com" target="_blank">
          {' '}
          Learn More{' '}
        </Button>
      </p>
    </div>
  </div>
);

export default Welcome;
