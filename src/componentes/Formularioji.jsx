
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Juego from "./Juego";
import { useState } from "react";

const Formularioji = () => {

  const [deckid, setDeckId] = useState('');
  const [card, setCard] = useState([]);
  const [newcard, setNewCard] = useState([]);
  const [busqueda, setbusqueda] = useState('');

  const getnewDeck = async () => {
    console.log("inicializando")
    let url = `https://deckofcardsapi.com/api/deck/new/shuffle`;
    let resp = await fetch(url);
    const data = await resp.json();
    console.log(data)
    setDeckId(data.deck_id);
    console.log("deckid");
    console.log(data.deck_id);
    url = `https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`;
    resp = await fetch(url);
    const baseCard = await resp.json();
    
    setCard(baseCard);
  };

  const getOneCard = async () => {
    const url = `https://deckofcardsapi.com/api/deck/${deckid}/draw/?count=1`;
    const resp = await fetch(url);
    const card = await resp.json();
    setNewCard(card);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack spacing={2} direction="row">
          <TextField id="outlined-basic" label="Nombre" variant="outlined" />
          <Button variant="contained" onClick={getnewDeck}>Iniciar</Button>
        </Stack>
      </Box>
      {console.log("Carta en el return")}
      {console.log(card)}
      {card.success === true ? (<Juego card={card} newcard={newcard} getOneCard={getOneCard}/>):null}
      

      
    </>
  );
};

export default Formularioji;
