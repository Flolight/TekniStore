import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewFixtureForm from '../NewFixtureForm';

describe('<NewFixtureForm />', () => {
    let getByTestId;

    describe('clicking the create button', () => {
        beforeEach(async () => {
            ({ getByTestId } = render(<NewFixtureForm />));

            await userEvent.type(
                getByTestId('fixtureName'),
                'New Fixture',
            );
            userEvent.click(getByTestId('createButton'));
        });
        it('clears the text fiels', () => {
            expect(getByTestId('fixtureName').value).toEqual('');
        });
    });
});