import { outfit_class } from "@/fonts";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// const Quill = ReactQuill.Quill;
// const Font = Quill.import("formats/font");
// Font.whitelist = ["Roboto", "Raleway", "Montserrat", "Lato", "Rubik"];
// Quill.register(Font, true);

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }], //{ font: Font.whitelist }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }],
    [{ align: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"], //"image", "video"
    [{ script: "sub" }, { script: "super" }],
  ],
};

const formats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "background",
  "code",
  "script",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function RichText() {
  const [value, setValue] = useState("");

  const raw = value.replace(/<\/?[^>]+(>|$)/g, "");
  const chars = raw.length;
  const limit = 10;

  return (
    <div className={`flex flex-col gap-2 `}>
      <div className="flex flex-col md:flex-row md:text-right text-left md:justify-between">
        <span className="text-red-600">
          {chars > limit &&
            "Your text is too long! Shorten it in order to post."}
        </span>
        <span className="text-slate-600 py-1 text-sm text-right">
          {chars}/{limit} characters
        </span>
      </div>
      <ReactQuill
        theme="snow"
        className={`${chars > limit && "border-2 border-red-600"} bg-white`}
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
