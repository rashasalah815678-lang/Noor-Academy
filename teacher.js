function saveCourse(){

let course={

course:document.getElementById("courseTitle").value,

lesson:document.getElementById("lessonTitle").value,

video:document.getElementById("videoName").value,

description:document.getElementById("lessonDescription").value

};

localStorage.setItem("course",JSON.stringify(course));

alert("✅ تم حفظ الدورة");

}