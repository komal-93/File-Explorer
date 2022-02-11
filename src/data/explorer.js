const explorer = {
  id: "0001",
  type: "donut",
  name: "Cake",
  ppu: 0.55,
  isFolder: true,
  items: [
    {
      id: "1001",
      type: "Regular",
      name: "Public",
      isFolder: true,
      items: [
        {
          id: "1002",
          type: "Chocolate",
          isFolder: false,
          name: "hello.html"
        },
        {
          id: "1003",
          type: "Blueberry",
          isFolder: false,
          name: "hello1.html"
        },
        {
          id: "1004",
          type: "Devil's Food",
          isFolder: true,
          name: "hello2.html",
          items: [
            {
              id: "1003",
              type: "Blueberry",
              isFolder: false,
              name: "hello21.html"
            }
          ]
        }
      ]
    },
    {
      name: "src",
      isFolder: false
    }
  ]
};

export default explorer;
