const student = { 
    name: "Anu",
    roll_no: 62,
    marks : {"maths":90, "science":99}
};

function display()
{
    console.log("Name: " + student.name);
    console.log("Roll No: " + student.roll_no);
    var avg = (student.marks.maths + student.marks.science) / 2;
    console.log("Average Marks: " + avg);
}