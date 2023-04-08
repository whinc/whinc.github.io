import React from "react";

export function highlightKeyword(input: string, keyword: string) {
  if (
    !keyword ||
    !input ||
    !input.toUpperCase().includes(keyword.toUpperCase())
  )
    return input;

  const startIndex = input.toUpperCase().indexOf(keyword.toUpperCase());

  return (
    <span>
      {input.substring(0, startIndex)}
      <span style={{ backgroundColor: "#ffff00" }}>
        {input.substring(startIndex, startIndex + keyword.length)}
      </span>
      {input.substring(startIndex + keyword.length)}
    </span>
  );
}
