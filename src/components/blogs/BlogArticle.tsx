import React from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';
import { WhatsAppFloating } from '@/components/common/WhatsAppFloating';
import { JsonLd } from '@/components/seo/JsonLd';
import { BlogInline, BlogPost, blogImageSrc, formatBlogDate } from '@/data/blogs';
import { blogPostingSchema } from '@/seo/schema';
import './BlogArticle.css';

function Inlines({ nodes }: { nodes: BlogInline[] }) {
  return (
    <>
      {nodes.map((node, index) => {
        if (node.t === 'br') return <br key={index} />;
        if (node.t === 'link') {
          return (
            <a key={index} href={node.href}>
              <Inlines nodes={node.c} />
            </a>
          );
        }
        if (node.b && node.i) {
          return (
            <strong key={index}>
              <em>{node.v}</em>
            </strong>
          );
        }
        if (node.b) return <strong key={index}>{node.v}</strong>;
        if (node.i) return <em key={index}>{node.v}</em>;
        return <span key={index}>{node.v}</span>;
      })}
    </>
  );
}

export function BlogArticle({ post }: { post: BlogPost }) {
  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />
      <Navbar />
      <article className="blog-article">
        {post.image ? (
          <figure className="blog-featured">
            <Image
              src={blogImageSrc(post.image)}
              alt={post.title}
              width={post.imageWidth}
              height={post.imageHeight}
              priority
              sizes="(max-width: 832px) 100vw, 832px"
            />
          </figure>
        ) : null}
        <h1>{post.title}</h1>
        <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
        <div className="blog-body">
          {post.blocks.map((block, index) => {
            if (block.type === 'blank') return <p key={index} className="blog-blank" />;
            if (block.type === 'h2') {
              return (
                <h2 key={index}>
                  <Inlines nodes={block.c} />
                </h2>
              );
            }
            if (block.type === 'h3') {
              return (
                <h3 key={index}>
                  <Inlines nodes={block.c} />
                </h3>
              );
            }
            if (block.type === 'h4') {
              return (
                <h4 key={index}>
                  <Inlines nodes={block.c} />
                </h4>
              );
            }
            if (block.type === 'ul' || block.type === 'ol') {
              const List = block.type;
              return (
                <List key={index}>
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Inlines nodes={item} />
                    </li>
                  ))}
                </List>
              );
            }
            if (block.type === 'table') {
              return (
                <div key={index} className="blog-table-wrap">
                  <table>
                    <tbody>
                      {block.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex}>
                              {cell.map((para, paraIndex) => (
                                <p key={paraIndex}>
                                  <Inlines nodes={para} />
                                </p>
                              ))}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }
            if (block.type === 'p') {
              return (
                <p key={index}>
                  <Inlines nodes={block.c} />
                </p>
              );
            }
            return null;
          })}
        </div>
      </article>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
