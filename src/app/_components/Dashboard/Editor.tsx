"use client"
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; 

const EditorChallenge = (
    { value, handleChange, maxLength, className }: 
    { value: string, handleChange: any, maxLength: number, className?: string }) => {
    const modules = {
        toolbar: [
            ["bold", "italic"],
            { list: "ordered" },
            { list: "bullet" },
        ],
    };


    const formats = ["bold", "italic", "list", "bullet"];

    const handleContentChange = (content: string) => {
        if (content.length <= maxLength) {
            handleChange(content);
        }
    };

    return (
        <div className={className}>
            <ReactQuill
                value={value}
                onChange={handleContentChange}
                modules={modules}
                formats={formats}
                placeholder="Enter your project description here..."
            />
            <div className="text-sm text-gray-500 mt-2">
                {value.length}/{maxLength} characters
            </div>
        </div>
    );
};

export default EditorChallenge;