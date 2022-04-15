import React, { useEffect, useState } from "react";
import GameBoard from "./componentes/GameBoard";
import GameOver from "./componentes/GameOver";
import game from './game/game';


export default function MemoryGame() {

    const [gameOver, setGameOver] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(game.createCardsFronTechs())
    }, [])

    function restart() {
        game.clearCards()
        setCards(game.createCardsFronTechs())
        setGameOver(false)
    }

    function handleFlip(card) {
        game.flipCard(card.id, () => {
            //gameOverCallback
            setGameOver(true)
        }, () => {
            //noMatchCallback
            setCards([...game.cards])
        })
        setCards([...game.cards])
    }

    return (
        <div>
            <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
            <GameOver show={gameOver} handleRestart={restart}></GameOver>
        </div>
    )
}