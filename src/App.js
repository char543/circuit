import './App.css';

function App() {

//setup useState for mailer

// const [mailerState, setMailerState] = useState({
//   email: "",
//   name: "",
//   message: "",
// });

//function to handle the state

// function handleStateChange(e) {
//   setMailerState((prevState) => ({
//     ...prevState,
//     [e.target.name]: e.target.value,
//   }));
// }

//function to post to the route

// const submitEmail = async (e) => {
// e.preventDefault();
// console.log({ mailerState });
// const response = await fetch("http://localhost:3001/send", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({ mailerState }),
// })
//   .then((res) => res.json())
//   .then(async (res) => {
//     const resData = await res;
//     console.log(resData);
//     if (resData.status === "success") {
//       alert("Message Sent");
//     } else if (resData.status === "fail") {
//       alert("Message failed to send");
//     }
//   })
//   .then(() => {
//     setMailerState({
//       email: "",
//       name: "",
//       message: "",
//     });
//   });
// };

  return (
    <div className="App h-screen bg-[#3e3e30] justify-around items-center flex flex-col">
      <div className='flex max-w-[80vw]'>
      <img className='p-12' src='circuit.png' alt='circuit'></img>
      </div>
      {/* <div className="z-10 flex justify-center items-center flex-col">
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-[280px] md:w-80">
            <label className="label">
              <span className="label-text text-white font-semibold">Enter your email address</span>
            </label>
            <form className="relative" onSubmit={submitEmail}>
              <input
                className="input input-bordered w-full pr-16 text-white bg-navGrey"
                placeholder="username@site.com"
                onChange={handleStateChange}
                name="email"
                value={mailerState.email}
              />
              <button className="btn btn-primary bg-stone-600 hover:bg-stone-700 absolute top-0 right-0 rounded-l-none border-none">
                Subscribe
              </button>
            </form>
          </div>
        </div> */}
        <span className='hidden' data-sumome-listbuilder-embed-id="57d1f4ba3f4b289cc2908f3e25f458c11fe42e7f55247dc0a0fd0ec7234c9cc8"></span>
    </div>
  );
}

export default App;