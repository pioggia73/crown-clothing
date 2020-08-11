import React from 'react';
import { Route } from 'react-router-dom';
//import { selectCollections } from '../../redux/shop/shop.selectors';
// ***** components ***** //
import CollectionsOverview from '../../components/collections-overwiev/CollectionsOverview';
// ****** pages ****** //
import CollectionsPage from '../collectionsPage/CollectionsPage.js';

const ShopPage = ({ match }) => {
  
   return (
         <div className='shop-page'>
            <Route exact path={`${match.path}`} component = {CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionsPage} />
         </div>
)};
    
export default ShopPage;
