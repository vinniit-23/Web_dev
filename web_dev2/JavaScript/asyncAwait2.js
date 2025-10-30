function fetchPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post Data Fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment Data Fetched");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    // const postData = await fetchPostData();
    // const commentData = await fetchCommentData();
    let [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log("Fetching Blog Data....");
    console.log("Post Data:", postData);
    console.log("comment Data:", commentData);
  } catch (error) {
    console.error("Error occurrend in fetching blog data");
  }
}

getBlogData();
