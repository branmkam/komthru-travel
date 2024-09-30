"use server";
export async function getWiki(q: string) {
  let resp = await fetch("http://127.0.0.1:2024/get-wiki", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(q),
  });
  let data = resp.json();
  return data;
}

export async function getWikis(q: string) {
  let resp = await fetch("http://127.0.0.1:2024/get-wikis", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(q),
  });
  let data = resp.json();
  return data;
}
