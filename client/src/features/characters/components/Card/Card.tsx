import { FC } from "react";
import * as S from "./Card.styles";
import { CardProps } from "./Card.types";

/**
 * Card component to display character information.
 *
 * This component displays a character's image, name, species, and status with a flip animation effect.
 * The front of the card shows the character's name, species, and status.
 * The back of the card shows a gradient overlay with the character's name.
 *
 * @component
 * @example
 * // Example usage of Card
 * import Card from './Card';
 *
 * const character = {
 *   image: 'https://example.com/image.jpg',
 *   name: 'Rick Sanchez',
 *   species: 'Human',
 *   status: 'Alive'
 * };
 *
 * const Example = () => {
 *   return (
 *     <Card character={character} />
 *   );
 * };
 *
 * @param {CardProps} props - The properties for the component.
 * @param {Object} props.character - The character object containing its details.
 * @param {string} props.character.image - The URL of the character's image.
 * @param {string} props.character.name - The name of the character.
 * @param {string} props.character.species - The species of the character.
 * @param {string} props.character.status - The status of the character (e.g., Alive, Dead).
 *
 * @returns {JSX.Element} The rendered Card component.
 */
const Card: FC<CardProps> = ({ character }) => {
  const { image, name, species, status } = character;

  return (
    <S.CardContainer>
      <S.CardInner>
        <S.CardFront image={image}>
          <S.Species>{species}</S.Species>
          <S.Status>{status}</S.Status>
          <S.TitleFront> {name}</S.TitleFront>
        </S.CardFront>
        <S.CardBack image={image}>
          <S.Gradient></S.Gradient>
          <S.TitleBack> {name}</S.TitleBack>
        </S.CardBack>
      </S.CardInner>
    </S.CardContainer>
  );
};

export default Card;
