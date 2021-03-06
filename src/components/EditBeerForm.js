import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditBeerForm(props) {
  const { beer } = props;

  function handleEditBeerFormSubmission(event) {
    event.preventDefault();
    props.onEditBeer({ name: event.target.name.value, brand: event.target.brand.value, alcoholContent: parseInt(event.target.alcoholContent.value), price: parseInt(event.target.price.value), quantity: parseInt(event.target.quantity.value), id: beer.id });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditBeerFormSubmission}
        buttonText="Update Beer" />
    </React.Fragment>
  );
}

EditBeerForm.propTypes = {
  beer: PropTypes.object,
  onEditBeer: PropTypes.func
};

export default EditBeerForm;