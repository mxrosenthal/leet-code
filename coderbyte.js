// const fetch = require('node-fetch');

// fetch(
//   'https://api-prod.linkin.bio/api/pub/linkinbio_posts?instagram_profile_id=32192'
// )
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let postsArray = data.linkinbio_posts;
//     let firstPost = postsArray[0];
//     let firstPostCaption = firstPost.caption;

//     console.log(firstPostCaption);
//     return firstPostCaption;
//   });

const getLaterEmail = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) {
      return callback(new Error('firstName parameter required'));
    }
    const email = `${firstName}@later.com`;
    return callback(email);
  }, 2000);
};

getLaterEmail('Ian', console.log);
getLaterEmail(null, console.log);
