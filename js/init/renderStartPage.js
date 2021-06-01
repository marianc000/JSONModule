export default function (user) {
  document.getElementById('root').innerHTML
    = `<div>Hello ${user.name}<div class='items'></div></div>`;
}
