import { createClient } from "contentful";

export default function useContentful() {
  const client = createClient({
    space: "zefmaiz4axl6",
    accessToken: "HO0pxPxx2HXGqx7yAn6hjINYe6S90OpLh5e5w_NBC2I",
    host: "preview.contentful.com",
  });
  const getProducts = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "product",
        select: "fields",
        order: "fields.name",
      });
      const filteredEntries = entries.items.map((item) => {
        const image = item.fields.image.fields;
        return { ...item.fields, image };
      });
      // console.log(filteredEntries);
      // description
      // image > file > url;
      // name;
      // price;
      // serial;

      return filteredEntries;
    } catch (e) {
      console.log("error is", e);
    }
  };
  return { getProducts };
}
