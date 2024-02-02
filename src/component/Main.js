import React, { useState } from 'react';
import DarkVariantExample from './DarkVarientExample';
import MainTitle from './MainTitle';
import MainProductList from './MainProductList';


const Main = () => {
  return (
    <div>
      <DarkVariantExample/>
      <MainTitle/>
      <MainProductList/>
    </div>
  );
};

export default Main;