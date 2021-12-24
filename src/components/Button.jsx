export default ({ newQuote }) => {
  return (
    <button onClick={() => newQuote()} className="btn btn-default btn-dark">
      New Quote
    </button>
  );
};
