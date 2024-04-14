<template>
  <div class="markdown-box">
    <slot></slot>
  </div>
</template>

<style>
.markdown-box {
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(245, 245, 245);
  padding: 20px;
  border-radius: 10px;
  line-height: 1.5;
  word-wrap: break-word;
  font-weight: 200;
  font-family: var(--font-family-standard, "system-ui", "monospace", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji");
}

.markdown-box a {
  color: darkblue;
  text-decoration: underline;
}

.markdown-box h1 {
  font-family: var(--font-family-handwritten, "Architects Daughter");
}

.markdown-box h2,
.markdown-box h3,
.markdown-box h4,
.markdown-box h5,
.markdown-box h6 {
  font-family: "Architects Daughter";
  font-weight: normal;
  margin-bottom: 16px;
}

.markdown-box h1 {
  text-align: center;
}


.markdown-box p {
  margin-top: 0;
  margin-bottom: 10px;
}

.markdown-box blockquote {
  margin: 0;
  padding: 0 1em;
  color: var(--color-fg-muted);
  border-left: .25em solid var(--color-border-default);
}

.markdown-box ul,
.markdown-box ol {
  margin-top: 0;
  margin-bottom: 10px;
  padding-left: 2.25em;
}

.markdown-box ol ol,
.markdown-box ul ol {
  list-style-type: lower-roman;
}

.markdown-box ul ul ol,
.markdown-box ul ol ol,
.markdown-box ol ul ol,
.markdown-box ol ol ol {
  list-style-type: lower-alpha;
}

.markdown-box li>p {
  margin-top: 16px;
}
</style>
