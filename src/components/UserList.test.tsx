import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import UserList from "./UserList";
import axios from "axios";

jest.mock('axios')

describe("test Users", () => {


  let response
  beforeEach(() => {
    response = {
      data: [
        {
          "id": 1,
          "name": "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
          }
        },
      ]
    }
  })

  test("get users", async () => {
    axios.get.mockReturnValue(response)
    render(<UserList />);
    const usersList = await screen.findByTestId("usersList");
    const userItems = await screen.findAllByTestId("userItem");
    expect(usersList).toBeInTheDocument();
    expect(userItems.length).toBe(1);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug()
  });

})
