const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  assert.strictEqual(result, 1);
});

describe("total likes", () => {
  const listWithOneBlog = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
      __v: 0,
    },
  ];

  test("when list has only one blog, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithOneBlog);
    assert.strictEqual(result, 5);
  });

  const listWithMultipleBlogs = [
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
      __v: 0,
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
      __v: 0,
    },
    {
      _id: "5a422aa71b54a676234d17f8",
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
      likes: 5,
      __v: 0,
    },
  ];

  test("when list has multiple blogs, equals the likes of that", () => {
    const result = listHelper.totalLikes(listWithMultipleBlogs);
    assert.strictEqual(result, 15);
  });
});

describe("favorite blog", () => {
  test("of empty list is null", () => {
    const result = listHelper.favoriteBlog([]);
    assert.strictEqual(result, null);
  });

  test("of a list with one blog is that blog", () => {
    const list = [
      {
        _id: "b1",
        title: "Single",
        author: "Only Author",
        url: "http://single.com",
        likes: 9,
        __v: 0,
      },
    ];
    const result = listHelper.favoriteBlog(list);
    assert.deepStrictEqual(result, list[0]);
  });

  test("of a list with multiple blogs is the one with the most likes", () => {
    const list = [
      {
        _id: "b1",
        title: "One",
        author: "A",
        url: "http://one",
        likes: 4,
        __v: 0,
      },
      {
        _id: "b2",
        title: "Two",
        author: "B",
        url: "http://two",
        likes: 12,
        __v: 0,
      },
      {
        _id: "b3",
        title: "Three",
        author: "C",
        url: "http://three",
        likes: 7,
        __v: 0,
      },
    ];
    const result = listHelper.favoriteBlog(list);
    assert.deepStrictEqual(result, list[1]);
  });

  test("when multiple favorites exist, returns any one of them", () => {
    const list = [
      {
        _id: "c1",
        title: "Tie 1",
        author: "X",
        url: "http://tie1",
        likes: 15,
        __v: 0,
      },
      {
        _id: "c2",
        title: "Tie 2",
        author: "Y",
        url: "http://tie2",
        likes: 15,
        __v: 0,
      },
      {
        _id: "c3",
        title: "Other",
        author: "Z",
        url: "http://other",
        likes: 5,
        __v: 0,
      },
    ];
    const result = listHelper.favoriteBlog(list);

    // Should equal either of the tied favorites
    const candidates = [list[0], list[1]];
    const isMatch = candidates.some(
      (c) => JSON.stringify(c) === JSON.stringify(result)
    );

    assert.ok(isMatch, "favoriteBlog should return one of the top-liked blogs");
  });
});
