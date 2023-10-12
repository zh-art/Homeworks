import { memo } from 'react';
import PropTypes from 'prop-types';

const SonComponent = ({ numero, increment }) => {
    console.log("again reloaded...");
    return (
        <>
            <button
                className="btn btn-primary mr-3"
                onClick={() => increment(numero)}
            >
                {numero}
            </button>
        </>
    );
}

SonComponent.propTypes = {
    numero: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
};

export const Son = memo(SonComponent);
Son.displayName = 'Son';
