import { Link } from "react-router-dom";

const getTimestamp = (note) => {
  return new Date(note.date_modified).toLocaleDateString();
};

const trimmedContent = (note) => {
  //Slice content and add three dots in over 45 characters to show there is more
  if (note.title) return note.title;

  const content = note.content;

  if (content.length > 45) {
    return content.slice(0, 45) + "...";
  } else {
    return content;
  }
};

const ListItem = ({ note }) => {
  return (
    <Link to={`/${note.id}`}>
      <div className="notes-list-item">
        <h3>{trimmedContent(note)}</h3>
        <p>
          <span>{getTimestamp(note)}</span>
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
