import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2407917196575337"
     crossorigin="anonymous"></script>
    </head>
    <main>
      <Title>Click Site</Title>
      <h1>Clicker!</h1>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
