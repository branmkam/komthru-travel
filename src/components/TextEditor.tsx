import React, { useState } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const config = {
  toolbar: {
    items: [
      "bold",
      "italic",
      "|",
      "bulletedList",
      "numberedList",
      "indent",
      "outdent",
      "|",
      "heading",
      "|",
      "undo",
      "redo",
    ],
  },
};

const TextEditor = ({ onSubmit }) => {
  const [body, setBody] = useState("");
  ClassicEditor.defaultConfig = config;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ body });
  };

  return (
    <form onSubmit={handleSubmit}>
      <CKEditor
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          setBody(data);
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextEditor;
