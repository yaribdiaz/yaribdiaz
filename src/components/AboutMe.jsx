import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";
const AboutMe = () => {

  return (
    <div className="flex justify-center p-5">

<div className="flex1  flex-col w-full lg:w-2/5">
      <Tabs variant="solid" aria-label="Options" className="flex justify-center font-bold">

        <Tab key="photos" title="Acerca de mí">
          <Card>
            <CardBody>
                <p className="uppercase font-bold">
                    Fernando Yarib Velázquez Díaz
                </p>
                <p className="font-medium">
                    Mexicano
                </p>
                <p className="font-medium">
                    23 años
                </p>
                <p className="font-medium">
                    Francisco I. Madero, C.P. 42660 , Hidalgo, México
                </p>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Educación">
          <Card>
            <CardBody>
                <p className=" font-bold">
                    Ing. Tecnologías de la Información
                    y Comunicaciones
                </p>
                <p className=" font-medium">
                    Institulo Tecnológico Superior 
                    del Occidente del Estado de Hidalgo
                </p>
                <p className=" font-bold">
                    Técnico en Programación
                </p>
                <p className=" font-medium">
                    Centro de Bachillerato Tecnológico Industrial y de Servicios 199
                </p>
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Cursos">
          <Card>
            <CardBody>
            <p className=" font-bold">
                REACT: Hooks, State, Context, etc..
                <span className='font-normal'> - Udemy</span>
                </p>
                <p className=" font-bold">
                VUE3:Composition,Pinia, etc..
                <span className='font-normal'> - Udemy</span>
                </p>
                <p className=" font-bold">
                GIT+GITHUB 
                <span className='font-normal'> - Udemy</span>
                </p>
                <p className=" font-bold">
                NODE
                <span className='font-normal'> - Udemy</span>
                </p>
                <p className=" font-bold">
                Competencias en Tecnologías Microsoft para la Productividad
                <span className='font-normal'> - Microsoft</span>
                </p>

                <p className=" font-bold">
                Introducción a IoT, Cisco Networking Academy
                <span className='font-normal'> - Cisco</span>
                </p>

                <p className=" font-bold">
                Data Engineering, Big Data, and Machine Learning on GCP
                <span className='font-normal'> - Coursera</span>
                </p>

                <p className=" font-bold">
                Smart Analytics, Machine Learning, and AI on Google Cloud
                <span className='font-normal'> - Coursera</span>
                </p>
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  




      {/* <div className="py-10 px-2 gap-4 flex justify-center ">
            
            <div className="grid grid-flow-row gap-6 grid-cols-1 md:grid-cols-2 ">
                <div className="bg-white rounded-md shadow-lg">
                    <div className="flex flex-col  p-3 rounded-md">
                        <div className="flex justify-center h-0 -translate-y-7 border">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 bg-white p-1 rounded-full">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <div>
                        <p className="uppercase font-bold">
                            Fernando Yarib Velázquez Díaz
                        </p>
                        <p className="font-medium">
                            Mexicano
                        </p>
                        <p className="font-medium">
                            23 años
                        </p>
                        <p className="font-medium">
                            Francisco I. Madero, C.P. 42660 , Hidalgo, México
                        </p>
                            
                        </div>
                        
                    </div>            

                </div>

                <div className="bg-white rounded-md shadow-lg">
                    <div className="flex flex-col p-3 rounded-md">
                        <div className="flex justify-center h-0 -translate-y-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 bg-white p-1 rounded-full">
                        <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                        <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                        <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                        </svg>

                        </div>

                        <div className="">
                            <p className=" font-bold">
                                Ing. Tecnologías de la Información
                                y Comunicaciones
                            </p>
                            <p className=" font-medium">
                                Institulo Tecnológico Superior 
                                del Occidente del Estado de Hidalgo
                            </p>
                            <p className=" font-bold">
                                Técnico en Programación
                            </p>
                            <p className=" font-medium">
                                Centro de Bachillerato Tecnológico Industrial y de Servicios 199
                            </p>
                            
                            
                        </div>
                        
                    </div>            

                </div>

                
                <div className="bg-white rounded-md shadow-lg">
                    <div className="flex flex-col p-3 rounded-md">
                        <div className="flex justify-center h-0 -translate-y-7">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 bg-white p-1 rounded-full">
                            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                        </svg>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className=" font-bold">
                            REACT: Hooks, State, Context, etc..
                            <span className='font-normal'> - Udemy</span>
                            </p>
                            <p className=" font-bold">
                            VUE3:Composition,Pinia, etc..
                            <span className='font-normal'> - Udemy</span>
                            </p>
                            <p className=" font-bold">
                            GIT+GITHUB 
                            <span className='font-normal'> - Udemy</span>
                            </p>
                            <p className=" font-bold">
                            NODE
                            <span className='font-normal'> - Udemy</span>
                            </p>
                            <p className=" font-bold">
                            Competencias en Tecnologías Microsoft para la Productividad
                            <span className='font-normal'> - Microsoft</span>
                            </p>

                            <p className=" font-bold">
                            Introducción a IoT, Cisco Networking Academy
                            <span className='font-normal'> - Cisco</span>
                            </p>

                            <p className=" font-bold">
                            Data Engineering, Big Data, and Machine Learning on GCP
                            <span className='font-normal'> - Coursera</span>
                            </p>

                            <p className=" font-bold">
                            Smart Analytics, Machine Learning, and AI on Google Cloud
                            <span className='font-normal'> - Coursera</span>
                            </p>
                            
                        </div>
                        
                    </div>            

                </div>
            </div>

      </div>  */}
    </div>
  )
}

export default AboutMe