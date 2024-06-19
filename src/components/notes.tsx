import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Notes() {
  const [noteContent, setNoteContent] = useState('');

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'link'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ],
  };

  return (
    <div className="notes">
      <ReactQuill
        theme="snow"
        value={noteContent}
        onChange={setNoteContent}
        modules={modules}
        placeholder="NOTES"
      />
    </div>
  )
}
