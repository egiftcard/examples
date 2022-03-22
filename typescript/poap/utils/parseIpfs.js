export default function parseUrl(url) {
  if (url.includes("ipfs://")) {
    return url.replace("ipfs://", "https://gateway.ipfscdn.io/ipfs/");
  } else {
    return url;
  }
}
