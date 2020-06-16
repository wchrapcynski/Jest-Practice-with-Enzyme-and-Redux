import moxios from "moxios";
import { testStore } from "./../../utils/utils";
import { fetchPosts } from "./../actions/index";

describe("fetchposts Actions", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should update correctly", () => {
    const expectedState = []
    for(let i = 0; i < 10; i++) {
      expectedState.push({title: `Sample Title ${i}`, body: `Sample Body ${i}`})
    }

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({ status: 200, response: expectedState });
    });

    return store.dispatch(fetchPosts())
    .then(() => {
      const newState = store.getState();
      expect(newState.postsReducer.posts).toStrictEqual(expectedState);
    });
  });
});
