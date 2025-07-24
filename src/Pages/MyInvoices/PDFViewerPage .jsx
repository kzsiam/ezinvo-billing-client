import React from 'react';
import { useLoaderData } from 'react-router';
import MyDocuments from './MyDocuments';
import { PDFViewer } from '@react-pdf/renderer';


const PDFViewerPage = () => {
    const item = useLoaderData()
    console.log(item)
    return (
        <div className="h-screen mt-20">
            {
                item && <PDFViewer width="100%" height="100%">
                <MyDocuments item={item} />
            </PDFViewer>
            }
        </div>
    );
};

export default PDFViewerPage;