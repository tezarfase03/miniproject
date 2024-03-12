let val = document.getElementById('press')
window.addEventListener('keydown', (e) => {
  val.innerHTML = `
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
    
  </tr>
  <tr>
    <td>${e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.Code}</td>
  </tr>
</table>
  `

});