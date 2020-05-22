const encoder = new TextEncoder();

const greetText = encoder.encode("Hello World\nRachit2501");

await Deno.writeFile("greet.txt", greetText);
