import { useState } from "react"

function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    console.log("Subscribe:", email)
    setSubscribed(true)
    setEmail("")
  }

  return (
    <footer className="bg-[#0B1D38] px-[16px] pt-[48px] pb-[16px] text-center">
      <h2 className="font-['Montserrat'] text-[26px] font-bold text-white">
        Stay Updated
      </h2>
      <p className="mt-[8px] font-['Nunito_Sans'] text-[16px] text-white/90">
        Subscribe to our newsletter for the latest fashion trends and sales
      </p>

     <form onSubmit={handleSubmit} className="mx-auto mt-[24px] flex w-full max-w-[470px] gap-[16px]">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
         <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="min-w-0 flex-1 rounded-[8px] border border-gray-500 bg-[#16294A] px-[12px] py-[10px] font-['Montserrat'] text-[16px] font-medium text-white placeholder:text-gray-400 outline-none focus:border-white"
         />
        <button
         type="submit"
         disabled={email.trim() === ""}
         className="cursor-pointer rounded-[8px] bg-[#F8FAFC] px-[20px] font-['Montserrat'] font-medium text-[16px] text-[#0B1D38] transition duration-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
        >
            Subscribe
        </button>
    </form>

      {subscribed && (
        <p className="mt-[16px] font-['Nunito_Sans'] text-[16px] text-green-400">
          Thanks for subscribing!
        </p>
      )}

    <div className="mx-auto max-w-[1100px] pt-[64px]">
     <p className="font-['Montserrat'] text-[14px] text-white/60">
        &copy; 2026 Designed &amp; Developed by Derik Boghosian
     </p>
    </div>
    </footer>
  )
}

export default Footer