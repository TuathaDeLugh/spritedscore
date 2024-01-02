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
    [{ 'header': [ 2, 3, false] }],
    [{ 'script': 'sub' }, { 'script': 'super' }],     
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