const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes;
  };

  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }
  const reducer = (fav, blog) => {
    return blog.likes > fav.likes ? blog : fav;
  };
  return blogs.reduce(reducer);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
