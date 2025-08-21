import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Raman Shrivastava
      </h1>
      <p className="mb-4">
        {`14 years of professional experience in Artificial Intelligence both as an Entrepreneurial Leader and hands-on execution training + deploying models.

        As a co-founder & Head of AI at CustomerGlu, I built a low code SaaS platform to run gamification campaigns at scale, using Generative AI to create experiments in minutes. CustomerGlu is a Techstars backed startup that helps businesses increase user engagement and retention through gamification.

        With over 14 years of experience in AI engineering and leadership, I have a proven track record of building innovative and impactful products using cutting-edge technologies such as deep reinforcement learning, LLMs and deep learning. I have also been recognized as one of the 40 under 40 data scientists in India by Analytics India Magazine in 2019. My mission is to leverage AI, cloud and data to solve real-world problems and create positive change.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
