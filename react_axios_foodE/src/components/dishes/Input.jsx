
const Input = (props) => {
  return (
    <div>
      <img src="https://i.imgur.com/gwWDvmD.png" className="Like" onClick={props.addCount}/>
    </div>
  );
}

export default Input