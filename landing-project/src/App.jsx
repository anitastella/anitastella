
import './App.css';

function App() {
  return (
    <div className='min-h-screen flex flex-col text-white'>
      <main className=' container  max-auto px-6 pt-16 flex-1 text-center '>

          < h2 className='text-2xl md:text-4xl lg:text-6xl uppercase'>
             Welcome to
          </h2>

          <h1 className='text-3x md:text-5xl lg:text-7xl uppercase font-black mb-8 mt-5' >
            ORGware Technologies.
          </h1>

          <div className='text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6
             lg:px-12 bg-white  bg-opacity-10 w-fit mx-auto mb-8 rounded-full'>
            10K + MemBers | 6 Different Locations
          </div>

          <form 
					action="https://www.orgware.in/" 
					method="post" 
	        target="_blank">

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="E.g stellaanitastella@gmail.com"
							type="email"
							name="member[email]"
							id="member_email"
							className="text-lg md:text-2xl placeholder:text-gray-200 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12
               bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full
               md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0"/>
						
						<input
							type="submit"
							value="Join Today"
							name="member[subscribe]"
							id="member_submit"
							className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-xl py-2 px-3 md:px-5 lg:py-4 lg:px-8 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
						/>
					</div>

					<div className="opacity-75 italic">
						By subscribing, you agree with ORGWARE's <a target="_blank" href="https://www.getrevue.co/terms" 
            className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" 
            className="hover:opacity-80 duration-150">Privacy Policy</a>.
					</div>

				</form>

      </main>

      <footer className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-between'>
        <p>
          Built by Anita Stella.F.R
        </p>

        <div className='flex mx-6'>
          <a href='#' className='mx-3 hover:opacity-80 duration-150'>About us</a>
          <a href='#' className='mx-3 hover:opacity-80 duration-150'>Privacy</a>
          <a href='#' className='mx-3 hover:opacity-80 duration-150'>Contact</a>

        </div>

      </footer>
    </div>
  );
}

export default App;
