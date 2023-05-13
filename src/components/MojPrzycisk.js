import React,{useState} from "react";

function MojPrzycisk(props) {
    const [visible, setVisible] = useState(true);
    const [mojTekst, setMojTekst] = useState("Ukryj");

    const {funkcja} = props;

    const zmienTekst = () => {
        if (visible) {
            setMojTekst("Pokaż");
        } else {
            setMojTekst("Ukryj");
        }
        setVisible(!visible);
    };

    const zapiszTekst = () => {
        setMojTekst("Zapisano");
    };

    const handleClick = () => {
        if (funkcja === "zmienTekst") {
            zmienTekst();
        }
        if (funkcja === "zapiszTekst") {
            zapiszTekst();
        }
    };

  return (
    <div className="mt-4">
      <button type="button" onClick={handleClick} className={props.klasaPrzycisku} style={{width:'120px'}} >
        {props.tekstPrzycisku}
      </button>
        <h2>{visible ? "Widoczny" : "Ukryty"}</h2>
      <h2>{mojTekst}</h2>
    </div>
  );
}

export default MojPrzycisk;
