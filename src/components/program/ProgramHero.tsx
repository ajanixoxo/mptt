"use client";

import { motion } from "framer-motion";
import { CircleArrowUp } from "lucide-react";
import FloatingShape from "@/components/FloatingShape";
import { useRouter } from 'next/navigation'
import AnimatedCodeBrackets from "../AnimatedCodeBrackets"
import { useThemeMode } from "@/hooks/useThemeMode";
const ProgramHero = () => {
  const theme = useThemeMode();
  const router = useRouter()
  const handleClick =() => {
    router.push('/apply')
  }
  const handlePush = () => {
    console.log("Reahced")
    router.push('/path')
  }
  return (
    <section className={`pt-15 lg:pt-32 pb-16 px-8  md:px-10 relative  overflow-hidden ${theme === 'dark' ? "dark:hero hero" : "hero2 bg-[#FEFBEA]"
      }`}>
      {/* Floating shapes */}
      <FloatingShape
        color="from-[#1F22CA] to-transparent"
        size="w-60 h-60"
        top="-5%"
        position="absolute hidden dark:flex"
        left="88%"
        delay={0}
      />

      {/* Animated stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-40 hidden dark:flex  left-6 md:right-40 text-purple-400"
      >
        <img src="/s-star.png" alt="" className="w-7 md:w-12" />
      </motion.div>
      <img src="/s_half.png" className="hidden dark:flex w-7 md:w-12 top-14 md:top-8 absolute right-1" />

      {/* Animated stars */}
      <div className="absolute  hidden dark:flex  -top-[10%] lg:-top-[20%] -left-[20%] lg:left-[40%] text-purple-400">
        <FloatingShape
          color="from-[#1F22CA] to-transparent"
          size="w-60 h-60"
          position=""
          top="5%"
          left="18%"
          delay={0}
        />


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <img src="/s-star.png" className="w-7 md:w-10 ml-40 -mt-32" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
        className="absolute hidden dark:flex bottom-40 left-20 text-blue-400"
      >
        <img src="/s-star.png" className="w-7 md:w-12" />
      </motion.div>
      {/* Stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-40 right-36 hidden dark:flex"
      >
        <motion.img
          src="/s-star.png"
          alt="Shining star"
          className="w-8 h-8"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      <div className="container mx-auto max-w-8xl relative">
      <img src="/b_star.png" className="w-22 absolute dark:hidden top-0 right-0" />
        <div className="flex flex-col mt-20 md:mt-0 lg:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            {/* Code tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="absoute top-25 left-10 hidden dark:flex"
            >
               <AnimatedCodeBrackets
                width={70}
                height={70}
                color="#F9C23A"
                strokeWidth={5}
                animationDuration={1.5}
                className="w-9 md:w-auto  absolute md:flex"
              />
              {/* <img src="/tag.png" alt="Code tag" className="w-12 h-12" /> */}
            </motion.div>

            <h1 className="text-5xl md:text-left text-center md:text-7xl font-bold  dark:-white">
               Start here. <br />
               <span className="text-[#F9C23A]">Hack-A-Path.</span>
            </h1>

            <p className="text-[#a09c9c] text-lg mb-8 md:text-left text-center">
              Join our 3-month adventure designed for 14-20 year olds and
              kickstart your tech career with hands-on projects and
              mentorship.
            </p>

            <div className="flex  gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#F9C23A] cursor-pointer  text-black px-6 md:py-2 rounded-2xl font-medium flex items-center justify-center space-x-2"
                onClick={handleClick}
              >
                <span className="w-max">Apply Now</span>
                <CircleArrowUp className="rotate-45" size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#74767F] cursor-pointer text-white px-6 py-2 rounded-2xl font-medium flex items-center justify-center space-x-2"
                onClick={handlePush}
              >
                <span  className="w-max">Explore Paths</span>
                <CircleArrowUp className="rotate-45" size={20} />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 hidden lg:flex"
          >
            <div className="relative">
              <img
                src="/p_hero.png"
                alt="Program preview"
                className="rounded-lg shadow-xl"
              />

              {/* Half star */}
              <div className="absolute -bottom-6 -right-48">
                <img src="/s_half.png" alt="" className="w-7 md:w-12" />
              </div>
            </div>
          </motion.div>
        </div>
        <img src="/b_star.png" className="w-22 absolute dark:hidden  bottom-0 left-0" />
              
      </div>
      <div className="aboslute flex w-full items-center justify-center flex-row mx-auto">
        <div>
          {" "}
          <svg
            width="134"
            height="134"
            viewBox="0 0 134 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M32.6329 58.5206C30.7583 58.7935 27.5493 58.7201 24.6716 59.0175C22.1742 59.276 19.8824 59.8583 18.3972 60.8257C16.93 61.7787 15.9821 63.1989 15.4345 64.87C14.8833 66.5734 14.7829 68.5696 14.635 70.1451C14.0175 76.7679 14.0114 83.4496 13.5954 90.082C13.4833 91.7759 14.7727 93.2451 16.4666 93.3572C18.1706 93.4671 19.6278 92.1696 19.7399 90.4756C20.1586 83.9056 20.1656 77.2764 20.7759 70.7182C20.8721 69.6894 20.8987 68.4336 21.1665 67.2737C21.2712 66.7787 21.3395 66.2602 21.7452 65.9952C22.5869 65.459 23.9068 65.2935 25.3155 65.1512C28.2858 64.8446 31.5972 64.9067 33.532 64.6209C35.2136 64.3786 36.3809 62.8066 36.1285 61.1272C35.8862 59.4456 34.3244 58.2761 32.6329 58.5206Z"
              fill="#F9C23A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M34.0093 71.8316C29.4759 72.8385 24.8045 73.591 20.2112 74.3166C18.5339 74.5791 17.3785 76.1591 17.641 77.8363C17.9157 79.5215 19.4834 80.6687 21.1707 80.4041C25.8867 79.6629 30.6889 78.8826 35.3429 77.85C37.0088 77.4849 38.0543 75.8338 37.6792 74.17C37.3162 72.5142 35.6652 71.4686 34.0093 71.8316Z"
              fill="#F9C23A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M40.3424 64.0845C40.406 65.8146 40.4865 68.4129 40.4577 69.0177C40.2073 74.2073 39.9549 79.387 39.6399 84.5694C39.5299 86.2734 40.8272 87.7304 42.5212 87.8425C44.2231 87.9424 45.6823 86.6549 45.7923 84.9508C46.1109 79.7362 46.3691 74.5344 46.6131 69.3146C46.6596 68.3489 46.6059 64.1484 46.4663 62.3084C46.3711 61.1207 46.0313 60.3634 45.9139 60.1573C45.4571 59.3932 44.8585 59.0479 44.3766 58.8564C43.4027 58.4754 42.3938 58.5221 41.3954 59.2598C41.2237 59.3909 40.2215 60.1609 40.0111 62.3799C39.9521 62.9912 40.0761 63.574 40.3424 64.0845Z"
              fill="#F9C23A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.4102 74.0314C60.3266 71.3597 62.6947 66.4965 62.6084 62.4394C62.5496 59.7945 61.5317 57.4799 59.5764 55.9424C57.8124 54.5638 55.1665 53.7298 51.3799 54.3467C49.4515 54.6626 47.7446 55.6248 46.105 56.6565C44.2177 57.8565 42.3479 59.3364 41.0244 61.1621C40.0258 62.5406 40.3418 64.469 41.7202 65.4676C43.0987 66.4662 45.0272 66.1502 46.0257 64.7717C46.8855 63.5803 48.1598 62.6578 49.3993 61.8688C50.3351 61.281 51.2637 60.6106 52.3818 60.4357C54.1273 60.1482 55.3313 60.228 55.9774 60.9938C56.5276 61.654 56.5275 62.6415 56.3604 63.6329C55.9916 65.7491 54.6008 67.9989 52.552 69.1807C50.621 70.2745 48.7415 70.475 46.6072 70.7612C43.9597 71.1042 43.8262 73.1913 43.7982 73.7014C43.7592 74.4555 43.9047 75.6324 45.2532 76.4903C45.4339 76.5989 45.8253 76.8096 46.3892 76.9417C46.8116 77.0513 47.6776 77.1718 48.0577 77.2799C49.0605 77.5497 50.0941 77.8651 51.0544 78.2805C54.0849 79.5891 56.9777 81.3369 59.2166 83.8119C60.3465 85.0735 62.3002 85.1722 63.5597 84.0323C64.8313 82.9003 64.93 80.9468 63.7901 79.6873C61.6981 77.3596 59.1506 75.5069 56.4102 74.0314Z"
              fill="#F9C23A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M89.4769 47.0758C86.9494 47.3407 82.9967 47.079 79.4966 47.5614C76.4551 47.9777 73.7351 48.9663 71.9596 50.7412C69.8637 52.8365 68.7387 55.7439 68.2363 58.96C67.6339 62.8906 67.9888 67.3212 67.8824 70.621C67.8335 72.2175 67.6833 74.077 68.0678 75.6862C68.4445 77.3077 69.2742 78.7384 70.7925 79.8017C72.8147 81.2094 75.4014 81.667 78.1535 81.4699C81.3605 81.2389 84.8005 80.1286 87.2511 79.5019C88.9042 79.0766 89.8908 77.3961 89.4655 75.7431C89.0422 74.1 87.3596 73.103 85.7166 73.5263C83.8848 74.0002 81.4304 74.8064 78.9989 75.1769C77.2793 75.4379 75.5604 75.6041 74.3167 74.7449C73.898 74.4559 73.9841 73.9228 73.9661 73.4435C73.935 72.5573 74.0225 71.6353 74.0466 70.8109C74.1291 68.1884 73.8861 64.8264 74.1367 61.6115C74.3295 59.1125 74.7447 56.6713 76.3132 55.1085C77.5512 53.8682 79.7251 53.6682 81.8973 53.5104C84.907 53.29 88.0237 53.4247 90.1386 53.1952C91.8229 53.0152 93.0535 51.4929 92.8735 49.8086C92.6915 48.1142 91.1713 46.8937 89.4769 47.0758Z"
              fill="#F9C23A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M87.4867 60.2795C82.8056 60.7401 78.2047 61.8244 73.5868 62.6813C71.9181 62.984 70.8116 64.5957 71.1164 66.2744C71.4291 67.941 73.0405 69.0476 74.7071 68.7348C79.1541 67.9144 83.5923 66.8541 88.0984 66.4097C89.7848 66.2398 91.0273 64.7253 90.8574 63.0388C90.6854 61.3423 89.1832 60.1074 87.4867 60.2795Z"
              fill="#F9C23A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M101.916 68.0393C101.888 67.7616 101.852 67.2966 101.863 67.0002C101.888 65.9864 102.003 64.9956 101.977 64.329C101.915 61.7687 101.728 58.5733 101.999 55.5012C102.226 52.9636 102.709 50.4974 104.161 48.7809C104.538 48.3329 105.14 48.0998 105.808 47.884C106.875 47.5203 108.112 47.3096 109.372 47.157C112.49 46.7559 115.716 46.6152 117.652 46.0353C119.282 45.5517 120.208 43.8316 119.724 42.2014C119.23 40.5734 117.51 39.6475 115.88 40.1311C113.788 40.7654 109.98 40.7358 106.703 41.3283C103.637 41.8758 100.976 42.9988 99.4571 44.7927C97.6438 46.9328 96.6166 49.7564 96.1165 52.8354C95.4941 56.7702 95.7372 61.1196 95.823 64.4835C95.8464 65.7285 95.5261 68.0234 95.9335 69.6909C96.2881 71.1594 97.06 72.3185 98.2236 73.0477C100.319 74.3558 102.889 74.7333 105.592 74.5045C108.781 74.2355 112.164 73.1056 114.688 72.4318C116.339 71.9963 117.314 70.3079 116.878 68.657C116.445 67.0161 114.755 66.0313 113.116 66.4747C111.206 66.9758 108.768 67.8098 106.341 68.2004C104.768 68.4616 103.194 68.618 101.916 68.0393Z"
              fill="#F9C23A"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M116.968 54.2885C111.873 55.0263 106.844 55.7291 101.824 56.8186C100.159 57.1837 99.1008 58.8268 99.4659 60.4928C99.8288 62.1486 101.472 63.2064 103.138 62.8413C108.017 61.7818 112.903 61.0988 117.845 60.383C119.526 60.1407 120.696 58.5789 120.454 56.8974C120.209 55.2058 118.647 54.036 116.968 54.2885Z"
              fill="#F9C23A"
            />
          </svg>
        </div>
        <div className="absolute left-0 lg:left-[28%] bottom-5">
        
          <svg
            width="252"
            height="172"
            viewBox="0 0 252 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5291 168.777C34.4612 163.29 44.1258 160.892 53.7028 162.036C53.7726 162.043 53.8429 162.028 53.903 161.992C53.9631 161.955 54.0096 161.9 54.0355 161.835C54.0613 161.77 54.065 161.698 54.0461 161.63C54.0271 161.563 53.9865 161.503 53.9304 161.461C46.6076 156.984 34.9415 153.928 29.7492 161.135C53.7028 125 119.5 153.5 153.004 156C190.396 158.79 245.489 126.5 245.489 93.202C245.442 92.9833 245.315 92.7901 245.133 92.6604C244.95 92.5306 244.726 92.4737 244.504 92.5007C244.277 92.514 244.064 92.6145 243.91 92.7812C243.755 92.9478 243.672 93.1678 243.676 93.395C240.504 121.501 179 146.001 153.004 146.001C122.015 146.001 56.335 104.795 25.7241 159.258C28.8241 153.742 20.5866 143.091 16.7448 139.113C16.7448 139.113 16.3607 138.689 16.1458 138.849C15.931 139.009 16.0446 139.544 16.0446 139.544C21.1539 150.204 21.9441 162.426 18.2499 173.655C18.1844 173.842 18.179 174.045 18.2344 174.236C18.2898 174.427 18.4032 174.595 18.5589 174.718C18.7145 174.841 18.9047 174.913 19.1029 174.923C19.3011 174.933 19.4975 174.88 19.6647 174.773C19.6647 174.773 25.2721 169.649 26.5291 168.777Z"
              fill="#343434"
              fill-opacity="0.7"
            />
            <path
              d="M235.859 104.594C225.613 116.968 211.476 126.263 197.146 131.416C197.064 131.433 196.979 131.418 196.909 131.372C196.839 131.327 196.79 131.255 196.773 131.174C196.755 131.092 196.771 131.007 196.817 130.937C196.862 130.867 196.933 130.818 197.015 130.801C211.465 124.201 224.571 115.652 235.338 104.237C235.385 104.168 235.458 104.12 235.541 104.105C235.623 104.089 235.708 104.107 235.777 104.155C235.847 104.202 235.894 104.275 235.909 104.357C235.925 104.44 235.907 104.525 235.859 104.594Z"
              fill="#343434"
              fill-opacity="0.7"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ProgramHero;
