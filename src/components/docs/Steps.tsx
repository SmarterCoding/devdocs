interface Step {
  title: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
}

export default function Steps({ steps }: StepsProps) {
  if (!steps.length) {
    return null;
  }

  return (
    <ol
      aria-label="Steps"
      className="my-8"
    >
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <li
            key={`${step.title}-${index}`}
            className="relative flex gap-4 pb-8 last:pb-0"
          >
            {/* Connecting line */}
            {!isLast && (
              <span
                aria-hidden="true"
                className="
                  absolute
                  left-[17px]
                  top-10
                  h-[calc(100%-18px)]
                  w-px
                  bg-gradient-to-b
                  from-gray-300
                  to-gray-200
                  dark:from-white/20
                  dark:to-white/5
                "
              />
            )}

            {/* Step number */}
            <div
              className="
                relative
                z-10
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-blue-200
                bg-blue-50
                text-sm
                font-semibold
                text-blue-700
                shadow-sm
                dark:border-blue-500/20
                dark:bg-blue-500/10
                dark:text-blue-400
              "
            >
              {index + 1}
            </div>

            {/* Content */}
            <div className="min-w-0 pt-1">
              <h3
                className="
                  text-sm
                  font-semibold
                  leading-6
                  text-gray-950
                  dark:text-white
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-1.5
                  max-w-2xl
                  text-sm
                  leading-6
                  text-gray-600
                  dark:text-gray-400
                "
              >
                {step.description}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

