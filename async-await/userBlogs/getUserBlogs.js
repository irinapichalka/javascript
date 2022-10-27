"use strict";

/**
 * @param {string[]} users
 * @return {promise}
 */

export const getUsersBlogs = async (users) => {
  const responses = await Promise.all(
    users.map((id) =>
      fetch(`https://api.github.com/users/${id}`)
        .then((response) => {
          if (!response.ok) {
            return null;
          }
          return response.json();
        })
        .then((user) => user.blog)
    )
  );
  return responses;
};
// examples
getUsersBlogs([kk, "facebook", "reactjs"]).then((linksList) =>
  console.log(linksList)
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(["microsoft"]).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
