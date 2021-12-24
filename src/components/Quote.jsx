export default ({ quote, author }) => {
  return (
    <>
      <div>
        <i className="fa-xs fas fa-quote-left quotation-mark"></i>
        {quote}
        <i className="fa-xs fas fa-quote-right quotation-mark"></i>
      </div>
      <div className="author">—{author}</div>
    </>
  );
};
