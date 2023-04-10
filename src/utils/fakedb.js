
const setToLocalStorage = (id)=>{
    let addedJobs = getLocalStorageData();
    const check = addedJobs[id];
    if(!check){
     addedJobs[id] = 1;
    }
    else{
     alert('already added');
    }
    localStorage.setItem('applied-jobs',JSON.stringify(addedJobs))
}


const getLocalStorageData = () =>{
    let appliedJobs = {};
    const alreadyAddedJobs = localStorage.getItem('applied-jobs');
    if(alreadyAddedJobs){
        appliedJobs = JSON.parse(alreadyAddedJobs);
    }
    return appliedJobs;
}

export  {getLocalStorageData,setToLocalStorage};
