type Testimonial = {
  quote: string;
  name: string;
  role: string;
  detail: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Flexicurl reduced our admin time by half. Members love the seamless check-ins and personalized workout plans.",
    name: "Alex Carter",
    role: "Owner, Peak Performance Gym",
    detail: "Grew recurring revenue by 22% in 3 months.",
  },
  {
    quote:
      "The analytics and automated billing have been game changers. We finally have clarity on what drives retention.",
    name: "Priya Desai",
    role: "Founder, Flow Strength Studio",
    detail: "Cut failed payments by 40% with smart retries.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-[#ebf2fe] dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-gray-400 transition-colors duration-300">
              Testimonials
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-gray-100 sm:text-4xl transition-colors duration-300">
              Loved by modern gyms and studio owners
            </h2>
            <p className="text-base text-slate-600 dark:text-gray-300 transition-colors duration-300">
              Hear from teams using Flexicurl to deliver exceptional member
              experiences and operational efficiency.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative overflow-hidden rounded-3xl bg-white/90 dark:bg-slate-900 p-6 shadow-md shadow-[#4987d2]/12 ring-1 ring-white/60 dark:ring-slate-800 backdrop-blur transition-colors duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4987d2]/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f5f9ff] via-white to-[#ebf2fe] dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 transition-colors duration-300" />
              <div className="relative space-y-4">
                <div className="text-4xl text-[#afcaed] dark:text-slate-700 transition-colors duration-300">
                  “
                </div>
                <p className="text-base leading-relaxed text-slate-700 dark:text-gray-300 transition-colors duration-300">
                  {testimonial.quote}
                </p>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent transition-colors duration-300" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-gray-100 transition-colors duration-300">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-gray-400 transition-colors duration-300">
                    {testimonial.role}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#4987d2] dark:text-[#7fb0ff] transition-colors duration-300">
                    {testimonial.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
