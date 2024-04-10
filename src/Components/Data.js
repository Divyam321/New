import React from 'react'

const Data = () => {
  return (
    <main>
      <section className="container m-auto  ">
        <div className=" container items-center justify-center text-center text-3xl pt-20 font-bold py-14" >
          <p className=" text-violet-950">Scheduling should be easy.</p>
          <p className="text-blue-700">Start free.</p>
        </div>
        <div className="container flex gap-10  text-center">
          <div className="container m-auto flex gap-5 pl-20">
            <h1>Billed Monthly</h1>
            
            <label class="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer"></input>
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              
            </label>

            <h1>Billed Annually</h1>
          </div>
          <div className="">
            <h1 className=" bg-gray-400 m-auto text-center">Save 20% with annual plans</h1>
          </div>
        </div>
      </section>
      <section className="me-auto ml-20">
        <div className="h-30 container m-auto flex flex-col md:flex-row  gap-10 mt-10 justify-center items-center text-center ">
          <div className="py-4 border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
            <h1 className="p-2">BASIC</h1>
            <h1 className="font-bold p-2 text-2xl">Always Free</h1>
            <p>When you just want the basics</p>
            <button className=" bg-blue-300  hover:bg-blue-800 p px-4 border-2 p-2 rounded">Get Started</button>
          </div>
          <div className="border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
            <h1 className="p-2">ESSENTIALS</h1>
            <h1><span className="font-bold text-3xl p-2">$8</span>/seat/mo</h1>
            <p>When you need powerful scheduling automation</p>
            <button className=" bg-blue-300  hover:bg-blue-800  px-4 border-2 p-2 rounded">Start Essentials</button>
          </div>
          <div className="py-6 border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
            <h1 className="p-2">PROFESSIONAL</h1>
            <h1><span className="font-bold text-3xl p-2">$12</span>/seat/mo</h1>
            <p>When you need customization,integration, and basic team features</p>
            <button className=" bg-blue-300  hover:bg-blue-800  px-4 border-2 p-2 rounded">Start Professional</button>
          </div>
          <div className="border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
            <h1 className="p-2">TEAMS</h1>
            <h1><span className="font-bold text-3xl p-2">$16</span>/seat/mo</h1>
            <p>When your team needs to align on a scheduling process and collaborate efficiently.</p>
            <button className=" bg-blue-300  hover:bg-blue-800  px-4 border-2 p-2 rounded">Try For Free</button>
          </div>
          <div className="border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
            <h1 className="p-2">Enterprise</h1>
            <h1 className="font-bold text-3xl p-2">Contact Us</h1>
            <p>When your 30+ member team needs advanced secuirity,control, and support</p>
            <button className=" bg-blue-300  hover:bg-violet-700 hover:text-white shadow-lg  px-4 border-2 p-2 rounded">Get Started</button>
          </div>
        </div>
      </section>
      <section className=" pt-20 container h-30 m-auto flex flex-col md:flex-row  gap-10 mt-10 justify-center items-center text-center">
        <div className="border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
          <h1>FEATURES</h1>
          <h1>Features by plan</h1>
          <p>Find the subscription that makes the most sense for you or your team</p>

        </div>
        <div className="w-40 border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
          <h1>BASIC</h1>
          <h1 className="font-bold m-2 text-xl">Free</h1>
          <button className=" bg-blue-300  hover:bg-violet-700 hover:text-white shadow-lg  px-4 border-2  rounded p-2 m-4">Sign Up</button>

        </div>
        <div className="w-40 border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
          <h1>ESSENTIALS</h1>
          <h1 className="font-bold m-2 text-xl" >$8</h1>
          <button className=" bg-blue-300  hover:bg-violet-700 hover:text-white shadow-lg  px-4 border-2  rounded p-2 m-4">Sign Up</button>

        </div>
        <div className="w-40 border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
          <h1>PROFESSIONAL</h1>
          <h1 className="font-bold m-2 text-xl">$12</h1>
          <button className=" bg-blue-300  hover:bg-violet-700 hover:text-white shadow-lg  px-4 border-2  rounded p-2 m-4">Sign Up</button>

        </div>

        <div className="w-40 border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
          <h1>TEAMS</h1>
          <h1 className="font-bold m-2 text-xl">$16</h1>
          <button className=" bg-blue-300  hover:bg-violet-700 hover:text-white shadow-lg  px-4 border-2  rounded p-2 m-4">SIgn Up</button>

        </div>
        <div className="w-40 border-2 p-2 rounded bg-gray-100 hover:bg-violet-700 hover:text-white border-blue-500">
          <h1>ENTERPRISE</h1>
          <h1 className="font-bold m-2 text-xl">-</h1>
          <button className=" bg-blue-300  hover:bg-violet-700 hover:text-white shadow-lg  px-4 border-2  rounded p-2 m-4">Contact Sales</button>

        </div>
        

        

      </section  >
      <section>
      <div class="overflow-x-auto p-20">
    <table class="table-auto mx-auto">
      <thead>
        <tr>
          <th class="w-1/4 py-2 px-4 bg-gray-200">Core Features</th>
          <th class="py-2 px-4 bg-gray-200">BASIC</th>
          <th class="py-2 px-4 bg-gray-200">ESSENTIALS</th>
          <th class="py-2 px-4 bg-gray-200">PROFESSIONAL</th>
          <th class="py-2 px-4 bg-gray-200">TEAMS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border px-4 py-2 text-sm sm:text-base">No of connections</td>
          <td class="border px-4 py-2 text-sm sm:text-base">1</td>
          <td class="border px-4 py-2 text-sm sm:text-base">2</td>
          <td class="border px-4 py-2 text-sm sm:text-base">6</td>
          <td class="border px-4 py-2 text-sm sm:text-base">8</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 text-sm sm:text-base">Active events</td>
          <td class="border px-4 py-2 text-sm sm:text-base">1</td>
          <td class="border px-4 py-2 text-sm sm:text-base">2</td>
          <td class="border px-4 py-2 text-sm sm:text-base">4</td>
          <td class="border px-4 py-2 text-sm sm:text-base">4</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 text-sm sm:text-base">Meeting Polls</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Unlimited</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Unlimited</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Unlimited</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Unlimited</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 text-sm sm:text-base">Data 11</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Data 12</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Data 13</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Data 14</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Data 15</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 text-sm sm:text-base">Google Office Pro</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Yes</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Yes 13</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Yes 14</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Yes 15</td>
        </tr>
        <tr>
          <td class="border px-4 py-2 text-sm sm:text-base">Create Group Events</td>
          <td class="border px-4 py-2 text-sm sm:text-base">-</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Yes</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Yes</td>
          <td class="border px-4 py-2 text-sm sm:text-base">Yes</td>
        </tr>
        
      </tbody>
    </table>
  </div>
      </section>
      <section className=" Ques flex flex-col md:flex-row m-20 gap-20 pl-40 border-2 p-8 border-gray-800 bg-gray-200">
        <div className="font-bold text-2xl ">
          <h1>Frequently</h1>
          <h1>Asked</h1>
          <h1>Questions</h1>
          
        </div>
        <div className="p-2 gap-2 mb-4">
          <div class="max-w-lg mx-auto">
            <label class="cursor-pointer group">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-bold">Question 1 What happens at the end of my trial?</h2>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12l-4 4h8l-4-4z"/>
                </svg>
              </div>
              <input type="checkbox" class="hidden" id="toggle1"></input>
              <div class="hidden mt-2 group-hover:block" id="answer1">
                <p class="text-gray-700">You will have to buy paid version or you can use limited free version</p>
              </div>
            </label>
          </div>
          <div class="max-w-lg mx-auto">
            <label class="cursor-pointer group">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-bold">Question 1 Is there any discount?</h2>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12l-4 4h8l-4-4z"/>
                </svg>
              </div>
              <input type="checkbox" class="hidden" id="toggle1"></input>
              <div class="hidden mt-2 group-hover:block" id="answer1">
                <p class="text-gray-700">We give discount at regular interval to students</p>
              </div>
            </label>
          </div>
          <div class="max-w-lg mx-auto">
            <label class="cursor-pointer group">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-bold">Question 1 Which is most feasible?</h2>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12l-4 4h8l-4-4z"/>
                </svg>
              </div>
              <input type="checkbox" class="hidden" id="toggle1"></input>
              <div class="hidden mt-2 group-hover:block" id="answer1">
                <p class="text-gray-700">According to the reviews , Teams pack is mostly liked by the users</p>
              </div>
            </label>
          </div>
          <div class="max-w-lg mx-auto">
            <label class="cursor-pointer group">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-bold">Question 1 How can we extend our pack?</h2>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12l-4 4h8l-4-4z"/>
                </svg>
              </div>
              <input type="checkbox" class="hidden" id="toggle1"></input>
              <div class="hidden mt-2 group-hover:block" id="answer1">
                <p class="text-gray-700">You have to sign in with your old account and click on activate account</p>
              </div>
            </label>
          </div>

        </div>
      </section>
      <section className="new" >
      
        <div className="container text-center">
          <p className="font-bold text-4xl p-4">Easy access for wasy bookings</p>
          <p>Share your Calendly link from your browser , so you can schedule meetings<br/> without the back-and-forth</p>
        </div>
        <div className="container text-center">
          <button className="p-4 border-2 border-gray-200 hover:bg-blue-600">Start for free</button>
          <button className="p-4 border-2 border-gray-200 hover:bg-blue-600">Talk with sales</button>
        </div>
      </section>
      
      
    </main>
  )
}

export default Data