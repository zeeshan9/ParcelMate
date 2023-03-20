import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Container, InputsContainer, InputWrapper, ButtonContainer, ButtonGroup } from './update-inventory.styled';
import CustomInput from '../../components/common/custom-input';
import { getLocalData, persistData } from '../../Util/utilities';
import { useNavigate, useParams } from 'react-router-dom';
import { constant } from '../../Util/constant';

const UpdateInventory = () => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [quantityError, setQuantityError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  let navigate = useNavigate();
  const { itemId } = useParams();

  React.useEffect(() => {
    const item = getLocalData().items.filter(item => item.id === itemId);
    if(item && item.length > 0) {
      setTitle(item[0].name);
      setQuantity(item[0].quantity);
      setPrice(item[0].price);
    }
    // no need to pass the itemId here because on refresh mount happens again
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const handleSaveClick = () => {
    let isError = false;
    // Validate inputs
    if (title.trim() === '') {
      setTitleError(true);
      isError = true;
    }
    if (quantity < 0) {
      setQuantityError(true);
      isError = true;
    }
    if (price < 0) {
      setPriceError(true);
      isError = true;
    }
    if(isError) return;

    let itemsData = getLocalData().items.map((item) => {
      if(item.id === itemId) {
        item.name = title;
        item.quantity = quantity;
        item.price = price;
      }
      return item;
    });
    persistData({ ...getLocalData(), items: itemsData });
  };

  const handleCancelClick = () => {
    navigate(constant.navigate.inventory);
  };

  const handleDeleteClick = () => {
    let itemsData = getLocalData().items.filter(x => x.id !== itemId);
    persistData({...getLocalData(), items: itemsData});
  };

  const handleTitleBlur = () => {
    if (title.trim() === '') {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
  };

  const handleQuantityBlur = () => {
    if ( quantity < 0) {
      setQuantityError(true);
    } else {
      setQuantityError(false);
    }
  };

  const handlePriceBlur = () => {
    if (price < 0) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Items
      </Typography>
      <InputsContainer>
        <InputWrapper>
          <CustomInput
            label="Title"
            value={title}
            onChange={(newValue) => setTitle(newValue)}
            onBlur={handleTitleBlur}
            required
            error={titleError}
            helperText={titleError ? 'Title cannot be empty' : ''}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomInput
            label="Quantity"
            value={quantity}
            onChange={(newValue) => setQuantity(newValue)}
            onBlur={handleQuantityBlur}
            required
            type="number"
            error={quantityError}
            helperText={quantityError ? 'Quantity cannot be negative or empty' : ''}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomInput
            label="Price"
            value={price}
            onChange={(newValue) => setPrice(newValue)}
            onBlur={handlePriceBlur}
            required
            type="number"
            error={priceError}
            helperText={priceError ? 'Price cannot be negative or empty' : ''}
          />
        </InputWrapper>
      </InputsContainer>
      <ButtonContainer>
        <ButtonGroup>
            <Button className="mr-2" variant="outlined" onClick={handleCancelClick}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSaveClick}>
            Save
            </Button>
        </ButtonGroup>
            <Button className="mr-2" variant="outlined" color="error" onClick={handleDeleteClick}>
            Delete
            </Button>
      </ButtonContainer>
    </Container>
  );
};

export default UpdateInventory;

