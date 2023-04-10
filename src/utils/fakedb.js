
const appliedJobs = async()=>{
    // const res = await fetch('jobs.json')
    const res = await fetch('../../public/jobs.json')
    const jobs = await res.json();
    let addedJobs = [];
    const savedJobs = getLocalStorageData();
   for(const id in savedJobs){
    const singleAppliedJobData = jobs.find(singleJob => singleJob.id === id);
    if(singleAppliedJobData){
        addedJobs.push(singleAppliedJobData)
    }
   }

    return addedJobs;
}



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


const getAssignmentMarks = async()=>{
    const res = await fetch('../../public/assignment_marks.json')
    const assignmentMarks = await res.json()
    return assignmentMarks
}

export  {getLocalStorageData,setToLocalStorage,appliedJobs, getAssignmentMarks};
