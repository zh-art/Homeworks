import PropTypes from 'prop-types';

export const GiftItem = ({ title, url }) => {
    return (
        <div className="card">
            <img src={url} alt={title}></img>
        </div>
    );
};

GiftItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
