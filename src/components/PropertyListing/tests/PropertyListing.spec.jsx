import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { within } from '@testing-library/dom';
import PropertyListing from '../PropertyListing';
import propertyListingApi from '../../../api/propertyListing';
jest.mock('../../../api/propertyListing');

const DUMMY_PROPERTY = {
    id: 73864112,
    bedrooms: 3,
    summary: 'Property 1 Situated moments from the River Thames in Old Chelsea...',
    displayAddress: '1 CHEYNE WALK, CHELSEA, SW3',
    propertyType: 'Flat',
    price: 1950000,
    branchName: 'M2 Property, London',
    propertyUrl: '/property-for-sale/property-73864112.html',
    contactUrl: '/property-for-sale/contactBranch.html?propertyId=73864112',
    propertyTitle: '3 bedroom flat for sale',
    mainImage:
        'https://media.rightmove.co.uk/dir/crop/10:9-16:9/38k/37655/53588679/37655_CAM170036_IMG_01_0000_max_476x317.jpg',
};

describe('PropertyListing', () => {
    const mockPropertyListingApi = jest.mocked(propertyListingApi);
    beforeEach(() => {
        mockPropertyListingApi.mockReturnValue(new Array(5).fill(0).map((el, i) => ({...DUMMY_PROPERTY, id: i})));
    });
    
    it('should render five property cards', async () => {
        await act(async () => render(<PropertyListing/>));
        const propertiesList = screen.getByRole('list');
        const propertyCards = await within(propertiesList).findAllByRole('listitem');
        expect(propertyCards).toHaveLength(5);
    });
});
