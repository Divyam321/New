import React from 'react'

const End = () => {
  return (
    <footer className="container flex flex-col md:flex-row pt-20 py-4 gap-40 text-center">
      <div className="p-4 ">
        < h1 className="text-2xl font-bold text-blue-800">Easy</ h1 >
        <h1 h1 className="text-2xl font-bold text-blue-800">ahead</h1>
        <p>We take the work out of connecting with others <br/>so you can accomplish more</p>
        <div className="flex">
          <h1 className="items-start justify-center ml-20  "><img className="mx-auto md:float-right md:py-10 md:mb-4 max-w-full" src="./apple1.jpeg" alt="" /></h1>
        </div>
        
      </div>
      <div className="flex  max-w-30 gap-20 ">
        <div className="">
          <h1 className="font-bold  text-center">About</h1>
          <h1><button>About Us</button></h1>
          <h1><button>Contact Us</button></h1>
          <h1><button>Newsrooms</button></h1>
          <h1><button>Careers</button></h1>
          <h1><button>Secuirity</button></h1>
          <h1 className="font-bold p-4 flex">Support</h1>
          <h1><button>Help Center</button></h1>
          <h1><button>Video Tutorial</button></h1>
        </div>
        <div className="">
          <h1 className="font-bold">Solutions</h1>
          <h1><button>Customer Success</button></h1>
          <h1><button>Sales</button></h1>
          <h1><button>Recruit</button></h1>
          <h1><button>Information Technology</button></h1>
          <h1><button>Marketing</button></h1>
          <h1 className="font-bold py-4">Add-Ons</h1>
          <h1><button>Download for Chrome</button></h1>
          <h1><button>Download for Firefox</button></h1>
        </div>
        <div className="">
          <h1 className="font-bold ">Popular Features</h1>
          <h1><button>Embed</button></h1>
          <h1><button>Availability</button></h1>
          <h1><button>Notification</button></h1>
          <h1><button>Using Mobile App</button></h1>
          
          <h1 className="font-bold p-4">Developers</h1>
          <h1><button>Developer Tools</button></h1>
          
        </div>
        
      </div>
      
    </footer>
  )
}

export default End