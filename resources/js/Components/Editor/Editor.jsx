import React, { useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import katex from "katex";
import "katex/dist/katex.min.css";
import "react-quill/dist/quill.snow.css";

if (typeof window !== "undefined") {
    window.katex = katex;
}

const Editor = ({ value, onChange }) => {
    const quillRef = useRef(null);

    useEffect(() => {
        if (quillRef.current) {
            const quill = quillRef.current.getEditor(); // Get Quill editor instance
            // Enable formula module and set KaTeX
            const Module = quill.getModule("formula");
            if (Module && typeof Module.setKatex === "function") {
                Module.setKatex(window.katex);
            }
        }
    }, []);

    return (
        <ReactQuill
            ref={quillRef}
            theme="snow"
            value={value}
            onChange={onChange}
            modules={Editor.modules}
            formats={Editor.formats}
            placeholder="Write something..."
        />
    );
};

Editor.modules = {
    toolbar: [
        ["bold", "italic", "underline", "strike"], // toggled buttons
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        [{ header: [1, 2, 3, false] }],
        ["link", "image", "formula"], // Added 'formula' button here
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ align: [] }],
        ["clean"], // remove formatting button
    ],
    clipboard: {
        matchVisual: false,
    },
    formula: true, // Enable formula module
};

Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "formula",
];

export default Editor;
