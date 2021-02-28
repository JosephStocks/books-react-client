import React from "react";

export default function Book({ book }) {
  let {
    id,
    selfLink,
    title,
    authors,
    categories,
    description,
    imageLinks,
    industryIndentifiers,
    infoLink,
    pageCount,
    previewLink,
    publishedDate,
    publisher,
    textSnippet,
  } = book;

  const PLACEHOLDER_IMAGE = "https://tacm.com/wp-content/uploads/2018/01/no-image-available.jpeg";

  // if not description, show textSnippet
  return (
    <>
      <div key={id}>
        <div key={`Media-${id}`} image={imageLinks?.thumbnail ? imageLinks?.thumbnail : PLACEHOLDER_IMAGE} />
        <div>
          {title && <div key={`title-${id}`}>{title}</div>}
          {/* {categories && <div key={`categories-${id}`}>{categories}</div>}
          {description && <div key={`description-${id}`}>{description}</div>} */}
        </div>
      </div>
    </>
  );
}
