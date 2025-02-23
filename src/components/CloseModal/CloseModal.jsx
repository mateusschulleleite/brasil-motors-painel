import './CloseModal.scss';
import PropTypes from "prop-types";

export default function CloseModal(props) {
  return (
    <div style={{ display: props.display }} className="close__modal"></div>
  );
}

CloseModal.propTypes = {
    display: PropTypes.string.isRequired
}