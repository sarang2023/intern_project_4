import React from 'react';
import { PieChart, Pie} from 'recharts';


function Home()
{
  
  const data02 = [
    
    { name: 'A2', value: 942, fill: '#83a6ed' },
    { name: 'B1', value: 2452, fill: '#8dd1e1' },
   
    { name: 'C2', value: 25, fill: '#f3a434' },
    
  ];
    return(<>
     <div class="content-wrapper">
   
   <div class="content-header">
     <div class="container-fluid">
       <div class="row mb-2">
         <div class="col-sm-6">
           <h1 class="m-0">Overview</h1>
         </div>
         <div class="col-sm-6">
           <ol class="breadcrumb float-sm-right">
             <li class="breadcrumb-item"><button type="button" class="btn btn-dark">Create Job</button></li>
             
           </ol>
         </div>
       </div>
     </div>
   </div>
  
   <div class="content">
     <div class="container-fluid">
       <div class="row">
         <div class="col-sm-6 mb-3 mb-sm-0">
           <div class="card">
             
             <div class="card-body">
             <div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="">
      <div class="small-box bg-light">
              <div class="inner">
              <h6 className="text-dark">Job Posts</h6>
                <h3 className="fw-bold text-secondary">2,456</h3>

                <h5 className="fw-bold text-success">+2.5%</h5>
              </div>
              <div class="icon">
              <i class="ion ion-stats-bars text-success"></i>
              </div>
     
            </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="">
      <div class="small-box bg-light">
              <div class="inner">
              <h6 className="text-dark">Total Application</h6>
                <h3 className="fw-bold text-secondary">4,561</h3>

                <h5 className="fw-bold text-danger">-4.4%</h5>
              </div>
              <div class="icon">
              <i class="ion ion-stats-bars text-danger"></i>
              </div>
     
            </div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card">
      <div class="">
      <div class="small-box bg-light">
              <div class="inner">
              <h6 className="text-dark">Interview Schedule</h6>
                <h3 className="fw-bold text-secondary">125</h3>

                <h5 className="fw-bold text-warning">+1.5%</h5>
              </div>
              <div class="icon">
              <i class="ion ion-stats-bars text-warning"></i>
              </div>
     
            </div>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-info">
      <div class="">
      <div class="small-box bg-light">
              <div class="inner">
              <h6 className="text-dark">Application on Hold</h6>
                <h3 className="fw-bold text-secondary">2,456</h3>

                <h5 className="fw-bold text-success">+4.5%</h5>
              </div>
              <div class="icon">
              <i class="ion ion-stats-bars text-success"></i>
              </div>
     
            </div>
      </div>
    </div>
  </div>
</div>  
             

               

              
             </div>
           </div>
           



           <div class="card">
             <div class="card-header border-0 p-3">
               <h2 class="card-title fw-bold">Recent Job Posts</h2>
               <div class="card-tools">
                 
                 <button type="button" class="btn btn-dark btn-sm rounded-pill">See All</button>
                 
                 
               </div>
             </div>
             <div class="card-body table-responsive pt-3">
               <table class="table table-striped table-valign-middle">
                 <thead >
                 <tr >
                   <th className='bg-primary-subtle'>Job Title</th>
                   <th className='bg-primary-subtle'>Category</th>
                   <th className='bg-primary-subtle'>Openings</th>
                   <th className='bg-primary-subtle'>Applications</th>
                   <th className='bg-primary-subtle'>Status</th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr >
                   <td >
                    
                     UI UX Designer
                   </td>
                   <td>Full Time</td>
                   <td>
                    
                      
                       12
                 
                   
                   </td>
                   <td>
                     135
                   </td>
                   <td>
                   <button type="button" class="btn btn-success btn-sm"style={{"width":"70px"}}>Active</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     
                   Full Stack Dev
                   </td>
                   <td>Full Time</td>
                   <td>
                    08
                   </td>
                   <td>
                    100
                   </td>
                   <td>
                   <button type="button" class="btn btn-danger btn-sm"style={{"width":"70px"}}>Inactive</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                     
                     DevOps
                   </td>
                   <td>Internship</td>
                   <td>
                   12
                   </td>
                   <td>
                    05
                   </td>
                   <td>
                   <button type="button" class="btn btn-success btn-sm"style={{"width":"70px"}}>Active</button>
                   </td>
                 </tr>

                 <tr>
                   <td>
                    
                    Android Dev
                 
                   </td>
                   <td>Full Time</td>
                   <td>
                    04
                   </td>
                   <td>
                     45
                   </td>
                   <td>
                   <button type="button" class="btn btn-success btn-sm"style={{"width":"70px"}}>Active</button>
                   </td>
                 </tr>
                 <tr>
                   <td>
                    
                    IOS Developer
                 
                   </td>
                   <td>Full Time</td>
                   <td>
                    18
                   </td>
                   <td>
                     96
                   </td>
                   <td>
                   <button type="button" class="btn btn-danger btn-sm"style={{"width":"70px"}}>Inactive</button>
                   </td>
                 </tr>
                 </tbody>
               </table>
             </div>
           </div>
          
         </div>
        
         <div class="col-sm-6 mb-3 mb-sm-0">
           <div class="card">
             <div class="card-header border-0">
               <div class="d-flex justify-content-between">
                 <h3 class="card-title fw-bold">Hiring Pipeline</h3>
                 <button type="button" class="btn btn-sm text-warning fw-bold">Download Report</button>
                 
               </div>
             </div>
             
             <div class="card-body">
            
             <div class="container-fluid">
  <div class="row align-items-start">
    <div class="col">
    <div class="">
  
  <div class="card-body card-body1"style={{"height":"400px"}}>
  <PieChart width={400} height={400}>
          
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={100} outerRadius={130} fill="#82ca9d" label />
        </PieChart>

  </div>
</div>
    </div>
   
   
  </div>
</div>


               <div class="d-flex flex-row justify-content-evenly">
                 <span class="mr-2">
                   <i class="fas fa-square text-primary"style={{"color":"#83a6ed"}}></i> Shortlisted 
                 </span>
                 <span class="mr-2">
                   <i class="fas fa-square"style={{"color":"#f3a434"}}></i> In Process 

                 </span>

                 <span>
                   <i class="fas fa-square"style={{"color":"#8dd1e1"}}></i> Hired 
                 </span>
               </div>
               <div class="d-flex flex-row justify-content-around">
                 <span class="mr-2">
                  
                   <h3 className='text-center'>942</h3>
                 </span>
                 <span class="mr-2">
                  
                   <h3 className='text-center'>25</h3>

                 </span>

                 <span>
                
                   <h3 className='text-center'>2452</h3>
                 </span>
               </div>
             </div>
           </div>
          



          

           <div class="card">
             <div class="card-header border-0">
               <h4 class="">Upcoming Interviews</h4>
               
             </div>
             <div class="card-body table-responsive p-0 ">
               <table class="table table-striped table-valign-middle">
                 <thead>
                 <tr>
                   <th className='bg-warning'>Name</th>
                   <th className='bg-warning'>Job</th>
                   <th className='bg-warning'>Date</th>
                   <th className='bg-warning'>Interview Time</th>
                   <th className='bg-warning'>View</th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                   <td>
                    
                   <i class="fa-solid fa-user"></i> Amir
                   </td>
                   <td>Marketing</td>
                   <td>
                    26/03/2023
                 
                   
                   </td>
                   <td>
                    2:00 Am
                   </td>
                   <td>
                   <i class="fa-solid fa-eye"></i>
                   </td>
                 </tr>
               
                 </tbody>
               </table>
             </div>
           </div>
         </div>


       </div>
     
     </div>
     
   </div>

 </div>
    </>)
}
export default Home;