export function getFormUrl(name: string): Promise<string> {
  return new Promise((resolve) => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "formUrlResponse" && e.data?.name === name) {
        window.removeEventListener("message", handler);
        resolve(e.data.url || "");
      }
    };
    window.addEventListener("message", handler);
    window.parent?.postMessage({ type: "getFormUrl", name }, "*");
    setTimeout(() => {
      window.removeEventListener("message", handler);
      resolve("");
    }, 3000);
  });
}