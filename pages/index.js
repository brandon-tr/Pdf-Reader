import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic';
import PdfViewer from "./components/pdfviewer";




export default function Home() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        document.onmouseup = () => {
            console.log(window.getSelection().toString());
            if(window.getSelection().toString() !== undefined) {
              if ('speechSynthesis' in window) {
                let msg = new SpeechSynthesisUtterance();
                msg.text = window.getSelection().toString();
                window.speechSynthesis.speak(msg);
              }else{
                alert("Sorry, your browser doesn't support text to speech!");
              }
            }
        };
    });

    return (
    <div>
      <Head>
        <title>Web version</title>
        <meta name="description" content="Web version of tts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
              <PdfViewer url="./123.pdf" pageNumber={1} />
              <p>Page {pageNumber} of {numPages}</p>
      </main>
    </div>
  )
}
