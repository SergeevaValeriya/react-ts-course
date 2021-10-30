import React from 'react';
import Card, {CardVariant} from "./components/Card";
import {IUser} from "./types/types";
import UserList from "./components/UserList";

const users: IUser[] = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "city": "Gwenborough",
            "zipcode": "92998-3874",

        },
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
        },
    }
]

const App = () => {
    return (
        <div>
          <Card
              onClick={(num) => console.log('click', num)}
              variant={CardVariant.outlined}
              width="200px" height="200px">
              <button>Button</button>
              <div>Text</div>
          </Card>
            <UserList users={users} />
        </div>
    );
};

export default App;