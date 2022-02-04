// 1.  CONCEPT OF SYNC CODE OR BLOCKING OPERATION
//----------------------------------
//@work
console.log("Before");
setTimeout(() => {
  console.log("Proccessing...");
}, 2000);
console.log("After");

// 2. CAN NOT GET THE DATA & RETURN UNDEFINE
// ----------------------------------
function getUser(id) {
  setTimeout(() => {
    console.log("Proccessing from data base");
    return { id: id, githubusername: "test" };
  }, 2000);
  return console.log("done");
}
// @work
console.log("Before");
const user = getUser(1);
console.log(user);
console.log("After");

//3. CALLBACK TO GET THE OBEJECT
//----------------------------------
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Proccessing from data base");
    callback({ id: id, githubusername: "test" });
    // return { id: id, githubusername: "test" };
  }, 2000);
  //   return console.log("done");
}
// @work
console.log("Before");
getUser(1, function (user) {
  console.log("User_CallBack", user);
});
console.log("After");
//@work
// ARROW FUNCTION
console.log("Before");
getUser(1, (user) => {
  console.log("User_CallBack", user);
});
console.log("After");

//// 4 CALLBACK HELL
//----------------------------------
function getUser(id, callback) {
  setTimeout(() => {
    console.log("Proccessing from data base");
    callback({ id: id, githubusername: "test" });
    // return { id: id, githubusername: "test" };
  }, 2000);
  //   return console.log("done");
}
function getRepository(username, callback) {
  setTimeout(() => {
    console.log("Get REPO proccessing ...");
    callback(["repo1", "repo2", "repo3"]);
    // return ["repo1", "repo2", "repo3"];
  }, 2000);
}
function getCommit(commit, callback) {
  setTimeout(() => {
    console.log("Geet Repo's Commit...");
    callback("Commit Test : ");
    console.log(commit);
  }, 2000);
}
// @ work
console.log("Before");
getUser(1, (user) => {
  console.log("USER:", user);
  getRepository(user.githubusername, (repo) => {
    console.log("REPOS:", repo);
    getCommit(repo[0], (commit) => {
      console.log(commit);
    });
  });
});
console.log("After");

// 5. SOLVE CALLBACK HELL
// ----------------------------------
getUser(1, (user) => {
  console.log("USER:", user);
  getGit(user.githubusername, (repo) => {
    console.log("REPOS:", repo);
    getCommit(repo[0], (commit) => {
      console.log(commit);
    });
  });
  //   console.log("User_CallBack", user);
});
console.log("After");
//

// 1. PROMISE
// ----------------------------------
const p1 = new Promise((resolve, reject) => {
  // kick off some async work
  // ...
  setTimeout(() => {
    resolve(1);
  }, 2000);

  // reject(new Error("message"))
});
p1.then((result) => console.log(result));

//2. with error handler
// // ----------------------------------
const p2 = new Promise((resolve, reject) => {
  // kick off some async work
  // ...
  setTimeout(() => {
    reject(new Error("message"));
  }, 2000);

  // reject(new Error("message"))
});
p2.then((result) => console.log(result)).catch((err) =>
  console.log("ERROR", err.message)
);

//3. modify in pormise
//----------------------------------
// @work
const p3 = getUser(1);
p3.then((user) => getRepository(user.githubusername))
  .then((repo) => getCommit(repo[0]))
  .then((commit) => console.log(commit))
  .catch((err) => console.log("ERROR", err.message));

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("READING IN PROMISE GET USER");
      resolve({ id: id, githubusername: "TEST_PROMISE" });
    }, 2000);
  });
}
function getRepository(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("READING PROMISE REPO API");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}
function getCommit(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("READING PROMISE COMMIT DATA");
      resolve(["commit"]);
    }, 2000);
  });
}

// 4. PROMISE RESULT
//----------------------------------
const p4 = Promise.resolve({ id: 1 });
p4.then((result) => console.log(result));

const p5 = Promise.reject(new Error("THE REASON WHY FIAL"));
p5.catch((error) => console.log(error.message));

// 5. PROMISE PARRELLEL
//----------------------------------
const p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("ASYNC API 1.....");
    // resolve("test");
    reject(new Error("FAIL FOR THE APP IS BROKEN"));
  }, 2000);
});

const p7 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("ASYNC API 2.....");
    resolve(20210606);
  }, 2000);
});

Promise.all([p6, p7])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log("error", err.message));
// Promise.race 任一出現狀況
// PROMISE BASED APPROACH

getUser(1)
  .then((user) => getRepository(user.githubusername))
  .then((repo) => getCommit(repo[0]))
  .then((commit) => console.log("Commit", commit))
  .catch((err) => console.log("ERROR", err));

// ASYNC AWAIT
//----------------------------------
async function displayCommit() {
  try {
    const user = await getUser(1);
    const repo = await getRepository(user.githubusername);
    const commit = await getCommit(repo[0]);
    console.log(commit);
    console.log("ASYNC AWAIT ...");
  } catch (err) {
    console.log("ERROR", err);
  }
}

displayCommit();
