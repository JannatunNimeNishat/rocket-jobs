const singleJobDetail = async(id)=>{
   const res = await fetch('jobs.json')
   const jobs = await res.json();
 
    const singleJob = jobs.find(singleJob => singleJob.id === id);
    
    if(singleJob){
        console.log(singleJob);
        return singleJob;
    }
    else{
        
        return 0;
    }
}

export default singleJobDetail;