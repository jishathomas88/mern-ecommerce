import Topbar from "../topbar/Topbar";
import React from 'react'
import Sidebar from "../sidebar/Sidebar";

function SectionLayout() {
  return (
    <>
    <Topbar />
    <div className="container" style={{
    display:"flex",
    marginTop: "10px"
}}>
        <Sidebar />
    </div>
      
    </>
  )
}

export default SectionLayout
