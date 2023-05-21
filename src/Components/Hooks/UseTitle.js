import { useEffect } from "react";

const UseTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - KIDITOS`;
  }, [title]);
};

export default UseTitle;
