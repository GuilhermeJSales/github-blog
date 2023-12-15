import { useRef } from 'react'
import { PostContentContainer } from './styles'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  const syntaxHighlighterRef = useRef(null)

  return (
    <PostContentContainer>
      <ReactMarkdown
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                {...props}
                style={okaidia}
                language={match[1]}
                PreTag="div"
                ref={syntaxHighlighterRef}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={className}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </PostContentContainer>
  )
}
