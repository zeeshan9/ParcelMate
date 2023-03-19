import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Container, InputsContainer, InputWrapper, ButtonContainer, ButtonGroup } from './update-offers.styled';
import CustomInput from '../../components/common/custom-input';
import { getLocalData, persistData } from '../../Util/utilities';
import { useNavigate, useParams } from 'react-router-dom';
import { constant } from '../../Util/constant';

const UpdateOffers = () => {
  const [offerName, setOfferName] = useState("");
  const [description, setDescription] = useState("");
  const [priceReduction, setPriceReduction] = useState(0);
  const [quantityThreshold, setQuantityThreshold] = useState(0);
  const [offerNameError, setOfferNameError] = useState(false);
  const [priceReductionError, setPriceReductionError] = useState(false);
  const [quantityThresholdError, setQuantityThresholdError] = useState(false);
  const { offerId } = useParams();
  let navigate = useNavigate();

  React.useEffect(() => {
    const item = getLocalData().offers.filter(offer => offer.id === offerId);
    if(item && item.length > 0) {
      setOfferName(item[0].name);
      setDescription(item[0].description);
      setPriceReduction(item[0].priceReduction);
      setQuantityThreshold(item[0].quantityThreshold);
    } else {
      return (
        <h6>No match for this ID</h6>
      )
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSaveClick = () => {
    let isError = false;
    // Validate inputs
    if (offerName.trim() === '') {
      setOfferNameError(true);
      isError = true;
    }
    console.log(priceReduction)
    if (priceReduction < 0) {
      setPriceReductionError(true);
      isError = true;
    }
    if (quantityThreshold < 0) {
      setQuantityThresholdError(true);
      isError = true;
    }
    if(isError) return;
    let offersData = getLocalData()?.offers?.map((offer) => {
      if(offer.id === offerId) {
        offer.name = offerName;
        offer.description = description;
        offer.priceReduction = priceReduction;
        offer.quantityThreshold = quantityThreshold;
      }
      return offer;
    });
    persistData({ ...getLocalData(), offers: offersData });
  };

  const handleCancelClick = () => {
    navigate(constant.navigate.offers);
  };

  const handleDeleteClick = () => {
    let selectedOffer = getLocalData().offers.filter(x => x.id !== offerId);
    persistData({...getLocalData(), offers: selectedOffer});

  };

  const handleOfferNameBlur = () => {
    if (offerName.trim() === '') {
      setOfferNameError(true);
    } else {
      setOfferNameError(false);
    }
  };

  const handlePriceReductionBlur = () => {
    if (priceReduction < 0) {
      setPriceReductionError(true);
    } else {
      setPriceReductionError(false);
    }
  };

  const handleQuantityThresholdBlur = () => {
    if (quantityThreshold < 0) {
      setQuantityThresholdError(true);
    } else {
      setQuantityThresholdError(false);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add Offer
      </Typography>
      <InputsContainer>
        <InputWrapper>
          <CustomInput
            label="Product Name"
            value={offerName}
            onChange={(newValue) => setOfferName(newValue)}
            onBlur={handleOfferNameBlur}
            required
            error={offerNameError}
            helperText={offerNameError ? 'Product Name cannot be empty' : ''}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomInput
            label="Description"
            value={description}
            onChange={(newValue) => setDescription(newValue)}
            multiline
            rows={4}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomInput
            label="Price Reduction"
            value={priceReduction}
            onChange={(newValue) => setPriceReduction(newValue)}
            onBlur={handlePriceReductionBlur}
            required
            type="number"
            error={priceReductionError}
            helperText={priceReductionError ? 'Price Reduction cannot be negative' : ''}
          />
        </InputWrapper>
        <InputWrapper>
          <CustomInput
            label="Quantity Threshold"
            value={quantityThreshold}
            onChange={(newValue) => setQuantityThreshold(newValue)}
            onBlur={handleQuantityThresholdBlur}
            required
            type="number"
            error={quantityThresholdError}
            helperText={quantityThresholdError ? 'Quantity Threshold cannot be negative' : ''}
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
            
export default UpdateOffers;
            
            
            
            
            
