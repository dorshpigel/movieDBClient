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
    setOpenModalId((prevOpenModalId: string) =>
      prevOpenModalId === newId ? `${newId} ` : newId
    );
  };

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
          maxHeight: "350 !important",
        }}
      >
        <img
          src={image}
          className="card-image"
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
