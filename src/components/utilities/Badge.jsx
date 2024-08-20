import PropTypes from "prop-types";

const Badge = ({ status }) => {
  return (
    <div className="badge badge-error gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      {<h1 className="text-white">{status}</h1>}
    </div>
  );
};

Badge.propTypes = {
  status: PropTypes.string.isRequired, // This validates the 'status' prop
};

export default Badge;
