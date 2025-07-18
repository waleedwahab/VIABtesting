"use client";

import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import Image from "next/image"; // ✅ import Image from next/image

type CustomMarkdownProps = {
  content?: string;
};

const CustomMarkdown = ({ content }: CustomMarkdownProps) => {
  return (
    <div className="max-w-full overflow-hidden">
      <div className="overflow-hidden">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
          components={{
            strong: ({ children }) => (
              <strong className="font-semibold text-lg sm:text-xl">
                {children}
              </strong>
            ),
            h1: ({ children }) => (
              <h1 className="text-2xl sm:text-3xl font-bold my-3 sm:my-5">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl sm:text-2xl font-bold my-3 sm:my-5">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg sm:text-xl font-semibold my-3 sm:my-5">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <>
                <span className="text-base sm:text-lg leading-relaxed my-3 sm:my-5 break-words max-w-xs sm:max-w-lg lg:max-w-2xl text-dark-custom-dark-blue">
                  {children}
                </span>
                <hr className="my-4 sm:my-8 last:hidden h-[0.2px] border-light-light-white " />
              </>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-gray-300 pl-3 sm:pl-4 italic my-2">
                {children}
              </blockquote>
            ),
            ul: ({ children }) => (
              <ul className="list-disc sm:pl-5 my-2 sm:my-3">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal px-4 sm:pl-5 my-2 sm:my-3">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="mb-1 sm:mb-2 text-dark-custom-dark-blue text-lg">
                {children}
              </li>
            ),
            a: ({ href, children }) => {
              const title = String(children) || href;
              return (
                <div className="my-2">
                  <span className="text-sm sm:text-base font-medium text-gray-700">
                    <span className="font-semibold">Link:</span>{" "}
                    <a
                      href={href}
                      className="text-dark-logo-primary hover:text-blue-700 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {title}
                    </a>
                  </span>
                </div>
              );
            },
            // ✅ Use Next.js <Image /> instead of <img>
            img: ({ src = "/placeholder.svg", alt = "Image" }) => (
              <div className="my-3 sm:my-4">
                <Image
                  src={typeof src === "string" ? src : "/placeholder.svg"}
                  alt={alt}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-md mx-auto"
                />
              </div>
            ),
            table: ({ children }) => (
              <div className="overflow-auto">
                <table className="w-full border-collapse my-4 text-left">
                  {children}
                </table>
              </div>
            ),
            th: ({ children }) => (
              <th className="border px-4 py-2 bg-slate-100 font-bold">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="border px-4 py-2">{children}</td>
            ),
            em: ({ children }) => <em className="font-bold">{children}</em>,
            sup: ({ children }) => <sup className="font-bold">{children}</sup>,
            span: ({ children, ...props }) => (
              <span className="text-base sm:text-lg my-1 sm:my-2" {...props}>
                {children}
              </span>
            ),
          }}
        >
          {content || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default CustomMarkdown;
