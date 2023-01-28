

export function Card(props) {
    return (
        <div className="column nature">
    <div className="content">
      <img src={ props.img } alt="Mountains" style={{width:"100%"}}/>
      <h4>{props.title}</h4>
      <p>Lorem ipsum dolor..</p>
    </div>
  </div>
    );
}