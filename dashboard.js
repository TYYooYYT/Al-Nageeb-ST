const auth = firebase.auth();
const db = firebase.firestore();
auth.onAuthStateChanged(user => {
  if (!user) window.location.href = "index.html";
});
function logout() {
  auth.signOut().then(() => window.location.href = "index.html");
}
function addRecord() {
  const name = document.getElementById("name").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  if (!name || isNaN(amount)) return alert("يرجى إدخال البيانات بشكل صحيح");
  db.collection("accounts").add({ name, amount, type, createdAt: new Date() })
    .then(() => {
      document.getElementById("name").value = "";
      document.getElementById("amount").value = "";
      loadRecords();
    });
}
function loadRecords() {
  const list = document.getElementById("records");
  list.innerHTML = "";
  db.collection("accounts").orderBy("createdAt", "desc").get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const data = doc.data();
        const li = document.createElement("li");
        li.textContent = `${data.name}: ${data.amount} (${data.type === "credit" ? "له" : "عليه"})`;
        list.appendChild(li);
      });
    });
}
loadRecords();