const students = [
  { name: "Aman", marks: 85 },
  { name: "Riya", marks: 92 },
  { name: "Karan", marks: 76 },
  { name: "Priya", marks: 90 }
];

let max = -Infinity;

for(let i=0;i<students.length;i++){
    stmark = (students[i].marks);
    // console.log(stmark);
    if(stmark>max){
        max=stmark;
    }
}

console.log("the max marks of student is -",max);