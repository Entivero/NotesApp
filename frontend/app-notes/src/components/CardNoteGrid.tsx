import styled from "styled-components";

const CardNoteGridWrapper = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

type Props = {
  children: React.ReactNode;
};

const CardNoteGrid = ({ children }: Props) => {
  return <CardNoteGridWrapper className="grid">{children}</CardNoteGridWrapper>;
};

export default CardNoteGrid;