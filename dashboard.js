
// let sidebar = document.querySelector(".sidebar");
// let sidebarBtn = document.querySelector(".sidebarBtn");
// sidebarBtn.onclick = function() {
//   sidebar.classList.toggle("active");
//   if(sidebar.classList.contains("active")){
//   sidebarBtn.classList.replace("bx-menu" ,"bx-menu-alt-right");
// }else
//   sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
// }


document.querySelector("#close-btn").addEventListener("click", () => {
  document.querySelector("form").style.display = "none"
})


document.querySelector("#show-form").addEventListener("click", () => {
  document.querySelector("form").style.display = "block"
})

const blogs = JSON.parse(localStorage.getItem("blog")) ?? [];
console.log(blogs)

const form = document.querySelector("#blogEditor")
form.addEventListener("submit", (e)=> {

  e.preventDefault()

  const {title, content,subTitle} = form

    const blog = {
      title: title.value,
      subTitle: subTitle.value,
      body: content.value,
      likes: 0,
      comments: 0,
    }

    console.log(blog)
  blogs.push(blog)

  localStorage.setItem('blog', JSON.stringify(blogs))

  console.log(title.value)
})

document.querySelector('#delete').addEventListener("click", (e) => {
  e.preventDefault();
  const {title, content,subTitle} = form

    const blog = {
      title: title.value,
      subTitle: subTitle.value,
      body: content.value,
      likes: 0,
      comments: 0,
    }
  const createdblog = blogs.filter(blog => blog.title != title.value);
  localStorage.setItem('blog', JSON.stringify(createdblog));
})

document.querySelector('#Edit').addEventListener("click", (e) => {
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


const tableContent = document.querySelector("#table-content");
const usersList = JSON.parse(localStorage.getItem("users")) ?? [];

tableContent.innerHTML = usersList.reduce((tableBody, currentUser) => {
  return (
    tableBody +
    `
<tr>
            <td>John</td>
            <td>${currentUser.email}</td>
            <td>${currentUser.password}</td>
          </tr>
`
  );
});

const blogsTable = document.querySelector("#blogs-table");

let blogsTableDOM = null;

const BlogsList = JSON.parse(localStorage.getItem("blogs")) ?? [];

for (let blog of BlogsList) {
  blogsTableDOM += `
<tr>
<th>${blog.id}</th>
<th>${blog.data}</th>
</tr>
`;
}
blogsTable.innerHTML = blogsTableDOM;

