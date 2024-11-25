import { useLocalStorage } from "./useLocalStorage";




export function useCard() {
  const [cardList, setCardList] = useLocalStorage<CardType[]>('Card_List', []);


  function addCard(card: CardType) {
    setCardList([...cardList, card]);
  }


  return {
    cardList,
    setCardList,
    addCard,
  }
}