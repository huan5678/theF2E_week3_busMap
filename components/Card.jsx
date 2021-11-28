const Card = (props) => {

  return (
    <div className={`rounded-2xl px-3 py-4 ${props.className}`}>
      {props.children}
    </div>
  )};

export default Card;
