"use client"
import Button from "../../components/Button"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
// import VideoBG from '/vids.mp4'
import Star from "../../components/Star"

const events = [
    {
        title: "Hack-A-Path Info Session",
        date: "July 15, 2025",
        time: "4:00PM - 6:30PM",
        location: "Online (Zoom) ",
        description:
            "Learn all about our program and how you can join the next cohort. Meet the team and get your questions answered!",
        tag: "Virtual",
    },
    {
        title: "Code Jam Weekend",
        date: "July 10-12, 2025",
        time: "9:00AM - 6:00PM",
        location: "Tech Hub 123 Innovation St",
        description:
            "A weekend of coding, fun, and prizes! Build something cool with your squad and showcase your skills.",
        tag: "In-Person",
    },
    {
        title: "Tech Career Panel",
        date: "July 25, 2025",
        time: "5:PM - 7:00PM",
        location: "Community Center 456 Future Ave",
        description:
            "Hear from young professionals who've launched successful tech careers. Get inspired by their journeys!",
        tag: "Hybrid",
    },
    {
        title: "Tech Career Panel",
        date: "July 25, 2025",
        time: "5:PM - 7:00PM",
        location: "Community Center 456 Future Ave",
        description:
            "Hear from young professionals who've launched successful tech careers. Get inspired by their journeys!",
        tag: "Hybrid",
    },
    {
        title: "Game Dev Workshop",
        date: "August 5, 2025",
        time: "1:00PM - 4:00PM",
        location: "Online (Discord)",
        description: "Learn the basics of game development and create your first mini-game in this hands-on workshop.",
        tag: "Hybrid",
    },
   
    {
        title: "Hack-A-Path Demo Day",
        date: "August 20, 2025",
        time: "3:00PM - 7:00PM",
        location: "Innovation Center 789 Tech Blvd",
        description:
            "Our current cohort showcases their final projects! Come see what you could build in just 3 months..",
        tag: "In-Person",
    },
]

const EventsSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    }

   

    const getTagColor = (tag: string) => {
        switch (tag) {
            case "INFO":
                return "bg-blue-100 text-blue-800"
            case "CODING":
                return "bg-green-100 text-green-800"
            case "CAREER":
                return "bg-purple-100 text-purple-800"
            case "SHOWCASE":
                return "bg-pink-100 text-pink-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="relative">
            {/* <div className="absolute inset-0 w-full h-full z-0">
                <video
                    className="absolute inset-0 min-w-full min-h-full object-cover w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline

                >
                    <source src={VideoBG} type="video/mp4" />
               
                    Your browser does not support the video tag.
                </video></div> */}
            <section
                id="events"
                ref={ref}
            >
                <Star classes="57" style="absolute z-20 animate-spin"
                />

                {/* Decorative Elements */}


                <div className="container mx-auto max-w-7xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="text-center flex justify-center items-center mb-12 relative z-20 top-5"
                    >
                        <div className="text-center mb-12 relative z-20 top-5">
                            <motion.h2 className=" main_text text-3xl md:text-4xl font-bold mb-4 inline-flex items-center" variants={itemVariants}>

                                Upcoming Events
                            </motion.h2>
                            <motion.p className="sec_text  text-gray-700 max-w-2xl mx-auto" variants={itemVariants}>
                                Join us at these awesome events to learn more,meet our  <br/>team, and connect with other tech enthusiasts!
                            </motion.p></div>

                        <div>
                            <svg width="37" height="35" viewBox="0 0 37 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4684 12.9011C13.0338 10.0778 10.2508 6.71564 8.15953 2.79847C7.74127 2.01825 6.76804 1.72064 5.97978 2.1389C5.19956 2.55716 4.9019 3.53044 5.32016 4.3187C7.6206 8.60587 10.6611 12.2898 14.4254 15.3865C15.1091 15.9496 16.1306 15.853 16.6937 15.1693C17.2567 14.4776 17.1521 13.4641 16.4684 12.9011Z" fill="#F9C23A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.637 1.90567C14.8139 5.15524 14.9748 8.4048 15.1759 11.6544C15.2322 12.5392 15.9964 13.2148 16.8811 13.1585C17.7659 13.1022 18.4416 12.3381 18.3853 11.4533C18.1842 8.21176 18.0233 4.97025 17.8463 1.72069C17.798 0.838319 17.0339 0.158641 16.1491 0.208511C15.2644 0.25838 14.5807 1.01848 14.637 1.90567Z" fill="#F9C23A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5783 2.56526C24.5192 5.67004 22.1867 8.53349 19.838 11.4291C19.275 12.1209 19.3795 13.1344 20.0712 13.6894C20.7629 14.2524 21.7765 14.1479 22.3315 13.4561C24.7445 10.4881 27.1414 7.5361 29.2649 4.34284C29.7556 3.60284 29.5464 2.60548 28.8064 2.11483C28.0744 1.62417 27.069 1.82526 26.5783 2.56526Z" fill="#F9C23A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5547 14.1076C28.9725 14.357 23.0445 14.365 17.4623 14.0111C16.5775 13.9629 15.8134 14.6305 15.7571 15.5233C15.7008 16.4081 16.3764 17.1722 17.2612 17.2285C22.956 17.5824 29.0047 17.5744 34.6995 17.325C35.5843 17.2848 36.276 16.5288 36.2358 15.644C36.1955 14.7592 35.4395 14.0674 34.5547 14.1076Z" fill="#F9C23A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4212 15.129C17.8638 19.3438 21.4271 23.4782 24.6204 27.886C25.1432 28.6019 26.1487 28.7627 26.8726 28.2399C27.5885 27.7171 27.7493 26.7116 27.2265 25.9957C23.993 21.5396 20.3895 17.3571 16.9067 13.094C16.3437 12.4103 15.3302 12.3058 14.6465 12.8688C13.9547 13.4319 13.8582 14.4453 14.4212 15.129Z" fill="#F9C23A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4638 16.3521C16.3646 20.7438 16.614 24.9425 16.6783 29.3906C16.6864 30.2754 17.4183 30.9832 18.3031 30.9751C19.196 30.959 19.9038 30.2351 19.8877 29.3423C19.8233 24.6851 19.5579 20.3014 18.6168 15.7006C18.4318 14.8319 17.5873 14.2688 16.7105 14.4538C15.8418 14.6307 15.2788 15.4834 15.4638 16.3521Z" fill="#F9C23A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M15.609 15.9983C13.0029 21.2105 11.6596 27.0018 8.86854 32.1014C8.44224 32.8735 8.73174 33.8548 9.51196 34.2811C10.2922 34.7074 11.2655 34.4178 11.6918 33.6456C14.499 28.5139 15.8583 22.6905 18.4885 17.4381C18.8826 16.6418 18.5609 15.6765 17.7726 15.2744C16.9763 14.8802 16.0112 15.202 15.609 15.9983Z" fill="#F9C23A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0432 14.8155C11.8552 15.7324 6.67516 16.1507 1.45494 16.77C0.570158 16.8746 -0.0572328 17.6709 0.0473324 18.5557C0.151898 19.4405 0.948276 20.0679 1.83306 19.9633C7.10958 19.344 12.3539 18.9096 17.6063 17.9846C18.475 17.8238 19.0622 16.9872 18.9093 16.1185C18.7485 15.2418 17.9199 14.6546 17.0432 14.8155Z" fill="#F9C23A" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6532 12.3707C19.5834 12.3224 18.5699 12.25 17.5243 12.0972C16.6395 11.9685 15.8271 12.5798 15.6984 13.4565C15.5697 14.3333 16.1809 15.1537 17.0577 15.2824C18.2159 15.4513 19.334 15.5318 20.5084 15.58C21.3932 15.6202 22.1492 14.9365 22.1814 14.0437C22.2216 13.1589 21.538 12.4109 20.6532 12.3707Z" fill="#F9C23A" />
                            </svg>

                        </div>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 lg:mx-0"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                className="bg-white border-2 border-black rounded-xl py-5 px-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden transform hover:-rotate-1"
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <div className={`absolute top-4 right-4 text-xs font-medium px-2 py-1 rounded ${getTagColor(event.tag)}`}>
                                    {event.tag}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                                <div className="flex items-center text-gray-600  mb-2">
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-sm">{event.date}</span>
                                </div>
                                <div className="absolute bg-black w-full h-[2px] left-0 "></div>
                                <p className="text-gray-700 sec_text mb-4 text-sm mt-5">{event.description}</p>   <div className="flex items-center text-gray-600 mb-1">
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-sm sec_text">{event.time}</span>
                                </div>
                                <div className="flex items-center text-gray-600 mb-4">
                                    <svg
                                        className="w-4 h-4 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <span className="text-sm  sec_text">{event.location}</span>
                                </div>
                                <Button text="Register Now" bg="bg-[#DED6E8]" />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-12 text-center"
                        variants={itemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <motion.button
                            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full font-medium inline-flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>View All Events</span>
                            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default EventsSection

