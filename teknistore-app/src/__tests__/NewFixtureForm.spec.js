import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewFixtureForm from '../NewFixtureForm';

afterEach(cleanup);

describe('<NewFixtureForm />', () => {
    let getByTestId;

    describe('clicking the create button', () => {
        let createHandler;

        beforeEach(async () => {
            createHandler = jest.fn().mockName('createHandler');

            ({ getByTestId } = render(<NewFixtureForm onSend={createHandler} />));

            await userEvent.type(
                getByTestId('fixtureName'),
                'New Fixture',
            );
            userEvent.click(getByTestId('createButton'));
        });
        
        it('clears the text fiels', () => {
            expect(getByTestId('fixtureName').value).toEqual('');
        });

        it('calls the creater handler', () => {
            expect(createHandler).toHaveBeenCalledWith('New Fixture');
        });
    });
});

