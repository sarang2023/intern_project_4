import { Link } from "react-router-dom";

function Sidebar()
{
    return(<>
    <nav class="main-header navbar navbar-expand navbar-white navbar-light bg-light">
   
   <ul class="navbar-nav ">
      
      <li class="nav-item">
      <form class="row gy-2 gx-3 align-items-center">
 
  <div class="col-auto">
  <div class="d-flex flex-row">
  <div class=""> 
  <button type="button" class="btn fs border-dark bg-secondary-subtle mx-2">Your Organization
  <br/><b>Skill genic</b>
</button>
</div>
  <div class="">
    <div class="input-group">
      <div class="input-group-text "><i class="bi bi-search"></i></div>
      <input type="text" class="form-control fs1" id="autoSizingInputGroup" placeholder="Search"/>
    </div>  </div>
  
</div>
 
   
  </div>
  
  
  
</form>
      </li>
 
      
      
     
    </ul>
        <ul class="navbar-nav ml-auto">

       
        <li class="nav-item">
       <i class="bi bi-bell fs-4 fs2 mx-1 text-danger"></i>

        </li>
        <li class="nav-item">
       <i class="bi bi-person-square fs-4 fs2 person"></i>

           
        </li>
        <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>

      
        </ul>
 
   
    
   </nav>
   
   
   
   <aside class="main-sidebar bg-black bg-gradient elevation-4">
    
     <a href="index3.html" class="brand-link text-light">
     <i class="bi bi-nut fs-3 mx-1"></i>
       <span class="fs-3 fw-bold ">Logo</span>
     </a>
 
   
     <div class="sidebar">
       
       
     
      
 
     
       <nav class="mt-2 mb-5">
         <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         
           <li class="nav-item menu-open">
             
             <ul class="nav nav-treeview ">
               <li class="nav-item active">
                 <Link to="home" class="nav-link  text-light">
                 <i class="fa-sharp fa-solid fa-house mx-2 fs-5 "></i>
                   <p className="fs-6  ">Home</p>
                  
                 </Link>
               </li>
               </ul>
               <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index2.html" class="nav-link text-light">
                 <i class="bi bi-chat-square-fill mx-2 fs-5 "></i>
                   <p className="fs-6 ">Chat</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
                    </ul>
               <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index2.html" class="nav-link text-light">
                 <i class="fa-sharp fa-solid fa-chart-line mx-2 fs-5"></i>
                   <p className="fs-6 ">Activities</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
                    </ul>
               <li class="nav-header text-secondary fw-bold fs-5">RECRUITMENT</li>
               <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index3.html" class="nav-link text-light">
                 <i class="fa-solid fa-briefcase mx-2 fs-5"></i>
                   <p className="fs-6 ">Jobs</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
             </ul>
               <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index3.html" class="nav-link text-light">
                 <i class="fa-solid fa-people-arrows mx-2 fs-5"></i>
                   <p className="fs-6 ">Interviews</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
             </ul>
               <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index3.html" class="nav-link text-light">
                 <i class="fa-solid fa-list-ul mx-2 fs-5"></i>
                   <p className="fs-6 ">New Hires</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
             </ul>
             <li class="nav-header text-secondary fw-bold fs-5">ORGANIZATION</li>
             <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index3.html" class="nav-link text-light">
                 <i class="fa-solid fa-building mx-2 fs-5"></i>
                   <p className="fs-6 ">Company Profile</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
             </ul>
             <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index3.html" class="nav-link text-light">
                 <i class="fa-solid fa-user-group mx-2 fs-5"></i>
                   <p className="fs-6 ">Community</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
             </ul>
             <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index3.html" class="nav-link text-light">
                 <i class="bi bi-people-fill mx-2 fs-5"></i>  
                   <p className="fs-6 ">Team</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
             </ul>
             <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index3.html" class="nav-link text-light">
                 <i class="bi bi-briefcase mx-2 fs-5"></i>
                   <p className="fs-6 ">HR Tool Box</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
             </ul>
             <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index3.html" class="nav-link text-light">
                 <i class="bi bi-bar-chart-fill mx-2 fs-5"></i>
                   <p className="fs-6 ">Reports</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
             </ul>
             <ul class="nav nav-treeview">
               <li class="nav-item">
                 <a href="./index3.html" class="nav-link text-light">
                 <i class="bi bi-gear-fill mx-2 fs-5"></i>
                   <p className="fs-6 ">Settings</p>
                   <i class="right fas fa-angle-right"></i>
                 </a>
               </li>
             </ul>
             <li class="nav-header fs-4 mt-5 fw-bold">Need Help?</li>
             <li class="nav-header">Open over help center</li>
           </li>
         </ul>
       </nav>
       
     </div>
     
   </aside>
    </>)
}
export default Sidebar;