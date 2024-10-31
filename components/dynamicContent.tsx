import React from 'react';

interface DynamicContentProps {
    htmlContent: string;
}

const DynamicContent: React.FC<DynamicContentProps> = ({ htmlContent }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default DynamicContent;
