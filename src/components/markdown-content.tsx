'use client'

import { ComponentProps, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import { twMerge } from 'tailwind-merge';

interface MarkdownContentProps extends ComponentProps<"div"> {
  markdown: string
}

export const MarkdownContent = ({ markdown, className }: MarkdownContentProps) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageSrc, setModalImageSrc] = useState("")

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false)
    setModalImageSrc("")
  }

  useEffect(() => {
    // Função callback que será chamada quando uma seção entrar ou sair da viewport
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(`Seção visível: ${entry.target.id}`);
          // Faça aqui a ação necessária quando a seção estiver visível
        }
      });
    };

    // Criar o IntersectionObserver
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null, // Use o viewport como referência
      rootMargin: '-30% 0px -30% 0px', // Ajusta a área para disparar quando o elemento estiver no meio da página
      threshold: 0, // Quando qualquer parte do elemento entrar na área ajustada
    });

    // Seleciona todas as seções do Markdown que têm um ID
    const sections = document.querySelectorAll('[id]');
    sections.forEach(section => {
      observerRef.current?.observe(section);
    });

    // Limpar observadores quando o componente for desmontado ou quando o markdown mudar
    return () => {
      observerRef.current?.disconnect();
    };
  }, [markdown]); // Atualiza sempre que o markdown mudar

  return (
    <>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
        components={{
          h1: ({ ...props }) => (
            <h1 className="border-b pb-2 text-3xl font-bold text-neutral-800" {...props} />
          ),
          h2: ({ ...props }) => (
            <h2 className="text-2xl font-semibold text-neutral-700" {...props} />
          ),
          h3: ({ ...props }) => (
            <h3 className="text-lg font-semibold text-neutral-700" {...props} />
          ),
          p: ({ ...props }) => (
            <p className="text-base leading-relaxed text-neutral-600" {...props} />
          ),
          a: ({ ...props }) => (
            <a className="text-base leading-relaxed text-green-600 underline" {...props} />
          ),
          ul: ({ ...props }) => (
            <ul className="mb-0 mt-0 list-inside list-[square] text-neutral-600" {...props} />
          ),
          ol: ({ ...props }) => (
            <ol className="mb-0 mt-0 list-inside list-decimal text-neutral-600" {...props} />
          ),
          blockquote: ({ ...props }) => (
            <blockquote className="border-l-4 border-blue-500 bg-neutral-100 px-4 text-neutral-700" {...props} />
          ),
          img: ({ ...props }) => (<img onClick={() => {
            setIsModalOpen(true)
            setModalImageSrc(String(props.src))
          }} className='cursor-pointer rounded-lg border-2 border-neutral-300 p-1' {...props} />)
        }}
        className={twMerge("whitespace-pre-wrap", className)}
      >
        {markdown}
      </ReactMarkdown >

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal} // Fecha o modal ao clicar fora da imagem
        >
          <img
            src={modalImageSrc}
            alt="Imagem ampliada"
            className="max-h-full max-w-full rounded-lg border-2 border-neutral-900 shadow-lg"
          />
        </div>
      )}
    </>
  )
}