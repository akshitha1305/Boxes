const Box = (props) => {
  //  Write your code here.
  const { className, name } = props;
  return (
    <div className={`box ${className}`}>
      <p className="para">{name}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" name="Small" />
      <Box className="medium-box" name="Medium" />
      <Box className="large-box" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
