import styled from "styled-components";

const CardNoteWrapper = styled.div`
  background: #4d4c7d;
  color: #f5f5f5;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CardNoteBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  > h2,
  p {
    margin: 5px;
  }

  > h2 {
    font-size: 16px;
  }

  > p {
    font-size: 15px;
  }
`;

const CardNoteFooter = styled.div`
  display: flex;
  justify-content: end;
  gap: 10px;
`;

const ActionButton = styled.a<{ remove?: boolean }>`
  text-transform: uppercase;
  color: ${(props) => (props.remove ? "#F99417" : "#f5f5f5")};
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

type Props = {
  title: string;
  description: string;
  onEdit: () => void;
  onRemove: () => void;
};

const CardNote = ({ title, description, onEdit, onRemove }: Props) => {
  return (
    <CardNoteWrapper>
      <CardNoteBody>
        <h2>{title}</h2>
        <p>{description}</p>
      </CardNoteBody>
      <CardNoteFooter>
        <ActionButton
          href=""
          onClick={(e) => {
            e.preventDefault();
            onEdit();
          }}
        >
          Edit
        </ActionButton>
        <ActionButton
          href=""
          remove
          onClick={(e) => {
            e.preventDefault();
            onRemove();
          }}
        >
          Remove
        </ActionButton>
      </CardNoteFooter>
    </CardNoteWrapper>
  );
};

export default CardNote;