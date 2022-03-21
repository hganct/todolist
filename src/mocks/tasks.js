import { v4 as uuidv4 } from 'uuid';


let items = {
    items: [
        {
          id: uuidv4(),
          name: "Ngày thứ 1",
          level: 0, // 0 Small, 1 Medium, 2 Hight
        },
        {
          id: uuidv4(),
          name: "Ngày thứ 2",
          level: 1, // 0 Small, 1 Medium, 2 Hight
        },
        {
          id: uuidv4(),
          name: "Ngày thứ 3",
          level: 2, // 0 Small, 1 Medium, 2 Hight
        },
        {
            id: uuidv4(),
            name: "Ngày thứ 4",
            level: 0, // 0 Small, 1 Medium, 2 Hight
          },
      ]
};

export default items;