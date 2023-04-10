const singleJobDetail = async(id)=>{
   const res = await fetch('jobs.json')
   const jobs = await res.json();
 
    const singleJob = jobs.find(singleJob => singleJob.id === id);
    
    if(singleJob){
        return singleJob;
    }

}

export default singleJobDetail;