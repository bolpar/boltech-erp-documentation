'use client'

import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';

export const MarkdownContent = ({ markdown }: { markdown: string }) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

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
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
      components={{
        h1: ({ ...props }) => (
          <h1 className="border-b pb-2 text-3xl font-bold text-neutral-800" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2 className="text-2xl font-semibold text-neutral-700" {...props} />
        ),
        p: ({ ...props }) => (
          <p className="text-base leading-relaxed text-neutral-600" {...props} />
        ),
        ul: ({ ...props }) => (
          <ul className="list-inside list-[square] text-neutral-600" {...props} />
        ),
        ol: ({ ...props }) => (
          <ol className="list-inside list-[square] text-neutral-600" {...props} />
        ),
        blockquote: ({ ...props }) => (
          <blockquote className="border-l-4 border-blue-500 bg-neutral-100 px-4 text-neutral-700" {...props} />
        ),
        img: ({ ...props }) => (<img className='rounded-lg border-2 border-neutral-300 p-4' {...props} />)
      }}
      className="whitespace-pre-wrap"
    >
      {markdown}
    </ReactMarkdown >
  )
}