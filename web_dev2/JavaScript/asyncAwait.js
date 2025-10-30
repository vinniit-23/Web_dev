function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ name: "vinit", url: "vinit.com" });
    }, 4000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching User Data....");
      const userData = await fetchUserData();
      console.log("user Data:", userData);
      console.log("user data fetched successfully");
      
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
getUserData();