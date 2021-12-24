export default Button = ({ newQuote }) => {
  return (
    <button onClick={() => newQuote()}>
      New Quote
    </button>
  );
};
