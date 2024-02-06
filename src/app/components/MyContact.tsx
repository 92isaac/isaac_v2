import NavBar from "./NavBar";
import Socials from "./Socials";
import ContactForm from "./ContactForm";
const MyContact = () => {
    return ( 
        <main className=" ml-0 lg:ml-[26%] lg:right-0 w-full lg:w-[74%] bg-eerie-black rounded-lg border md:border-0 border-jet border-solid shadow-sm md:shadow-none shadow-jet p-5 flex flex-col gap-10 mt-5 lg:mt-0 pb-10 lg:mb-0 mb-[4rem] overflow-hidden">
                  <div className="fixed top-7 right-7">


            <NavBar />
            </div>

                <section className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl md:text-[28px] font-bold" data-aos="fade-down">Contact Details</h1>
                        <div className="bg-vegas-gold h-[5px] w-[60px] rounded-full" data-aos="fade-down"></div>
                    </div>
                </section>

            <Socials />

            <ContactForm />
        </main>
     );
}
 
export default MyContact;