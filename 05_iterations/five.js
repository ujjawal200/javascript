const coding = ["js", "rb", "py","java","cpp"]


coding.forEach(function(val){
//    console.log(val);
})

coding.forEach((item)=> {
 //   console.log(item);
})

// function can be calaed in to for each  loop

function printme(item){
//    console.log(item);
}

coding.forEach(printme);


coding.forEach((item , index, arr)=>{

    console.log(item,index,arr);

})

//obejct in array 

//shift +a alt +drop down   => to copy down something


const mycoding =[
    {
        language :"javascript",
        symbol :"js"
    },

    {  language :"java",
        symbol :"java"
    },
    {  language :"python",
        symbol :"py"
    }
]

mycoding.forEach((item)=>{

    console.log(item.language);

})



