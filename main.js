const form  = document.getElementById('form');
let name  = document.getElementById('name');
let email  = document.getElementById('email');
let password  = document.getElementById('password');
let currentUser = null
let currentid = 0

// comment = {article:"", comment:""};
// like =
// let comments = [{article:"", comment:""}]
// let likes = [{article:"", number:1}]

const users = JSON.parse(localStorage.getItem("users")) ?? []
let isAuthenticated = localStorage.getItem("isAuthenticated", "true")
form?.addEventListener('submit', e=> {
  e.preventDefault();
  addData();
})

// click
// submit
// mouseover


function addData(e) {

  currentUser = {
    id: crypto.randomUUID(),
    email: email.value,
    password: password.value,
    previllege: (() => {
      for(let user of users) {
        if(user.previllege === "admin") {
  
          return "guest"
        }
      }
      return "admin"
    })()
  }
  users.push(currentUser)
localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem("isAuthenticated", "true")

if(currentUser.previllege === "guest") {
  location.href = "/index.html"
} 
else {
  location.href = "/dashboard.html"
}

  //  email = email.value;
  //  password = password.value;
  
    // localStorage.setItem('userEmail', email);
    // localStorage.setItem('userpwd', password);


    console.log(users);
  }
  
  function login(e) {
  
    e.preventDefault();
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pwd').value;
    
    console.log(email, pass);
    const user = users.find(user => user.email === email && user.password === pass)
    localStorage.setItem("authenticatedUser", JSON.stringify(user))
    if(user.previllege === "admin") {
      location.href = "/dashboard.html"
    }
    else {
      location.href = "/"
    }

    // if (email === localStorage.getItem('userEmail') && pass === localStorage.getItem('userpwd')) {
    //   window.location.replace("./dashboard.html");
    // }
    // else {
    //   document.getElementById('error').textContent = 'Invalid credentials'
    // }
  }

  
  const blogs = JSON.parse(localStorage.getItem("blog")) ?? [];
  console.log('string')

  // function displayblogs(blogs){



 

  //   const blogDOMContent = blogs.reduce((blogString, currentblog) => blogString + `
  //     <div id=${currentblog.id} class="work-2">
  //     <div><img class="image2" src="image/youreal.png"></div>
  //     <div class="work-2-2">
  //         <div class='work-2-2-1'>
  //         ${currentblog.title}
  //         </div>
  //         <div class='work-2-2-2'>
  //             <div class="work-text">${currentblog.subTitle}</div>
  //             <div class="work-text">${currentblog.body}
  //             </div>
  //         </div>
  //     </div>
  // </div>
  //     `
  //   , "")

  //   document.querySelector(".work-container").innerHTML = blogDOMContent


  // }

  // displayblogs(blogs)

  function displayblogs(blogs){



 

    const blogDOMContent = blogs.reduce((blogString, currentblog) => blogString + `
    <div class="work-2">
    <div><img class="image2" src="image/youreal.png"></div>
    <div class="work-2-2">
        <div class='work-2-2-1'>
        ${currentblog.title}
        </div>
        <div class='work-2-2-2'>
            <div class="work-text">${currentblog.subTitle}</div>
            <div class="work-text">
                <div class="like" id="${currentid}">
                    <div class="like-image" id="${currentid}">
                        <img class="like-im" src="/image/like2.png">
                    </div>
                    <div class="like-number">${currentblog.likes}</div>
                </div>
                <div class="comment" id="${currentid}">
                    <div class="comment-image" id="${currentid}">
                        <img class="comment-im" src="image/comment6.png">
                    </div>
                    <div class="comment-number">${currentblog.comments}</div>
                </div>
            </div>
        </div>
    </div>
</div>
      `
    , "")

    document.querySelector(".work-container").innerHTML = blogDOMContent


  }

  displayblogs(blogs)

  document.querySelector('#${currentid}').addEventListener("click", (e) => {
    e.preventDefault();
    const {title, content,subTitle} = form
  
      const blog = {
        title: title.value,
        subTitle: subTitle.value,
        body: content.value,
      }
    // const createdblog = blogs.filter(blog => blog.title != title.value);
    // localStorage.setItem('blog', JSON.stringify(createdblog));
    Editedblog = blogs
    for(let i=0; i < Editedblog.length; i++){
      if(Editedblog[i].title == title.value){
        Editedblog[i].body = content.value
      }
    }
    localStorage.setItem('blog', JSON.stringify(Editedblog));
  })

