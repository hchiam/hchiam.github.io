import Head from "next/head";

export default function _Head() {
  return (
    <Head>
      <title>Howard Chiam</title>
      <meta name="description" content="Howard's Portfolio Central" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="rgb(32,32,32)" />
      <link rel="shortcut icon" href="htc.png" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/open-props@1.3.16/open-props.min.css"
      ></link>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/hchiam/css-boilerplate@6.2.0/style.css"
        integrity="sha384-3OOf6BqaPooZy0wd9x1bI3L2FYaMVCe++3HHWT3PP2rV/JR6lu51RRY74t+SwgQO"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/gh/hchiam/flying-focus@1.3.0/flying-focus.js"
        integrity="sha384-R/GTkKePjxM+7NiHK3HnRFNqvOoCND50qZZgnhKN8NsT3cRIIrTRw1EdS61VgW3W"
        crossOrigin="anonymous"
      ></script>
    </Head>
  );
}
