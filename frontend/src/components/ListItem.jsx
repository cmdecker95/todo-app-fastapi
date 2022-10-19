import { Link } from "react-router-dom";

const ListItem = ({ note }) => {
  return <Link to={`/${note.id}`}>{note.content}</Link>;
};

export default ListItem;
