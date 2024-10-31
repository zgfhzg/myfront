import React from 'react';
import DynamicContent from "@/components/dynamicContent";

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    htmlContent: string;
    onSave: () => void;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose , title , htmlContent , onSave }) => {
    if (!isOpen) return null;

    return (
        <div className="dialog-backdrop" onClick={onClose}>
            <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>
                <DynamicContent htmlContent={htmlContent} />
                <button onClick={onClose}>닫기</button>
                <button onClick={onSave} className={"right"}>저장</button>
            </div>
        </div>
    );
};

export default Dialog;
