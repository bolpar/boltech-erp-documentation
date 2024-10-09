import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';

export const MarkdownContent = ({ markdown }: { markdown: string }) => {
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
          <ul className="list-inside list-disc" {...props} />
        ),
        ol: ({ ...props }) => (
          <ol className="list-inside list-decimal text-neutral-600" {...props} />
        ),
        blockquote: ({ ...props }) => (
          <blockquote className="border-l-4 border-blue-500 bg-neutral-100 pl-4 text-neutral-700" {...props} />
        ),
      }}
      className="whitespace-pre-wrap"
    >
      {markdown}
    </ReactMarkdown >
  )
}