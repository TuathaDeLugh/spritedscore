"use client"

import React from 'react';
import 'react-quill/dist/quill.snow.css';

const DynamicReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = ({ value, onChange,className }) => {
  const toolbarOptions = [
    ['bold', 'italic', 'underline'],          
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'header': [ 2, 3, false] }],
    [{ 'script': 'sub' }, { 'script': 'super' }],     
    [{ 'align': [] }],

    ['clean']                                        
  ];

  return (
    <DynamicReactQuill
       theme="snow"
      value={value}
      onChange={onChange}
      modules={{
        toolbar: toolbarOptions
      }}
      className={className}
    />
  );
};

export default RichTextEditor;