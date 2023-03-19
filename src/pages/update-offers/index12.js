// import React, { useState } from 'react';
// import { Button, Typography } from '@mui/material';
// import { Container, InputsContainer, InputWrapper, ButtonContainer, ButtonGroup } from './update-offers.styled';
// import CustomInput from '../../components/common/custom-input';
// import { getLocalData, persistData } from '../../Util/utilities';
// import { useNavigate, useParams } from 'react-router-dom';
// import { constant } from '../../Util/constant';

// const UpdateOffers = () => {
//   const [productName, setProductName] = useState("");
//   const [description, setDescription] = useState("");
//   const [priceReduction, setPriceReduction] = useState(0);
//   const [quantityThreshold, setQuantityThreshold] = useState(0);
//   const [productNameError, setProductNameError] = useState(false);
//   const [priceReductionError, setPriceReductionError] = useState(false);
//   const [quantityThresholdError, setQuantityThresholdError] = useState(false);
//   const { offerId } = useParams();
//   let navigate = useNavigate();

//   React.useEffect(() => {
//     // const item = getLocalData().items.filter(item => item.id === offerId);
//     // if(item && item.length > 0) {
//     //   setProductName(item[0].name);
//     //   setDescription(item[0].quantity);
//     //   setPriceReduction(item[0].price);
//     //   setQuantityThreshold(item[0].price);
//     // }
//     // no need to pass the itemId here because on refresh mount happens again
//   }, [])

//   const handleSaveClick = () => {
//     let isError = false;
//     // Validate inputs
//     if (productName.trim() === '') {
//       setProductNameError(true);
//       isError = true;
//     }
//     if (priceReduction.trim('') === '' || priceReduction < 0) {
//       setPriceReductionError(true);
//       isError = true;
//     }
//     if (quantityThreshold.trim('') === '' || quantityThreshold < 0) {
//       setQuantityThresholdError(true);
//       isError = true;
//     }
//     if(isError) return;

//     // let offersData = getLocalData().offers.concat({
//     //   productName: productName,
//     //   description: description,
//     //   priceReduction: priceReduction,
//     //   quantityThreshold: quantityThreshold
//     // });

//     // persistData(null, offersData);
//   };

//   const handleCancelClick = () => {
//     navigate(constant.navigate.inventory);
//   };

//   const handleDeleteClick = () => {
//     // let itemsData = getLocalData().items.filter(x => x.id !== offerId);
//     // persistData(itemsData);
//   };

//   const handleProductNameBlur = () => {
//     if (productName.trim() === '') {
//       setProductNameError(true);
//     } else {
//       setProductNameError(false);
//     }
//   };

//   const handlePriceReductionBlur = () => {
//     if (priceReduction < 0) {
//       setPriceReductionError(true);
//     } else {
//       setPriceReductionError(false);
//     }
//   };

//   const handleQuantityThresholdBlur = () => {
//     if (quantityThreshold < 0) {
//       setQuantityThresholdError(true);
//     } else {
//       setQuantityThresholdError(false);
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Add Offer
//       </Typography>
//       <InputsContainer>
//         <InputWrapper>
//           <CustomInput
//             label="Product Name"
//             value={productName}
//             onChange={(newValue) => setProductName(newValue)}
//             onBlur={handleProductNameBlur}
//             required
//             error={productNameError}
//             helperText={productNameError ? 'Product Name cannot be empty' : ''}
//           />
//         </InputWrapper>
//         <InputWrapper>
//           <CustomInput
//             label="Description"
//             value={description}
//             onChange={(newValue) => setDescription(newValue)}
//             multiline
//             rows={4}
//           />
//         </InputWrapper>
//         <InputWrapper>
//           <CustomInput
//             label="Price Reduction"
//             value={priceReduction}
//             onChange={(newValue) => setPriceReduction(newValue)}
//             onBlur={handlePriceReductionBlur}
//             required
//             type="number"
//             error={priceReductionError}
//             helperText={priceReductionError ? 'Price Reduction cannot be negative' : ''}
//           />
//         </InputWrapper>
//         <InputWrapper>
//           <CustomInput
//             label="Quantity Threshold"
//             value={quantityThreshold}
//             onChange={(newValue) => setQuantityThreshold(newValue)}
//             onBlur={handleQuantityThresholdBlur}
//             required
//             type="number"
//             error={quantityThresholdError}
//             helperText={quantityThresholdError ? 'Quantity Threshold cannot be negative' : ''}
//             />
//             </InputWrapper>
//             </InputsContainer>
//             <ButtonContainer>
//               <ButtonGroup>
//                 <Button className="mr-2" variant="outlined" onClick={handleCancelClick}>
//                   Cancel
//                 </Button>
//                 <Button variant="contained" onClick={handleSaveClick}>
//                   Save
//                 </Button>
//               </ButtonGroup>
//             <Button className="mr-2" variant="outlined" color="error" onClick={handleDeleteClick}>
//               Delete
//             </Button>
//           </ButtonContainer>
//       </Container>
//         );
//     };
            
// export default UpdateOffers;
            
            
            
            
            
