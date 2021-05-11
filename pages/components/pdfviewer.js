import React from 'react';

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function removeTextLayerOffset() {
    const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
    textLayers.forEach(layer => {
        const { style } = layer;
        style.top = "0";
        style.left = "0";
        style.transform = "";
    });
}

const PdfViewer = ({
                       url, pageNumber
                   }) => (
    <Document
        file={url}
        onLoadSuccess={removeTextLayerOffset}
    >
        <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset}/>
    </Document>
);

export default PdfViewer;
