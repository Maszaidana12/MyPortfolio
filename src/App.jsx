import DataImage from "./data";
import {listTools, listProyek, Projectmorph} from "./data";


function App() {
  return <>
     <div className ="px-6 md:px-16 py-12">
     <div className = "hero grid grid-cols-1 md:grid-cols-2 items-center gap-10  xl:gap-10 ">
      <div className="animate__animated animate__fadeInUp animate__delay-3s">
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-3xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
          <q>Masya Allah Tabarakallah</q>
        </div>
        <h1 className="text-4xl/tight font-bold mb-6">Hi Dear!👋 I am Dana</h1>
        <p className="text-base/loose mb-6 opacity-50 text-justify">
          I am a Junior Fullstack Developer focusing on website development using basic JavaScript and React for building user interfaces. 
          I also have a strong interest in visual design, especially in creating interactive presentations using PowerPoint Morph, as well 
          as designing pamphlets and posters.
        </p>
        <div className="flex items-center sm:gap-4 gap-2">
          <a href="https://drive.google.com/file/d/1CjTPY3FucUxt1QXXYHMkvanr076FUisI/view?usp=drive_link" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-2-line ri-lg"></i></a>
           <a href="#project" className="bg-green-600 p-4 rounded-2xl hover:bg-green-400">My Project <i className="ri-arrow-right-line ri-lg"></i></a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" 
      loading="lazy"
      />
     </div>
     </div>

     {/* First About */}
     <div className="px-6 md:px-16 py-12">
     <div className=" about grid grid-cols-1 mt-32 py-10" id="about">
      
      <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration ="1000">
      <div className=" flex items-center justify-between flex-col sm:flex-row gap-6 mb-4 sm:gap-0">
       <a href="https://drive.google.com/drive/u/0/folders/1eM3I31nvJDIwniUnQJNHZUNsMUxVEn4c" className="bg-yellow-600 p-4 rounded-2xl  border border-white hover:bg-yellow-500 sm:block hidden">Certificate <i className="ri-arrow-right-line ri-lg "></i></a>
       </div>
        <p className="gap-2 text-base/loose mb-10">
          I am a Junior Fullstack Developer focusing on website development using basic JavaScript and React for building user interfaces. 
          I also have a strong interest in visual design, especially in creating interactive presentations using PowerPoint Morph, as well 
          as designing pamphlets and posters.
        </p>
        <p className="gap-2 text-base/loose mb-10">In addition to JavaScript, I have explored PHP and Python for various projects, including basic data processing and machine learning. 
          However, I currently choose to focus more on front-end development and am actively deepening my understanding of React, with plans to learn 
          other frameworks like Vue through self-study.</p>
          <div className=" flex items-center justify-between flex-col sm:flex-row gap-6 sm:gap-0">
          <a href="#" className="bg-yellow-600 p-4 rounded-2xl border border-white mb-1 hover:bg-yellow-500 sm:hidden">Certificate <i className="ri-arrow-right-line ri-lg "></i></a>
          <div className="flex items-center gap-6">
            <div>
              <h1 className="text-4xl mb-1 flex justify-center text-green-400">
                4 <span className="text-violet-500 justify-center">+</span>
              </h1>
              <p>Project</p>
            </div>
            <div>
              <h1 className="text-4xl mb-1 justify-center flex">
                2 <span className="text-violet-500">+</span>
              </h1>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
          </div>
      </div>
     </div>
     <div className="tools mt-32">
      <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration ="1000" >The Following are the Tools Used</h1>
      <p className="max-w-xl lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration ="1000" data-aos-delay ="300">The following tools were utilized in designing and developing the website interface</p>
      <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-2 gap-4">

      {listTools.map((tool) => (
        <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md
        hover:bg-blue-900 group" key={tool.id} data-aos="fade-up" data-aos-duration ="1000" data-aos-delay = {tool.dad}>
          <img src= {tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1
          group-hover:bg-zinc-900" loading="lazy" />
          <div>
            <h4 className="font-bold">{tool.nama}</h4>
            <p className="opacity-50">{tool.ket}</p>
          </div>
        </div>
      ))}
       </div> 
     </div>
     </div>
      {/*Last About*/}


      {/*first Project*/}

      <div className="project mt-32 py-10" id="project" >
  <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration ="1000">Project</h1>
  <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration ="1000" data-aos-delay ="300">
    Take a look at some of the design projects I've worked on
  </p>

  {/* Grid untuk Gambar */}
<div className="projectbox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 sm:gap-4">
  {listProyek.map(proyek => (
    <div key={proyek.id} className="p-4 bg-zinc-800 rounded-lg overflow-hidden shadow-md flex flex-col" data-aos="fade-up" data-aos-duration ="1000" data-aos-delay ={proyek.dad}>
      {proyek.gambar && (
        <img src={proyek.gambar} alt="Project Image" className="w-full object-cover h-48" />
      )}
      {/* Kontainer isi konten */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <h1 className="text-xl font-semibold my-4">{proyek.nama}</h1>
          <p className="text-base text-gray-400 mb-4">{proyek.desk}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {proyek.tools.map((tool, index) => (
              <p
                className="py-1 px-3 border text border-zinc-500 bg-blue-800 rounded-md font-semibold"
                key={index}
              >
                {tool}
              </p>
            ))}
          </div>
        </div>
        <a
          href={proyek.link}
          className="bg-violet-700 p-3 rounded-lg text-center border border-zinc-600 hover:bg-violet-400"
        >
          View Project
        </a>
      </div>
    </div>
  ))}



  {/* Grid untuk Video */}
  
  {Projectmorph.map(Project => (
  <div key={Project.id} className="p-4 bg-zinc-800 rounded-lg overflow-hidden shadow-md flex flex-col">
    {Project.video && (
      <video
        src={Project.video}
        controls
        className="w-full object-cover h-48 " data-aos="fade-up" data-aos-duration ="1000" data-aos-delay ={Project.dad}
      />
    )}
    <div className="flex flex-col justify-between flex-1 p-4">
      <div>
        <h1 className="text-xl font-semibold my-4">{Project.nama}</h1>
        <p className="text-base text-gray-400 mb-4">{Project.desk}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {Project.tools.map((tool, index) => (
            <p
              className="py-1 px-3 border text border-zinc-500 bg-blue-800 rounded-md font-semibold" 
              key={index}
            >
              {tool}
            </p>
          ))}
        </div>
      </div>
      <a
        href={Project.link}
        className="bg-violet-700 p-3 rounded-lg text-center border border-zinc-600 hover:bg-violet-400"
      >
        View Project
      </a>
    </div>
  </div>
))}
  </div>
  </div>
      {/*last Project*/}

      {/*first Contact*/}
      <div className="contact mt-32 mb-10 py-4 sm:p-10 p-0" id="contact">
  <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration ="1000" >Contact Me</h1>
  <p className="text-base leading-loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration ="1000" data-aos-delay ="300">
    Got a project, idea, or simply want to connect? I'm just a message away.
  </p>

  <form
    action="https://formsubmit.co/masahmadzaidiwr@gmail.com"
    method="POST"
    className="bg-zinc-800  p-10 max-w-xl mx-auto rounded-md w-full" data-aos="fade-up" data-aos-duration ="1000" data-aos-delay ="500"
    autoComplete="off"
  >
    {/* Hidden settings */}
    <input type="hidden" name="_subject" value="New Contact from Portfolio Website" />
    <input type="hidden" name="_template" value="box" />
    <input type="hidden" name="_captcha" value="false" />

    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Input Your Name..."
          className="border border-zinc-500 p-2 rounded-md"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Input Your Email..."
          className="border border-zinc-500 p-2 rounded-md"
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="8"
          placeholder="Input Your Message..."
          className="border border-zinc-500 p-2 rounded-md"
          required
        ></textarea>
      </div>
      <div>
        <button
          className="bg-violet-700 py-3 px-4 rounded-2xl border border-white w-full hover:bg-violet-600 transition-all"
          type="submit"
        >
          Send Message
        </button>
      </div>
    </div>
  </form>
</div>
       {/*last Contact*/}

    </>;
  
}

export default App
