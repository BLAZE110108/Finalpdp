import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardActionArea, CardActions } from "@mui/material";

const Juego = ({ card, newcard, getOneCard }) => {

    const [encontrar, setEncontrat] = useState('');
    const [Winner, setWinner] = useState('');

    const eventoClick = () =>{
        getOneCard
        analisis();
        
    }

    const analisis = () =>{
        if(card.cards[0].suit === 'CLUBS'){
            setEncontrat('DIAMONS');
        }else if(card.cards[0].suit === 'DIAMONS'){
            setEncontrat('CLUBS');
        }else if(card.cards[0].suit === 'HEARTS'){
            setEncontrat('SPADES');
        }else if(card.cards[0].suit === 'SPADES'){
            setEncontrat('HEARTS');
        }
        console.log(encontrar);
        if(card.cards[0].value === newcard.cards[0].value){
            if(newcard.cards[0].suit === encontrar){
                setWinner("WINNER");
            }
        }
    }

  return (
    <>
      {console.log(card)}
      {console.log(newcard)}
      
      <Button variant="contained" onClick={getOneCard}>
        {" "}
        carta.
      </Button>
      <br />
      <br />
      <br />
      <div>
        <h1> </h1>
      </div>

      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 2, md: 8 }}
      >
        <Grid>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={card.cards[0].image}
                alt={card.cards[0].code}
              />
            </CardActionArea>
            <CardActions>
            {`${card.cards[0].value} ${card.cards[0].suit}`}
            </CardActions>
          </Card>
        </Grid>
        {newcard.length !== 0 ? (
          <Grid>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={newcard.cards[0].image}
                  alt={newcard.cards[0].code}
                />
              </CardActionArea>
              <CardActions>
                {`${newcard.cards[0].value} ${newcard.cards[0].suit}`}
              </CardActions>
            </Card>
          </Grid>
        ) : null}
      </Grid>
      <div><h1>{Winner}</h1></div>
    </>
  );
};

export default Juego;
