"use client"

import dynamic from 'next/dynamic';
import React from 'react';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';

const DynamicReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const RichTextEditor = ({ value, onChange,className,theme }) => {
  const toolbarOptions = [
    ['bold', 'italic', 'underline'],          
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'header': [ 2, 3, false] }],
    [{ 'align': [] }],

    ['clean']                                        
  ];
    const themeval = theme || "bubble"
  return (
    <DynamicReactQuill
       theme={themeval}
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
