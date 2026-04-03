'use client'

import { motion } from 'framer-motion'

export default function VideoShowcase() {
  // VIDEO CONFIGURATION
  // Option 1: Use YouTube URL - set videoType to 'youtube' and provide YouTube video ID
  // Option 2: Use uploaded video file - set videoType to 'file' and provide filename in /public/videos/
  // Option 3: Use direct video URL - set videoType to 'url' and provide full video URL
  
  const videoType = 'file' // 'youtube' | 'file' | 'url'
  const videoSource = 'video-diamond.mp4' // YouTube ID, filename (e.g., 'video-diamond.mp4'), or full URL
  
  // Render video based on type
  const renderVideo = () => {
    if (videoType === 'youtube') {
      return (
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoSource}?rel=0&modestbranding=1`}
          title="Diamond Group Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    } else if (videoType === 'file') {
      return (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="auto"
        >
          <source src={`/videos/${videoSource}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    } else if (videoType === 'url') {
      return (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          controls
          preload="auto"
        >
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    }
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Video Container - No Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
        >
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            {renderVideo()}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-orange-200/20 to-amber-200/20 blur-3xl rounded-full" />
        </motion.div>

      </div>
    </section>
  )
}
