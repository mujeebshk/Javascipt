

onload = fetch("/biostats.csv").then(res => {
    return res.text()
}).then(data => {
    let result = data.split(/\r?\n|\r/).map(e => {
        return e.split(",")
    })
    result.forEach(e => {
        let m = e.map(e => {
            return `<td>${e}</td>`;
        }).join("")
        let ce = document.createElement("tr");
        ce.innerHTML = m;

        console.log('fngln');
        console.log("jgnlaj")
       if (ce.innerText != "") {
            document.querySelector("table").appendChild(ce);
       }
       console.log("log")
        // console.log(m);

    })
})

// let x = document.querySelector("input")
// .addEventListener( "click", ()=> {
//     let fr = new FileReader();
//     fr.onload = e => {
//         let r = fr.result.split("\n").map(e => {
//             return e.split(",");
//         });
//         r.forEach(e => {
//             let m = e.map(e => {
//                 return `<td>${e}</td>`;
//             }).join("");
//             let ce = document.createElement("tr");
//             ce.innerHTML = m;

//             if (ce.innerText !== "") {
//                 document.querySelector("table").append(ce);

//             }


//         });

//         // console.log(r)
//     }
//     fr.readAsText(x.files[0]);

// })

// const yearData = [];
// const branchData = [];
// const nameData = [];
// const uploadconfirm = document
//   .getElementById("uploadconfirm")
//   .addEventListener("click", () => {
//     Papa.parse(document.getElementById("uploadfile").files[0], {
//       dounload: true,
//       header: true,
//       skipEmptyLines: true,
//       complete: function (results) {
//         console.log(results);
//         for (let i = 0; i < results.data.length; i++) {
//           yearData.push(results.data[i].year);
//           branchData.push(results.data[i].branch);
//           nameData.push(results.data[i].name);
//         }
//         console.log(yearData);
//         console.log(branchData);
//         console.log(nameData);
//       },
//     });
//   });

// function uploadCSVFile() {  
    //     var fileUpload = document.getElementById("csvfile");  
    //     var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;  
    //     if (regex.test(fileUpload.value.toLowerCase())) {  
    //         if (typeof(FileReader) != "undefined") {  
    //             var reader = new FileReader();  
    //             reader.onload = function(e) {  
    //                 var table = document.createElement("tr");  
    //                 table.border=1;
    //                 var rows = e.target.result.split("\n");  
    //                 for (var i = 0; i < rows.length; i++) {  
    //                     var row = table.insertRow(-1);  
    //                     var cells = rows[i].split(",");  
    //                     for (var j = 0; j < cells.length; j++) {  
    //                         var cell = row.insertCell(-1);  
    //                         cell.innerHTML = cells[j];  
    //                     }  
    //                 }  
    //                 var dvCSV = document.getElementById("csvFileTable");  
    //                 dvCSV.innerHTML = "";  
    //                 dvCSV.appendChild(table);  
    //             }  
    //             reader.readAsText(fileUpload.files[0]);  
    //         } else {  
    //             alert("This browser does not support HTML5.");  
    //         }  
    //     } else {  
    //         alert("Please upload a valid CSV file.");  
    //     }  
    // } 




let x = document.querySelector("input");
x.addEventListener("click", ()=> {
    let fr = new FileReader();
    fr.onload = e => {
        let r = fr.result.split("\n").map(e => {
            return e.split(",");
        });
        r.forEach(e => {
            let m = e.map(e => {
                return `<td>${e}</td>`;
            }).join("");
            let ce = document.createElement("tr");
            ce.innerHTML = m;

            if (ce.innerText !== "") {
                document.querySelector("table").append(ce);

            }


        });

        // console.log(r)
    }
    fr.readAsText(x.files[0]);

})
