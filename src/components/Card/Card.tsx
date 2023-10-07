import { Panel } from "rsuite";
import "../Card/Card.css";

interface CardParams {
  header: string;
  image: string;
  content: any;
  id: string;
  setOpenModalId: any;
}

const Card = ({ header, image, content, id, setOpenModalId }: CardParams) => {
  
  const handleUpdate = (id: string) => {
   const newId = id;
   setOpenModalId((prevOpenModalId: string) => (prevOpenModalId === newId ? `${newId} ` : newId));
  }

  return (
    <>
      <Panel
        id={id}
        shaded
        bordered
        bodyFill
        className="custom-card"
        style={{
          display: "inline-block",
          width: 240,
          maxWidth: 240,
          maxHeight: "350 !important",
        }}
      >
        <img
          src={image}
          style={{ cursor: "pointer" }}
          height="300 !important"
          width="240 !important"
          onClick={() => {
            handleUpdate(id);
          }}
        />
        <Panel header={header}>
          <p className="text">
            <small>{`Score: ${content}`}</small>
          </p>
        </Panel>
      </Panel>
    </>
  );
};

export default Card;
