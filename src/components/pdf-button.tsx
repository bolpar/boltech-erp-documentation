'use client'

import { FileText } from 'lucide-react';
import { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import { MarkdownContent } from './markdown-content';

export const PDFButton = ({ pdfContent }: { pdfContent: string }) => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(true)
  const [actionText, setActionText] = useState('PDF')

  return (
    <div>
      <ReactToPrint
        content={() => componentRef.current}
        trigger={() => (
          <button
            disabled={!isEnabled}
            className="transition-alldisabled:cursor-not-allowed flex items-center justify-center gap-2 rounded-md bg-neutral-200 p-2 text-neutral-500 transition-all hover:bg-neutral-300 disabled:opacity-70"
          >
            <span>{actionText}</span>
            <FileText width={16} height={16} className="fill-white" />
          </button>
        )}
        onBeforeGetContent={() => {
          setIsEnabled(false)
          setActionText('Aguarde...')
        }}
        documentTitle="Título aqui.."
        onAfterPrint={() => {
          setIsEnabled(true)
        }}
        onPrintError={() => {
          alert('Algo deu errado. Por favor, tente novamente mais tarde.')
          setIsEnabled(true)
        }}
        onBeforePrint={() => {
          setActionText('PDF')
          setIsEnabled(true)
        }}
      />

      <div className='hidden'>
        <div ref={componentRef}>
          <MarkdownContent markdown={pdfContent} className='p-8' />
        </div>
      </div>
    </div>
  )
}