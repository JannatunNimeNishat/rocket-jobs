const singleJobDetail = async(id)=>{
    console.log('test');
//    const res = await fetch('jobs.json')
   const res = await fetch('../../public/jobs.json')
   const jobs = await res.json();
 console.log(jobs);
    const singleJob = jobs.find(singleJob => singleJob.id === id);
    
   
    return singleJob;
}

/* const singleJobDetail = (id)=>{
    console.log('test',id);
    let jobs;
   fetch('../../public/jobs.json')
   .then(res=> res.json())
   .then(data => console.log(data))

    const singleJob = jobs.find(singleJob => singleJob.id === id);
    
   
    return singleJob;
} */






export default singleJobDetail;