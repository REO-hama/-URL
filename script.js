console.log("jsが動いてるよ")
const personallinkContainer = document.getElementById("personal_links")
const organizationlinkContainer = document.getElementById("organization_links")
const links = [
    {name:"LINE",url:"https://line.me/ti/p/gf-sOYsZWQ",border:false},
    {name:"Fenol_Nagoya",url:"https://x.com/Fenol_Nagoya",border:true},
    {name:"国際工科専門職大学",url:"https://www.iput.ac.jp/",border:true}
    ]

 
for (const link of links) {
    if (link.border) {
        const a = document.createElement("a");
        a.textContent = link.name
        a.href = link.url
        organizationlinkContainer.appendChild(a)
        continue
    }
    const a = document.createElement("a");
    a.textContent = link.name
    a.href = link.url
    personallinkContainer.appendChild(a)
}